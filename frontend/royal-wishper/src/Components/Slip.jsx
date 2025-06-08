import { useState } from 'react';
import '../Styles/slip.css'
function Slips(){
    let [isthrow,setIsThrow]=useState(true)
    return (  
        <>
        <div className="slip-container">
            {
                isthrow &&
                <>
                    <div className="slips fly fly1">slip1</div>
                    <div className="slips fly fly2">slip2</div>
                    <div className="slips fly fly3">slip3</div>
                    <div className="slips fly fly4">slip4</div>
                </>
            }
           
        </div>
            
        </>
    );
}

export default Slips;