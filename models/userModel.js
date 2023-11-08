const mongoose=require('mongoose')
const Schema=mongoose.Schema
const userSchema=new Schema({
    firstName:{type:String ,require:true},
    lastName:{type:String ,require:true},
    salary:{type:Number ,require:true},
    department:{type:String ,require:true},
    lastCompany:{type:String ,require:true},
    lastSalary:{type:Number ,require:true},
    overallExp:{type:Number ,require:true},
    contactInfo:{type:Number,require:true},
    yearGrad:{type:Number ,require:true},
    gradStream:{type:String ,require:true},
    
})
module.exports=mongoose.model('employee',userSchema)