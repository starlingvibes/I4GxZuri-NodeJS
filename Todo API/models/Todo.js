const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// creating a new mongoose schema
const TodoSchema = new Schema(
  {
    // _id added by mongodb
    title: { type: String, required: true },
    time: { type: String, required: true },
    description: { type: String, required: true },
  },
  {
    timestamps: true,
  }
);

// using the schema as a database model
const Todo = mongoose.model('Todo', TodoSchema);

module.exports = Todo;
