const app=require("express")()

const mongose=require("mongoose")
const { connectDatabase } = require("./database/database")


connectDatabase()

//simple get api for home page
app.get("/",(req,res)=>{

    res.json({
        status:200,
        message:"success"
    })

})
app.listen(3000,()=>{

    console.log("Nodejs has started at 3000.")
})