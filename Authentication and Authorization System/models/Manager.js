const db = require('../database');

const managerSchema = new db.Schema(
  {
    name: { type: String, required: true },
    email: { type: String, require: true, unique: true },
    password: { type: String, require: true },
    role: {
      type: String,
      enum: ['user', 'staff', 'manager', 'admin'],
      default: 'manager',
    },
  },
  { timestamps: true }
);

const Manager = db.model('Manager', managerSchema);
module.exports = Manager;
