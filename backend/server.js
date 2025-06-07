import e from "express";
import cros from 'cors'
import connectDb from "./configs/db.config.js";
import userRouter from "./router/user.router.js";

connectDb()
const app=e()
app.use(cros())
app.use('/user',userRouter)
app.listen(8000,()=>{
    console.log("Server Start at 8000")
})
