import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient, Sense } from '../../generated/prisma'

const prisma = new PrismaClient()

export interface SenseCreateBody {
  gloss: string
  definition: string
  notes?: string
  wordId: number
  categoryId: number
  featureIds?: number[]
}

const sensesRoutes: FastifyPluginAsync = async (app) => {

  // GET/READ /senses/:id
  app.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const sense = await prisma.sense.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!sense) return reply.status(404).send({ error: 'Not found' })
    return sense
  })

  // GET/SEARCH (list=search with empty query)
  app.get<{ Querystring: { search?: string } }>('/', async (req, reply) => {
    const { search } = req.query
    const where = search 
      ? {
        OR: [
          { gloss: { contains: search } },
          { definition: { contains: search } },
          { notes: { contains: search } }
        ]
      }
      : {}

    const senses = await prisma.sense.findMany({ where })
    return reply.send(senses)
  })

  // POST/CREATE /senses
  app.post<{ Body: SenseCreateBody }>('/', async (req, reply) => {
    const {
      gloss, 
      definition,
      notes,
      wordId,
      categoryId,
      featureIds
    } = req.body
    
    const newSense = await prisma.sense.create({
      data: {
        gloss,
        definition,
        notes,
        word: { connect: { id: wordId } },
        category: { connect: { id: categoryId } },
        features: featureIds
          ? { connect: featureIds.map((fid : number) => ({ 
            id: fid })) } 
            : undefined } 
    })
    
    return reply.status(201).send(newSense)
  })

  // PUT/UPDATE /senses/:id
  app.put<{ Params: { id: string }; Body: Partial<SenseCreateBody> }>(
    '/:id', async (req, reply) => {
      const id = Number(req.params.id)
      const {
        gloss, 
        definition,
        notes,
        wordId,
        categoryId,
        featureIds
      } = req.body
      try {
        const updated = await prisma.sense.update({
          where: { id },
          // guarded spreads
          data: {
            ...(gloss && { gloss }),
            ...(definition && { definition }),
            ...(notes && { notes }),
            ...(wordId && { word: { connect: { id: wordId } } }),
            ...(categoryId && { category: { connect: { id: categoryId } } }),
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

  // DELETE /senses/:id
  app.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const id = Number(req.params.id)
    try {
      await prisma.sense.delete({ where: { id } })
      return reply.status(204).send()
    } catch {
      return reply.status(404).send({ error: 'Not found' })
    }
  })
}

export default sensesRoutes