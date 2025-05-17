import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '../generated/prisma'

const app = Fastify({ logger: true })

// Enable CORS so your React app (running on e.g. localhost:5173) can call this API
app.register(cors, { 
  origin: (origin, cb) => {
    cb(null, true)
  }
})

const prisma = new PrismaClient()

// A simple GET endpoint to fetch all roots
app.get('/roots', async (request, reply) => {
  const roots = await prisma.root.findMany()
  return roots
})

// Start the server
const start = async () => {
  try {
    await app.listen({ port: 3000 })
    console.log('🚀 Server listening at http://localhost:3000')
  } catch (err) {
    app.log.error(err)
    process.exit(1)
  }
}

start()