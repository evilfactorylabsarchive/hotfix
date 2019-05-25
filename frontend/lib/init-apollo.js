import { ApolloClient, InMemoryCache, HttpLink } from 'apollo-boost'
import fetch from 'isomorphic-unfetch'

const url =
  process.env.NODE_ENV === 'production'
    ? 'https://hotfix.evilfactory.now.sh'
    : 'http://localhost:3000'

let apolloClient = null

function create(initialState) {
  return new ApolloClient({
    connectToDevTools: process.browser,
    ssrMode: !process.browser,
    link: new HttpLink({
      uri: `${url}/graphql`,
      credentials: 'same-origin',
      fetch: !process.browser && fetch
    }),
    cache: new InMemoryCache().restore(initialState || {})
  })
}

export default function initApollo(initialState) {
  if (!process.browser) {
    return create(initialState)
  }

  if (!apolloClient) {
    apolloClient = create(initialState)
  }

  return apolloClient
}
