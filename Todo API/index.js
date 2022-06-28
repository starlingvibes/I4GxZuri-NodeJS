// importing external dependencies and routes
const express = require('express');
const { json } = require('express');
const { default: mongoose } = require('mongoose');
const routes = require('./routes/todoRoute');

require('dotenv').config();

const app = express();

app.use(json());

// initializing environment variables
const port = process.env.PORT || 3000;
const uri = process.env.ATLAS_URI;

// connecting to MongoDB
mongoose.connect(uri, { useNewUrlParser: true });
const connection = mongoose.connection;
connection.once('open', () => {
  console.log('MongoDB connection established successfully!');
});

// setting the root route
app.use('/', routes);

// configuring server listener
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
