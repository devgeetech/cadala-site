/**
 * Implement Gatsby's SSR (Server Side Rendering) APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/ssr-apis/
 */

// You can delete this file if you're not using it

import ApolloClient from 'apollo-boost';
import React from "react"
import GlobalState from "./src/context/GlobalState"
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

import "./src/sass/main.scss"

const client = new ApolloClient({
  uri: 'https://cadala-site.herokuapp.com/v1/graphql',
  fetch,
});

export const wrapRootElement = ({ element }) => (
    <GlobalState>
      <ApolloProvider client={client}>
        {element}
      </ApolloProvider>
    </ GlobalState>
  )