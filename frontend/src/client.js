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
  uri: "http://127.0.0.1:3000/graphql/", 
  cache: new InMemoryCache(),
  link: createUploadLink({  uri: "http://127.0.0.1:3000/graphql/"}),
})

export default client;