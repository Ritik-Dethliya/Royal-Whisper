import e from "express";
import cros from 'cors'
import connectDb from "./configs/db.config.js";
import userRouter from "./router/user.router.js";
import { createServer } from "http";
import { Server } from "socket.io";
import gameRouter from "./router/game.router.js";
import gameSocket from "./sockets/gameSocket.js";



connectDb()
const app=e()
app.use(cros())
const httpServer=createServer(app)
export const io=new Server(httpServer)
console.log('reg here')
app.use('/user',userRouter)
app.use('/game',gameRouter)

io.on('connection',(socket)=>{
    gameSocket(io,socket)
})
httpServer.listen(8000,()=>{
    console.log("Server Start at 8000")
})
