const { gql } = require('apollo-server-micro')

module.exports = gql`
  type Host {
    id: String!
    name: String!
    about: String!
    avatar: String!
    url: String!
  }
  type Query {
    Hosts: [Host!]!
  }
`
