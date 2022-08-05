const db = require('../database');

const staffSchema = new db.Schema(
  {
    name: { type: String, required: true, unique: true },
    email: { type: String, require: true },
    password: { type: String, require: true },
    role: {
      type: String,
      enum: ['user', 'staff', 'manager', 'admin'],
      default: 'staff',
    },
  },
  { timestamps: true }
);

const Staff = db.model('Staff', staffSchema);
module.exports = Staff;
