//it's just gonna have an e-mail and password fields.

const mongoose=require("mongoose")
const Schema=mongoose.Schema
const userSchema=new Schema(
    {
        email:{
            type:String,
            required:true,
            unique:true
        },
        password:{
            type:String,
            required:true,
        },

    })
    module.exports=mongoose.model("User",userSchema)