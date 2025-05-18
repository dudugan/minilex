import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient, Feature } from '../../generated/prisma'

const prisma = new PrismaClient()

export interface FeatureCreateBody {
  name: string
  categoryIds?: number[]
  senseIds?: number[]
  // grammar tables later
}

const featuresRoutes: FastifyPluginAsync = async (app) => {

  // GET/READ /categories/:id
  app.get<{ Params: { id: string } }>
  ('/:id', async (req, reply) => {
    const feature = await prisma.feature.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!feature) {
      return reply.status(404).send({ error: 'Not found' })
    }
    return feature
  })

  // GET/SEARCH (list=search with empty query)
  app.get<{ Querystring: { search?: string } }>
  ('/', async (req, reply) => {
    const { search } = req.query
    const where = search 
      ? {
        OR: [
          { name: { contains: search } },
        ]
      }
      : {}

    const features = await prisma.feature.findMany({ where })
    return reply.send(features)
  })

  // POST/CREATE /features
  app.post<{ Body: FeatureCreateBody }>
  ('/', async (req, reply) => {
    const {
      name, 
      senseIds, 
      categoryIds
    } = req.body
    
    const newFeature = await prisma.feature.create({
      data: {
        name,
        senses: senseIds
          ? { connect: senseIds.map((sid : number) => ({ 
            id: sid })) } 
            : undefined,
        categories: categoryIds
          ? { connect: categoryIds.map((cid : number) => ({ 
            id: cid })) } 
            : undefined } 
    })
    
    return reply.status(201).send(newFeature)
  })

  // PUT/UPDATE /categories/:id
  app.put<{ Params: { id: string }; 
            Body: Partial<FeatureCreateBody> }>(
    '/:id', async (req, reply) => {
      const id = Number(req.params.id)
      const {
        name, 
        senseIds, 
        categoryIds
      } = req.body
      try {
        const updated = await prisma.feature.update({
          where: { id },
          // guarded spreads
          data: {
            ...(name && { name }),
            ...(senseIds && { senses: 
              { set: senseIds.map((sid : number) => 
              ({ id: sid })) } }),
            ...(categoryIds && { categories: 
              { set: categoryIds.map((cid : number) => 
              ({ id: cid })) } })
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
  app.delete<{ Params: { id: string } }>
  ('/:id', async (req, reply) => {
    const id = Number(req.params.id)
    try {
      await prisma.feature.delete({ where: { id } })
      return reply.status(204).send()
    } catch {
      return reply.status(404).send({ error: 'Not found' })
    }
  })
}

export default featuresRoutes