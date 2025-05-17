import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '../generated/prisma'
import rootsRoutes from './routes/roots'

const app = Fastify({ logger: true })
app.register(cors, { origin: true })

// Enable CORS so your React app (running on e.g. localhost:5173) can call this API
// app.register(cors, { 
//   origin: (origin, cb) => {
//     cb(null, true)
//   }
// })

const prisma = new PrismaClient()

// Mount all /roots routes under /api/roots
app.register(rootsRoutes, { prefix: '/api/roots' })

// other routes here


// A simple GET endpoint to fetch all roots
// app.get('/roots', async (request, reply) => {
//   const roots = await prisma.root.findMany()
//   return roots
// })

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