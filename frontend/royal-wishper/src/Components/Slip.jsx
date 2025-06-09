import { useEffect, useState } from 'react';
import '../Styles/slip.css'
import { io } from "socket.io-client";
function Slips(){
    let [isthrow,setIsThrow]=useState(true)
    const [selectedSlips,setSelectedSlips]=useState([])
    const socket=io('http://localhost:8000/')
    useEffect(()=>{
        socket.emit('join-room',123)
    },[])
    const selectSlip=(slipId)=>{
        try {
            const roomId=123
            if(selectedSlips.includes(slipId))return alert('already selected')
            else{
                socket.emit('select-slip',{roomId,slipId})
            }
        } catch (error) {
            console.log(error)
        }
        
    }
    socket.on('slip-selected',({selecter,slipId})=>{
        alert(`${selecter} select splip number,${slipId}`)
        setSelectedSlips((prev)=>[...prev,slipId])
    })
    return (  
        <>
        <div className="slip-container">
            {
                isthrow &&
                <>
                    <button className="slips fly fly1" id={101}  onClick={()=>selectSlip(101)}>slip1</button>
                    <button className="slips fly fly2" id={201} onClick={()=>selectSlip(201)}>slip2</button>
                    <button className="slips fly fly3" id={301} onClick={()=>selectSlip(301)}>slip3</button>
                    <button className="slips fly fly4" id={401} onClick={()=>selectSlip(401)}>slip4</button>
                </>
            }
           
        </div>
            
        </>
    );
}

export default Slips;