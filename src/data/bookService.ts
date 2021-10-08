import { Book } from '@prisma/client' // Generated Type of "Book" by Prisma based on the model in Schema.prisma
import prisma from '@src/prisma/client'

// eslint-disable-next-line import/prefer-default-export
export const getAllBooks = async (): Promise<Book[]> => {
  return prisma.book.findMany()
}

export const createBook = async (title: string, author: string): Promise<Book> => {
  return prisma.book.create({
    data: {
      title,
      author,
    },
  })
}
