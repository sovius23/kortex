import {ApolloClient, InMemoryCache} from "@apollo/client";
import { createUploadLink } from 'apollo-upload-client';


const defaultOptions = {
  watchQuery: {
    fetchPolicy: 'network-only',
    errorPolicy: 'ignore',
  },
  query: {
    fetchPolicy: 'network-only',
    errorPolicy: 'all',
  },
}

const client = new ApolloClient({
  uri: "http://localhost:3000/graphql/", 
  cache: new InMemoryCache(),
  link: createUploadLink({  uri: "http://localhost:3000/graphql/"}),
})

export default client;