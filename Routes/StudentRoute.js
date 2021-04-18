const express = require("express");

const {
  AddStudent,
  deleteStudent,
  findStudent,
  updateStudent
} = require("../Controller/StudentController");

const router = express.Router();

router.post("/student/api/post", AddStudent);
router.delete("/student/api/delete/:id", deleteStudent);
router.get("/student/api/get", findStudent);
router.put("/student/api/update/:id", updateStudent);

module.exports = router;
