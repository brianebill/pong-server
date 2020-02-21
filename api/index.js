require('dotenv').config();
const { ApolloServer } = require('apollo-server');
const typeDefs = require('./graphql/types');
const resolvers = require('./graphql/resolvers');
const winston = require('winston');
const { Loggly } = require('winston-loggly-bulk');

winston.add(new Loggly({
  token: "xxx",
  subdomain: "brianebill",
  tags: ["Winston-NodeJS"],
  json: true
}));

winston.log('info', 'process.env');
winston.log('info', JSON.stringify(process.env));

const server = new ApolloServer({
  typeDefs,
	resolvers,
  introspection: true,
  context: () => ({}),
  playground: true,
  cors: {
    origin: '*',	// <- allow request from all domains
  }
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
