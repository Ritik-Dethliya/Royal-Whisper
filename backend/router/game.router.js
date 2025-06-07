import e from "express";
import { v4 as uuidv4 }  from 'uuid'
import gameModel from "../model/gameModel.js";
const gameRouter=e.Router()

gameRouter.post('/start-game',async(req,res)=>{
    try {
        const sessionid=(io.engine.generateId=(req)=>{
            return uuidv4()
        })()
        console.log("sessionId",sessionid)
        let newgame=await gameModel.create({gameId:sessionid})
        res.send({"msg":"game start",sessionid})
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"unable to Start game"})
    }
})
export default gameRouter