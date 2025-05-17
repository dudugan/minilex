import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient, Root } from '../../generated/prisma'

const prisma = new PrismaClient()

export interface RootCreateBody {
  phono: string
  ortho: string
  definition?: string
  notes?: string
  etymology?: string
}

const rootsRoutes: FastifyPluginAsync = async (app) => {
  // GET /roots
  app.get('/', async (_req, reply: FastifyReply) => {
    const roots = await prisma.root.findMany()
    return reply.send(roots)
  })

  // GET /roots/:id
  app.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const root = await prisma.root.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!root) return reply.status(404).send({ error: 'Not found' })
    return root
  })

  // POST /roots
  app.post<{ Body: RootCreateBody }>('/', async (req, reply) => {
    const data = req.body
    const newRoot = await prisma.root.create({ data })
    return reply.status(201).send(newRoot)
  })

  // PUT /roots/:id
  app.put<{ Params: { id: string }; Body: Partial<RootCreateBody> }>(
    '/:id', async (req, reply) => {
      const id = Number(req.params.id)
      try {
        const updated = await prisma.root.update({
          where: { id },
          data: req.body
        })
        return updated
      } catch {
        return reply.status(404).send({ error: 'Not found' })
      }
    }
  )

  // DELETE /roots/:id
  app.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
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