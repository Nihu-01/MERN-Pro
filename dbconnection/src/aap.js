const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://niharikasable:<password>@niharikacluster.owgpv5w.mongodb.net/").then(() => {
  console.log("Connection successful.....");
}).catch((error) => {
  console.error(error);
});

const todo_schema = new mongoose.Schema({
  title:String,
  completed:Boolean
});

const Todo = mongoose.model("ToDo",todo_schema);

async function insert_todo(){
  const todo = new Todo({
    title: "walking",
    completed: false
  })
  await todo.save()
  console.log("data added sucessfully")
};

insert_todo();
