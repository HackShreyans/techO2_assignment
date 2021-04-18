const mongoose = require("mongoose");

const studentRegistration = new mongoose.Schema({
  firstName: {
    type: String
  },
  lastName: {
    type: String
  },
  email: {
    type: String,
    uniqui: true
  },
  phone: {
    type: Number
  },
  password: {
    type: String,
    uniqui: true
  }
});
module.exports = mongoose.model("student", studentRegistration);
