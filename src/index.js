import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { ApolloProvider } from 'react-apollo';
import { ApolloClient } from 'apollo-client';
import { HttpLink } from 'apollo-link-http';
import { InMemoryCache } from 'apollo-cache-inmemory';
import gql from 'graphql-tag';


const CurrentUserForLayout = gql`
query{
allBlogT {
  blogTitle
  blogText
}
}
`;

console.log("first log",CurrentUserForLayout);

const client = new ApolloClient({
  link: new HttpLink({ uri: 'http://localhost:8080/graphql' }),
  cache: new InMemoryCache()
});

client.query({ query: gql`query{
allBlogT {
  blogTitle
  blogText
}
}` }).then(console.log);

ReactDOM.render( <ApolloProvider client={client}>
    <div> Hello </div>
  </ApolloProvider>,
  document.getElementById('root'));
registerServiceWorker();
