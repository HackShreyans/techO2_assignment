const userModel = require("../Model/StudentRegistration");
const mongoose = require("mongoose");

exports.AddStudent = (req, res) => {
  const { firstName, lastName, email, phone, password } = req.body;
  const user = new userModel({
    firstName,
    lastName,
    email,
    phone,
    password
  });
  user
    .save()
    .then(() => {
      return res.status(200).json({
        message: "created !!"
      });
    })
    .catch(e => {
      return res.status(400).json({
        error: e
      });
    });
};
exports.deleteStudent = (req, res) => {
  const userid = mongoose.Types.ObjectId(req.params.id);
  userModel
    .findByIdAndDelete({ _id: userid })
    .then(() => {
      return res.status(200).json({
        message: "deleted!!"
      });
    })
    .catch(e => {
      return res.status(400).json({
        error: e
      });
    });
};
exports.findStudent = (req, res) => {
  userModel
    .find({})
    .then(data => {
      return res.status(200).json({ data });
    })
    .catch(e => {
      return res.status(400).json({
        message: e
      });
    });
};
exports.updateStudent = (req, res) => {
  const userid = mongoose.Types.ObjectId(req.params.id);
  userModel
    .findByIdAndUpdate({ _id: userid })
    .then(() => {
      return res.status(200).json({
        message: "updated!!"
      });
    })
    .catch(e => {
      return res.status(400).json({
        error: e
      });
    });
};
