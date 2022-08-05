const db = require('../database');

const userSchema = new db.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
      type: String,
      enum: ['user', 'staff', 'manager', 'admin'],
      default: 'user',
    },
  },
  { timestamps: true }
);

const User = db.model('User', userSchema);
module.exports = User;
