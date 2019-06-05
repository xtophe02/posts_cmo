// import { Prisma } from 'prisma-binding'
// import { fragmentReplacements } from './resolvers/index'

const {Prisma} = require('prisma-binding')
const prisma = new Prisma({
    typeDefs: 'src/generated/prisma.graphql', //need graphql-cli to generate a schema
    endpoint: process.env.PRISMA_ENDPOINT,
    secret: process.env.PRISMA_SECRET,
    // fragmentReplacements
})

// export { prisma as default }
module.exports = { prisma }