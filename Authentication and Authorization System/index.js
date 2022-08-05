const express = require('express');
const { json } = require('express');

require('dotenv').config();

const app = express();

app.use(json());

const port = process.env.PORT || 1337;
const uri = process.env.ATLAS_URI;

app.listen(port, (req, res) => {
  console.log(`Server listening on PORT: ${port}`);
});
