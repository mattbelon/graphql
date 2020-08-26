const { ApolloServer, gql } = require('apollo-server');
const typeDefs = require('./db/schema');
const resolvers = require('./db/resolvers');
const connectarDB = require('./config/db');

connectarDB();


// server
const server = new ApolloServer({
    typeDefs, resolvers,
});


//start server
server.listen().then(({url})=>{
    console.log(`Servidor listo en la URL: ${url}`)
})