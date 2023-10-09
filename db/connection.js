
const mongoose=require('mongoose')
const connectToDB=(url)=>{
    mongoose.connect(url)
    .then(()=>{console.log(" database connected")})
    .catch(e=>console.log(e))
}

module.exports=connectToDB