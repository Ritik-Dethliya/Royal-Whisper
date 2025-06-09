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

    socket.on('join-room',(roomId)=>{
        socket.join(roomId);
        console.log(`${socket.id} joined room ${roomId}`);
        socket.to(roomId).emit('user-joined', socket.id);
    });

    socket.on('select-slip',({roomId,slipId})=>{
        console.log(`${socket.id} select slipt ${slipId}`);
        socket.to(roomId).emit('slip-selected', {selecter:socket.id,slipId});
    });
    socket.on('send-message',({roomId,message})=>{
        socket.to(roomId).emit('receive-message',{
            sender:socket.id,
            message
        })
    })

    socket.on('disconnect',()=>{
        console.log("user disconnected",socket.id)
    })
    
}
export default gameSocket