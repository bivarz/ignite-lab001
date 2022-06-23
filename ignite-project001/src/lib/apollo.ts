import { ApolloClient, InMemoryCache } from "@apollo/client";

export const client = new ApolloClient({
  uri:  'https://api-sa-east-1.graphcms.com/v2/cl4qdk12n3kd901xn0fu5fgcd/master',
  cache: new InMemoryCache()
});