import bcrypt from 'bcrypt'
import jwt from 'jsonwebtoken'
import userModel from '../model/userModel.js'
let Salt=10
export async function userSign(req,res){
    try {
        console.log(req.body)
        let {password}=req.body
        let hash =await bcrypt.hash(password,Salt)
        req.body.password=hash
        let user= await userModel.create(req.body)
        res.send({"msg":"user Create Success"})
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"Something went wrong"})
    }
}

export async function userLogin(req,res){
    try {
        let {password}=req.body
        let user=await userModel.findOne({email:req.body.email})
        bcrypt.compare(password,user.password,function(err,result){
            if(result){
                let token=jwt.sign({userId:user._id},"ritik")
                res.status(200).send({token})
            }
            else{
                console.log("user",user,err)
                res.status(401).send({"msg":"incorrect password"})
            }
        })
    } catch (error) {
         console.log(error)
        res.status(500).send({"msg":"Something went wrong"})
    }
}