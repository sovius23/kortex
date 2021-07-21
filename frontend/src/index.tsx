import ReactDOM from 'react-dom';

import {App} from "./App";

import client from "./client";
import {ApolloProvider} from "@apollo/client";

import "./Instagram/inst";

ReactDOM.render(
  <ApolloProvider client={client}>
      <App></App>
  </ApolloProvider>
  
    ,
  document.getElementById('root')
);
