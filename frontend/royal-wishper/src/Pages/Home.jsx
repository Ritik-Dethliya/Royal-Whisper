import { useState } from "react";
import Board from "../Components/Board";
import Slips from "../Components/Slip";

function Home() {
    
    return (  
        <>
            <Board/>
            <Slips/>
        </>
    );
}

export default Home;