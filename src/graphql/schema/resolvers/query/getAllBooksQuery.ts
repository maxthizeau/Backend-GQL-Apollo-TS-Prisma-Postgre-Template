/* eslint-disable no-unused-vars */
import { GraphQLList } from 'graphql'
import { Book } from '@prisma/client'
import GqlBook from '@src/graphql/schema/typedefs/GqlBook'
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext'
import { getAllBooks } from '@src/data/bookService'

const getAllBooksQuery = {
  type: GraphQLList(GqlBook),
  resolve: async (
    _source: unknown,
    _args: unknown,
    _context: IApolloServerContext,
    _info: unknown
  ): Promise<Book[]> => {
    return getAllBooks()
  },
}

export default getAllBooksQuery
