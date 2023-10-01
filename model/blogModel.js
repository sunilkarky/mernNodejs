const mongoose=require("mongoose")
const Schema=mongoose.Schema

const blogSchema=new Schema({
    title:{
        type:String
        // required:true
    },
    subTitle:{
        type:String,
        // required:true
    },
    description:{
        type:String,
        // required:true
    },
},
    {
        timestamps:true //this is for created at and tstai   yo ysari lekhnu prxa
})
const Blog=mongoose.model("Blog",blogSchema)  //yp chai model banako // convention model("Blog") j x atye var ko name ni halda hunxa 1st letter capital rakh vanxa
//alternative 
//module.exports=mongoose.model("Blog",blogSchema)

module.exports=Blog //yo chai use garera data halne ho