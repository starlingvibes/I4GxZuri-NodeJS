const express = require('express');
const router = express();
const bcrypt = require('bcrypt');

const User = require('../models/Users');

// registration
router.post('/register', (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((users) => {
      if (users.length >= 1) {
        return res.status(409).json({
          message: 'Email already taken!',
        });
      } else {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          if (err) {
            return res.status(500).json({
              error: err,
            });
          } else {
            const user = new User({
              email: req.body.email,
              password: hash,
            });

            user
              .save()
              .then((result) => res.sendStatus(201))
              .catch((err) => res.status(500).json({ error: err }));
          }
        });
      }
    });
});

// deleting a user
router.delete('/user/delete/:userID', (req, res) => {
  User.remove({ _id: req.params.userID })
    .exec()
    .then((response) =>
      res.status(200).json({ message: 'User deleted successfully!' })
    )
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

module.exports = router;
