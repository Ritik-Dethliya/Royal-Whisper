import { model, Schema } from "mongoose";

const userSchema=Schema({
    userName:{type:String},
    useImage:{type:String},
    email:{type:String,require:true},
    phone:{type:Number,maxLength:10},
    isSubscribe:{type:Boolean,default:false}
})
export default model('user',userSchema)