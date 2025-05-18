import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient, Category } from '../../generated/prisma'

const prisma = new PrismaClient()

export interface CategoryCreateBody {
  name: string
  featureIds?: number[]
  senseIds?: number[]
  // grammar tables later
}

const categoriesRoutes: FastifyPluginAsync = async (app) => {

  // GET/READ /categories/:id
  app.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const category = await prisma.category.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!category) return reply.status(404).send({ error: 'Not found' })
    return category
  })

  // GET/SEARCH (list=search with empty query)
  app.get<{ Querystring: { search?: string } }>('/', async (req, reply) => {
    const { search } = req.query
    const where = search 
      ? {
        OR: [
          { name: { contains: search } },
        ]
      }
      : {}

    const categories = await prisma.category.findMany({ where })
    return reply.send(categories)
  })

  // POST/CREATE /categories
  app.post<{ Body: CategoryCreateBody }>('/', async (req, reply) => {
    const {
      name, 
      senseIds, 
      featureIds
    } = req.body
    
    const newCategory = await prisma.category.create({
      data: {
        name,
        senses: senseIds
          ? { connect: senseIds.map((sid : number) => ({ 
            id: sid })) } 
            : undefined,
        features: featureIds
          ? { connect: featureIds.map((fid : number) => ({ 
            id: fid })) } 
            : undefined } 
    })
    
    return reply.status(201).send(newCategory)
  })

  // PUT/UPDATE /categories/:id
  app.put<{ Params: { id: string }; Body: Partial<CategoryCreateBody> }>(
    '/:id', async (req, reply) => {
      const id = Number(req.params.id)
      const {
        name, 
        senseIds, 
        featureIds
      } = req.body
      try {
        const updated = await prisma.category.update({
          where: { id },
          // guarded spreads
          data: {
            ...(name && { name }),
            ...(senseIds && { senses: { set: senseIds.map((sid : number) => ({ id: sid })) } }),
            ...(featureIds && { features: { set: featureIds.map((fid : number) => ({ id: fid })) } })
          }
        })
        return reply.send(updated)
      } catch(err) {
        req.log.error(err)
        return reply.status(404).send({ error: 'Not found' })
      }
    }
  )

  // DELETE /categories/:id
  app.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const id = Number(req.params.id)
    try {
      await prisma.category.delete({ where: { id } })
      return reply.status(204).send()
    } catch {
      return reply.status(404).send({ error: 'Not found' })
    }
  })
}

export default categoriesRoutes