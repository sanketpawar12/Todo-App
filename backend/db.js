/*
* Todo {
    title: string;
    description: string;
    completed: boolean
    }
*/

const mongoose = require("mongoose");
// mongodb url handy
// mongodb+srv://sanketpawar3454:CgeNKiDhZbacUuk7@cluster0.8pgqa.mongodb.net/
mongoose.connect(
  "mongodb+srv://sanketpawar3454:CgeNKiDhZbacUuk7@cluster0.8pgqa.mongodb.net/"
);

const todoSchema = mongoose.Schema({
  title: String,
  description: String,
  completed: Boolean,
});

const todo = mongoose.model("todos", todoSchema);
module.exports = {
  todo,
};
