import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import TermPackage from './npmTerminal';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});

function App() {
  return (
    <ApolloProvider client={client}>
      <main>
        <p>Hello World</p>
        <div><TermPackage/></div>
      </main>
    </ApolloProvider>
  );
}

export default App;
