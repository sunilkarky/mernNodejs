const express=require("express")
const app=express();


const mongose=require("mongoose")
const { connectDatabase } = require("./database/database")
const Blog = require("./model/blogModel")

//nodejs lai form ko data buj vnera parse gareko
// app.use(express.json())
// app.use(express.urlencoded({extended:true}))

app.use(express.json());
app.use(express.urlencoded({extended:true}))

connectDatabase()

//simple get api for home page
app.get("/",(req,res)=>{

    res.json({
        status:200,
        message:"success"
    })

})

//creatblog API
app.post("/creatBlog",async(req,res)=>{
    console.log(req.body)
    const {title,subTitle,description}=req.body
        await Blog.create({
            title:title ,
            subTitle:subTitle,
            description:description
        })
        console.log(title)


        res.json({
            status:200,
            message:"Blog created successfully"
        })
        //alternative
        // res.json(200).json({  this is for error catch handle n grxa yesle chai
        //     message:"blog Created Successfully"
        //     })



})


app.listen(3000,()=>{

    console.log("Nodejs has started at 3000.")
})