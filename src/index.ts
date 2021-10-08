import { ApolloServer } from 'apollo-server'
import dotenv from 'dotenv-safe'
import { performAstCodegen } from './codegen'
import schema from './graphql/schema/schema'
import prisma from './prisma/client'
import { IApolloServerContext } from './interfaces/IApolloServerContext'

dotenv.config()

const startServer = () => {
  performAstCodegen()

  const context: IApolloServerContext = { prisma }

  const server = new ApolloServer({ schema, context })

  // Run codegen to generate our schemas

  // The `listen` method launches a web server.
  server
    .listen()
    .then(({ url }) => {
      console.log(`🚀  Server ready at ${url}graphql`)
    })
    .catch(err => console.log('Error launching our server', err))
}

startServer()
