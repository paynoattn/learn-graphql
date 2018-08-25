import { GraphQLObjectType, GraphQLSchema, GraphQLString } from 'graphql';

export const query = new GraphQLObjectType({
  name: 'PotterType',
  description: 'The base Pottery Query',
  fields: () => ({
    aboutPotter: {
      type: GraphQLString,
      description: 'Info about this application',
      resolve: () => `
        This application is a graphl application for creating players, and getting information for fantasy
        based tabletop role playing games
      `.replace(/(?:\r\n|\r|\n)/g, '')
    }
  })
})


export const schema = new GraphQLSchema({
  query, 
//  mutation 
});

