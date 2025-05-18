import Fastify from 'fastify'
import cors from '@fastify/cors'
import { PrismaClient } from '../generated/prisma'
import rootsRoutes from './routes/roots'
import wordsRoutes from './routes/words'
import sensesRoutes from './routes/senses'
import categoriesRoutes from './routes/categories'
import featuresRoutes from './routes/features'

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
// Mount all /words routes under /api/words
app.register(wordsRoutes, { prefix: '/api/words' })
// Mount all /senses routes under /api/senses
app.register(sensesRoutes, { prefix: '/api/senses' })
// Mount all /categories routes under /api/categories
app.register(categoriesRoutes, { prefix: '/api/categories' })
// Mount all /features routes under /api/features
app.register(featuresRoutes, { prefix: '/api/features' })

// other routes here

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