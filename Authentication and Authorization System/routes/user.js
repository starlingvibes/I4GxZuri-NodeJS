const express = require('express');
const router = express();
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const User = require('../models/Users');
require('dotenv').config();

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
  User.deleteOne({ _id: req.params.userID })
    .exec()
    .then((response) =>
      res.status(200).json({ message: 'User deleted successfully!' })
    )
    .catch((err) => {
      res.status(500).json({ error: err });
    });
});

// logging in
router.post('/login', (req, res) => {
  User.find({ email: req.body.email })
    .exec()
    .then((users) => {
      if (users.length == 0) {
        return res.sendStatus(404);
      }
      bcrypt.compare(req.body.password, users[0].password, (err, same) => {
        if (err) {
          res.sendStatus(401);
        }
        if (same) {
          // create a token
          const token = jwt.sign(
            {
              email: users[0].email,
              userID: users[0]._id,
            },
            process.env.SECRET_KEY,
            {
              expiresIn: '1h',
            }
          );
          return res.status(200).json({
            message: 'Authorization successful',
            token: token,
          });
        }
        res.sendStatus(401);
      });
    })
    .catch((err) => {
      console.log(err);
      return res.status(500).json({
        error: err,
      });
    });
});

module.exports = router;
