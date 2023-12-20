const mongoose = require("mongoose");

mongoose.connect("mongodb://localhost:27012/NeneDB",{
    useNewUrlParser: true, useUnifiedTopology: true
}).then(()=> console.log("connection successfull....."))
.catch((error)=> console.log(error)); 