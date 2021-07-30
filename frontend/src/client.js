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
  uri: "http://www.cardeasy.ru/graphql/", 
  cache: new InMemoryCache(),
  link: createUploadLink({  uri: "https://easy-visits.herokuapp.com/graphql/"}),
})

export default client;