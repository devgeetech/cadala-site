/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */

// You can delete this file if you're not using it

import ApolloClient from 'apollo-boost';
import React from "react"
import { ApolloProvider } from '@apollo/react-hooks';
import fetch from 'isomorphic-fetch';

import "./src/sass/main.scss"

const client = new ApolloClient({
  uri: 'https://cadala-site.herokuapp.com/v1/graphql',
  fetch,
});

export const wrapRootElement = ({ element }) => (
    <ApolloProvider client={client}>{element}</ApolloProvider>
  )
