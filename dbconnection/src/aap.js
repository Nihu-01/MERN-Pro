const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27017/NeneDB").then(() => {
  console.log("Connection successful.....");
}).catch((error) => {
  console.error(error);
});

