const express = require('express');
const path = require('path');
const { ApolloServer } = require('apollo-server-express');
const db = require('./config')

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

db.sync({ force: false }).then(() => {
    app.listen(PORT, () => console.log(`Now listening on port ${PORT}`));
  });