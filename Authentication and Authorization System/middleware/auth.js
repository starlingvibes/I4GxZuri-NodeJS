const jwt = require('jsonwebtoken');
require('dotenv').config();

const secret = process.env.SECRET_KEY;

exports.verifyUser = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret);
    req.userData = decoded;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

exports.verifyStaff = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret);
    req.staffData = decoded;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

exports.verifyManager = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret);
    req.managerData = decoded;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};

exports.verifyAdmin = (req, res, next) => {
  try {
    const token = req.headers.authorization;
    const decoded = jwt.verify(token, secret);
    req.adminData = decoded;
    next();
  } catch (error) {
    return res.sendStatus(401);
  }
};
