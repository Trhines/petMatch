const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const { typeDefs, resolvers } = require('./schemas')
const { authMiddleware } = require('./utils/auth')
const path = require("path")
const db = require('./config')

const app = express();
const PORT = process.env.PORT || 3001;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  context: authMiddleware,
})

const startServer = async () => {
  await server.start()
  server.applyMiddleware({ app })
}

startServer()

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, '../client/build')));
}

db.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});