import { Server } from "socket.io";
import {createServer} from 'http'
import { Socket } from "dgram";

const httpServer = createServer();
const io=new Server(httpServer)

io.on('connection',(socket)=>{

})
io.on