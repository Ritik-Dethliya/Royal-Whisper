import mongoose from "mongoose";

export default function connectDb(){
    mongoose.connect('mongodb://127.0.0.1:27017/test')
    .then(()=>console.log("Connect to db"))
    .catch((err)=>{
        console.log(err)
    })
}
