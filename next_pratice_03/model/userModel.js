import mongoose from "mongoose"


// model scheme
const userSchema= new mongoose.Schema({
username:{
    type:String,
    required:[true,"provide username"],
    unique:true,
},
email:{
    type:String,
    required:[true,"provide email"],
    unique:true,
},
password:{
    type:String,
    required:[true,"provide password,"]
},
isVerfied:{
    type:Boolean,
    default:false,
},
isAdmin:{
    type:Boolean,
    default:false,
},
forgetPasswordToken:String,
forgetPasswordTokenExpiry:Date,
verifyToken:String,
verifyTokenExpiry:Date,
})



const User=mongoose.models.users || mongoose.model("user",userSchema)



export default User;