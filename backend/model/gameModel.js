import { model, Schema, Types } from "mongoose";

const gameShema=new Schema({
    gameId:{type:String,unique:true},
    gamewinner:{type:Types.ObjectId,ref:'user'},
    isComplete:{type:Boolean,default:false},
    
},{
  timestamps: true,
  versionKey: false
})

export default model('game',gameShema)