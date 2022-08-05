const express = require('express');
const { json } = require('express');
const db = require('./database');

require('dotenv').config();

const app = express();

app.use(json());
app.use(require('./routes/user'));

const PORT = process.env.PORT || 1337;

app.listen(PORT, (req, res) => {
  console.log(`Server listening on PORT: ${PORT}`);
});
