let Todo = require('../models/Todo');

// get all todos
exports.fetch = (req, res) => {
  Todo.find()
    .then((todo) => res.json(todo))
    .catch((err) => res.status(400).json('Error ' + err));
};

// add a todo
exports.add = (req, res) => {
  const title = req.body.title;
  const time = req.body.time;
  const description = req.body.description;

  const newTodo = new Todo({
    title,
    time,
    description,
  });

  newTodo
    .save()
    .then(() => res.json('Task added!'))
    .catch((err) => res.status(400).json('Error ' + err));
};

// get a single task
exports.fetchid = (req, res) => {
  Todo.findById(req.params.id)
    .then((task) => res.json(task))
    .catch((err) => res.status(400).json('Error ' + err));
};

// delete todo
exports.delete = (req, res) => {
  Todo.findByIdAndDelete(req.params.id)
    .then(res.json('Task deleted!'))
    .catch((err) => res.status(400).json('Error ' + err));
};

// update task information
exports.update = (req, res) => {
  Todo.findById(req.params.id)
    .then((task) => {
      task.title = req.body.title;
      task.time = req.body.time;
      task.description = req.body.description;

      task
        .save()
        .then(res.json('Task updated!'))
        .catch((err) => res.status(400).json('Error ' + err));
    })
    .catch((err) => res.status(400).json('Error ' + err));
};
