import { GraphQLNonNull } from 'graphql'
import CreateBookInput from '@src/graphql/schema/typedefs/CreateBookInput'
import GqlBook from '@src/graphql/schema/typedefs/GqlBook'
import { createBook } from '@src/data/bookService'
import { IApolloServerContext } from '@src/interfaces/IApolloServerContext'
import { Book } from '.prisma/client'

const createBookMutation = {
  type: GqlBook,
  args: {
    input: {
      type: new GraphQLNonNull(CreateBookInput),
      description: 'Book Input to be created',
    },
  },
  resolve: async (
    _source: unknown,
    { input: { title, author } }: any,
    _context: IApolloServerContext
  ): Promise<Book> => {
    return createBook(title, author)
  },
}

export default createBookMutation
