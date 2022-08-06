const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
let Staff = require('../models/Staff');

exports.staffRegister = async (req, res) => {
  await Staff.find({ email: req.body.email })
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
            const user = new Staff({
              name: req.body.name,
              email: req.body.email,
              password: hash,
            });

            user
              .save()
              .then((result) => res.status(201).json(result))
              .catch((err) => res.status(500).json({ error: err }));
          }
        });
      }
    });
};

exports.staffDelete = async (req, res) => {
  await Staff.deleteOne({ _id: req.params.userID })
    .exec()
    .then((response) =>
      res.status(200).json({ message: 'User deleted successfully!' })
    )
    .catch((err) => {
      res.status(500).json({ error: err });
    });
};

exports.staffLogin = async (req, res) => {
  await Staff.find({ email: req.body.email })
    .exec()
    .then((staff) => {
      if (staff.length == 0) {
        return res.sendStatus(404);
      }
      bcrypt.compare(req.body.password, staff[0].password, (err, same) => {
        if (err) {
          res.sendStatus(401);
        }
        if (same) {
          // create a token
          const token = jwt.sign(
            {
              email: staff[0].email,
              userID: staff[0]._id,
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
