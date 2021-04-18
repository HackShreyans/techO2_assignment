const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();

const app = express();
app.use(express.json());

app.use(require("./Routes/StudentRoute"));

//app.get("/", () => {
// console.log("get the method");
//});

mongoose.connect(process.env.Db_connec, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false
});

mongoose.connection.on("connected", () => {
  console.log("Database Connected");
});

mongoose.connection.on("error", err => {
  console.log("Connection Error", err);
});

app.listen(process.env.PORT, () => {
  console.log("listen is working");
});
