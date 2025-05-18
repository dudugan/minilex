import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient, Root } from '../../generated/prisma'

const prisma = new PrismaClient()

export interface RootCreateBody {
  phono: string
  ortho: string
  definition?: string
  notes?: string
  etymology?: string
  wordIds?: number[]
}

const rootsRoutes: FastifyPluginAsync = async (app) => {

  // GET/READ /roots/:id
  app.get<{ Params: { id: string } }>
  ('/:id', async (req, reply) => {
    const root = await prisma.root.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!root) {
      return reply.status(404).send({ error: 'Not found' })
    }
    return root
  })

  // GET/SEARCH (list=search with empty query)
  app.get<{ Querystring: { search?: string } }>
  ('/', async (req, reply) => {
    const { search } = req.query
    const where = search 
      ? {
        OR: [
          { phono: { contains: search } },
          { ortho: { contains: search } },
          { definition: { contains: search } }, 
          { notes: { contains: search } },
          { etymology: { contains: search } }
        ]
      }
      : {}

    const roots = await prisma.root.findMany({ where })
    return reply.send(roots)
  })

  // POST/CREATE /roots
  app.post<{ Body: RootCreateBody }>('/', async (req, reply) => {
    const {
      phono, 
      ortho, 
      definition, 
      notes,
      etymology,
      wordIds
    } = req.body
    const newRoot = await prisma.root.create({
      data: {
        phono,
        ortho,
        definition,
        notes,
        etymology,
        words: wordIds
          ? { connect: wordIds.map((wid : number) => ({
            id: wid })) }
          : undefined
      }
    })
    return reply.status(201).send(newRoot)
  })

  // PUT/UPDATE /roots/:id
  app.put<{ Params: { id: string }; 
            Body: Partial<RootCreateBody> }>(
    '/:id', async (req, reply) => {
      const id = Number(req.params.id)
      const {
        phono, 
        ortho, 
        definition, 
        notes,
        etymology,
        wordIds
      } = req.body
      try {
        const updated = await prisma.root.update({
          where: { id },
          // guarded spreads
          data:{
              ...(phono && { phono }),
              ...(ortho && { ortho }),
              ...(definition && { definition }),
              ...(notes && { notes }),
              ...(etymology && { etymology }),
              ...(wordIds && { words: 
                { set: wordIds.map((wid : number) => 
                ({ id: wid })) } })
            }
        })
        return reply.send(updated)
      } catch {
        return reply.status(404).send({ error: 'Not found' })
      }
    }
  )

  // DELETE /roots/:id
  app.delete<{ Params: { id: string } }>
  ('/:id', async (req, reply) => {
    const id = Number(req.params.id)
    try {
      await prisma.root.delete({ where: { id } })
      return reply.status(204).send()
    } catch {
      return reply.status(404).send({ error: 'Not found' })
    }
  })
}

export default rootsRoutes