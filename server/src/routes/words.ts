import { FastifyPluginAsync, FastifyReply, FastifyRequest } from 'fastify'
import { PrismaClient, Word } from '../../generated/prisma'

const prisma = new PrismaClient()

export interface WordCreateBody {
  phono: string
  ortho: string
  type: 'stem' | 'infl'
  // later can add rootIds?: number[] and senseIds?: number[]
}

const wordsRoutes: FastifyPluginAsync = async (app) => {

  // GET/READ /words/:id
  app.get<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const word = await prisma.word.findUnique({
      where: { id: Number(req.params.id) }
    })
    if (!word) return reply.status(404).send({ error: 'Not found' })
    return word
  })

  // GET/SEARCH (list=search with empty query)
  app.get<{ Querystring: { search?: string } }>('/', async (req, reply) => {
    const { search } = req.query
    const where = search 
      ? {
        OR: [
          { phono: { contains: search } },
          { ortho: { contains: search } },
          { type: { contains: search } }
        ]
      }
      : {}

    const words = await prisma.word.findMany({ where })
    return reply.send(words)
  })

  // POST/CREATE /words
  app.post<{ Body: WordCreateBody }>('/', async (req, reply) => {
    const data = req.body
    const newWord = await prisma.word.create({ data })
    return reply.status(201).send(newWord)
  })

  // PUT/UPDATE /words/:id
  app.put<{ Params: { id: string }; Body: Partial<WordCreateBody> }>(
    '/:id', async (req, reply) => {
      const id = Number(req.params.id)
      try {
        const updated = await prisma.word.update({
          where: { id },
          data: req.body
        })
        return updated
      } catch {
        return reply.status(404).send({ error: 'Not found' })
      }
    }
  )

  // DELETE /words/:id
  app.delete<{ Params: { id: string } }>('/:id', async (req, reply) => {
    const id = Number(req.params.id)
    try {
      await prisma.word.delete({ where: { id } })
      return reply.status(204).send()
    } catch {
      return reply.status(404).send({ error: 'Not found' })
    }
  })
}

export default wordsRoutes