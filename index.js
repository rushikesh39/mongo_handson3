const express=require('express')
const app=express()
require('dotenv').config()
const connectToDB=require('./db/connection')
const userRoutes=require("./routes/routes")
app.use(express.json())

// app.use("/",userRoutes)
app.get('/',(req,res)=>{
  res.send({
    1:'/user',
    2:'/finduser30000',
    3:'/finduser_exp2',
    4:"/findUserwith_yearGrad_after2015_and_exp_greaterthan1",
    5:'/update'
  })
})
async function dbconnect(){
    try{
        await connectToDB(process.env.URL)
    
    }
    catch(e){
        console.log(e)
    }
}


async function startServer() {
    try {
    await dbconnect();
      app.use("/",userRoutes)
      app.listen(5000, () => console.log('Server is running on port 5000'));
    } catch (error) {
      console.error('Error starting the server:', error);
    }
  }
  
  startServer(); 


