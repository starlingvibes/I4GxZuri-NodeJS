const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let Manager = require('../models/Manager');

exports.managerRegister = async (req, res) => {
  await Manager.find({ email: req.body.email })
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
            const user = new Manager({
              name: req.body.name,
              email: req.body.email,
              password: hash,
            });

            user
              .save()
              .then((result) =>
                res.status(201).json({
                  message: result,
                })
              )
              .catch((err) => res.status(500).json({ error: err }));
          }
        });
      }
    });
};

exports.managerDelete = async (req, res) => {
  await Manager.deleteOne({ _id: req.params.userID })
    .exec()
    .then((response) =>
      res.status(200).json({ message: 'User deleted successfully!' })
    )
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.managerLogin = async (req, res) => {
  await Manager.find({ email: req.body.email })
    .exec()
    .then((managers) => {
      if (managers.length == 0) {
        return res.sendStatus(404);
      }
      bcrypt.compare(req.body.password, managers[0].password, (err, same) => {
        if (err) {
          res.sendStatus(401);
        }
        if (same) {
          // create a token
          const token = jwt.sign(
            {
              email: managers[0].email,
              userID: managers[0]._id,
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
};
