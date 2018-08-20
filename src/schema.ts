import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

export const query = new GraphQLObjectType({
  name: 'PotterType',
  description: 'The base Pottery Query',
  fields: () => ({
    aboutPotter: {
      type: GraphQLString,
      description: 'Info about this application',
      resolve: () => `
      This application is a graphl application for creating, viewing and updating students of 
      Hogwarts School of Witchcraft and Wizardry`
    }
  })
})


export const schema = new GraphQLSchema({
  query, 
//  mutation 
});

