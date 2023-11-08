
const mongoose=require('mongoose')
const URL='mongodb+srv://test:aqWW9h8C6XnEYE4h@cluster0.lkhf4ct.mongodb.net/?retryWrites=true&w=majority'
const connectToDB=async()=>{
    try{
        await mongoose.connect(URL)
        console.log("database connected successful")
    }
    catch(e){
        console.log("error during mongose connection",e)
    }

    
}

module.exports=connectToDB