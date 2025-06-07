function gameSocket(io,socket){
    console.log('User connected:', socket.id);
    
    socket.on('offer',({roomId,offer})=>{
        socket.to(roomId).emit("offer",{offer});
    })

    socket.on('answer',({roomId,answer})=>{
        socket.to(roomId).emit('answer',{answer})
    })
    
    socket.on('ice-candidate',({roomId,candidate})=>{
        socket.to(roomId).emit('ice-candidate',{candidate})
    })

    socket.on('join-room',(roomid)=>{
        socket.join(roomid);
        console.log(`${socket.id} joined room ${roomid}`);
        socket.to(roomid).emit('user-joined', socket.id);
    });

    socket.on('send-message',({roomid,message})=>{
        socket.to(roomid).emit('receive-message',{
            sender:socket.id,
            message
        })
    })

    socket.on('disconnect',()=>{
        console.log("user disconnected",socket.id)
    })
    
}
export default gameSocket