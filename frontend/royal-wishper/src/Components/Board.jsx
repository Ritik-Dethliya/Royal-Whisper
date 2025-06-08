import '../Styles/board.css'
function Board() {
    return ( 
        <>
            <div className="board-container">
                {/* Player 1 - Top Left */}
                <div className="player player1">
                    <img className='player-img' src="https://cdn-icons-png.freepik.com/256/18276/18276495.png?ga=GA1.1.1012260453.1749411147&semt=ais_incoming" alt="" />
                    
                </div>

                {/* Player 2 - Top Right */}
                <div className="player player2">
                    <img className='player-img' src="https://cdn-icons-png.freepik.com/256/7884/7884170.png?ga=GA1.1.1012260453.1749411147&semt=ais_incoming" alt="" />
                    
                </div>

                {/* Player 3 - Bottom Left */}
                <div className="player player3">
                    <img className='player-img' src="https://cdn-icons-png.freepik.com/256/12476/12476120.png?ga=GA1.1.1012260453.1749411147&semt=ais_incoming" alt="" />
                     
                </div>

                {/* Player 4 - Bottom Right */}
                <div className="player player4">
                    <img className='player-img' src="https://cdn-icons-png.freepik.com/256/12832/12832898.png?ga=GA1.1.1012260453.1749411147&semt=ais_incoming" alt="" />
                    
                </div>

                {/* Center Game Area */}
                <div className="center-area">
                    <h3>Game Area</h3>
                </div>
            </div>

        </>
    );
}

export default Board;