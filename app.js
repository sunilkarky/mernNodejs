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
app.get("/blogs",async(req,res)=>{
    const blogs=await Blog.find()   //  yesle array ma data dinxa so we can chek
if(blogs.length==0){
    res.json({
        status:200,
        message:"empty blogs/no blogs found"
    })
    }else{
    res.json({
        status:200,
        message:"blog fetch successful",
        data:blogs
    })
    }
})
app.get("/blogs/:id",async(req,res)=>{
    console.log(req.params.id)
    const id=req.params.id
    // const blog=await Blog.find({_id:id})  // yo cahi best haina//
    // if (blog.length==0){
    //     res.status(404).json({

    //         message:"NO blogs found"
    //     })
    // }else{
    // // const blog=await Blog.findById(id)
    // res.status(200).json({
    //     messgae:"blog fetched successfull",
    //     data:blog
    // })
    // }
    ///alternative
    const blog=await Blog.findById(id)
    if (!blog){
        res.status(404).json({

            message:"NO blogs found"
        })
    }else{
    
    res.status(200).json({
        messgae:"blog fetched successfull",
        data:blog
    })
    }
})


app.listen(3000,()=>{

    console.log("Nodejs has started at 3000.")
})