const { default: mongoose } = require("mongoose");

exports.connectDatabase=async()=>{

    //connecting to datbase
    await mongoose.connect("mongodb+srv://sunilkarki:sunil@cluster0.olg63fq.mongodb.net/?retryWrites=true&w=majority");
    console.log("connection successful")
}
