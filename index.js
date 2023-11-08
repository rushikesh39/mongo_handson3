const express=require('express')
const app=express()
const connectToDB=require('./db/connection')
const userRoutes=require("./routes/routes")
app.use(express.json())

app.use(userRoutes)
app.listen(4000,async()=>{
  try{
    await connectToDB()
    console.log("server is running on port 5000")
  }
  catch(err){
    console("server error",err)
  }
})

