const { gql } = require('apollo-server');
const queries = require('./queries.graphql');
const mutations = require('./mutations.graphql');
const types = require('./types.graphql');
const inputs = require('./inputs.graphql');

module.exports = gql`
  ${mutations}
  ${queries}
  ${types}
  ${inputs}
`;
