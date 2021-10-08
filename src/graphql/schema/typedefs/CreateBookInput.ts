import { GraphQLInputObjectType, GraphQLNonNull, GraphQLString } from 'graphql'

const CreateBookInput = new GraphQLInputObjectType({
  name: 'CreateBookInput',
  description: 'Create Book Input',
  fields: {
    title: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The title of the book',
    },
    author: {
      type: new GraphQLNonNull(GraphQLString),
      description: 'The author of the book',
    },
  },
})

export default CreateBookInput
