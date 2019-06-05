// import { GraphQLServer, PubSub } from 'graphql-yoga'
// import { resolvers, fragmentReplacements } from './resolvers/index'
// import prisma from './prisma'

// const pubsub = new PubSub()

// const server = new GraphQLServer({
//     typeDefs: './src/schema.graphql',
//     resolvers,
//     context(request) {
//         return {
//             pubsub,
//             prisma,
//             request
//         }
//     },
//     fragmentReplacements
// })

// server.start({ port: process.env.PORT || 4000 }, () => {
//     console.log('The server is up!')
// })

const {prisma} = require('./prisma')

const express = require('express');
const graphqlHTTP = require('express-graphql');

const app = express();

// app.use('/graphql', graphqlHTTP({
//   schema: MyGraphQLSchema,
//   graphiql: true
// }));


prisma.query.users(null, '{ id name}').then(data=>console.log(JSON.stringify(data, undefined, 2)))

app.listen(process.env.PORT);