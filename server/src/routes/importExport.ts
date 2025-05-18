import { FastifyPluginAsync } from 'fastify'
import { PrismaClient } from '../../generated/prisma'

const prisma = new PrismaClient()
const importExport: FastifyPluginAsync = async (app) => {
  // EXPORT
  app.get('/export', async (_, reply) => {
    const [roots, words, categories, features, senses, grammarTables] =
      await Promise.all([
        prisma.root.findMany(),
        prisma.word.findMany(),
        prisma.category.findMany(),
        prisma.feature.findMany(),
        prisma.sense.findMany(),
        prisma.grammarTable.findMany(),
      ])
    return { roots, words, categories, features, senses, grammarTables }
  })

  // IMPORT
  app.post<{ Body: any }>('/import', async (req, reply) => {
    const data = req.body

    // clear existing data
        // PROBABLY HAVE TO DELETE IN RIGHT ORDER
    await prisma.sense.deleteMany()
    await prisma.word.deleteMany()
    await prisma.feature.deleteMany()
    await prisma.category.deleteMany()
    await prisma.root.deleteMany()
    await prisma.grammarTable.deleteMany()

    // recreate from import
    await prisma.root.createMany({ data: data.roots })
    await prisma.category.createMany({ data: data.categories })
    await prisma.feature.createMany({ data: data.features })
    await prisma.word.createMany({ data: data.words })
    await prisma.sense.createMany({ data: data.senses })
    await prisma.grammarTable.createMany({ data: data.grammarTables })

    // you may need to handle join tables and nested relations separately

    return reply.code(204).send()
  })
}

export default importExport