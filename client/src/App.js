import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import './App.css';
import TermPackage from './npmTerminal';

const client = new ApolloClient({
  uri: '/graphql',
  cache: new InMemoryCache(),
});


// import {useMutation, useQuery} from '@apollo/client'
// import { LOGIN } from './utils/mutations'
// import { STORY_INFO } from './utils/queries'

function App() {
 
  // const [login] = useMutation(LOGIN);
  // const [storyInfo] = useQuery(STORY_INFO);

  // const {loginData} = await login({variables: { input: bookToSave }});
  // const {storyData} = await storyInfo({variables: { input: bookToSave }});

  // console.log('Here is the loginData', loginData);
  // console.log('Here is the storyData', storyData);


  return (
    <ApolloProvider client={client}>
      <main>
        <div><TermPackage/></div>
      </main>
    </ApolloProvider>
  );
}

export default App;
