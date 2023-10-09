const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    firstName:{type:String},
    lastName:{type:String},
    salary:{type:Number},
    department:{type:String},
    lastCompany:{type:String},
    lastSalary:{type:Number},
    overallExp:{type:Number},
    contactInfo:{type:Number},
    yearGrad:{type:Number},
    gradStream:{type:String},



    // age:{type:Number}
    
})
module.exports=mongoose.model('employee',userSchema)