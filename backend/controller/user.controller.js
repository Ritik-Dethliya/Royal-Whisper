export async function userSign(req,res){
    try {
        let {password}=req.body
        let hash =bcrypt.hash(password,Salt)
        req.body.password=hash
        let user= await userModel.create(req.body)
        res.send({"msg":"user Create Success"})
    } catch (error) {
        console.log(error)
        res.status(500).send({"msg":"Something went wrong"})
    }
}

export async function userLogin(res,req){
    try {
        let password=req.body
        let user=userModel.find({email:req.body})
        bcrypt.compare(password,user.password,function(err,result){
            if(result){
                let token=jwt.sign({userId:user._id},"ritik")
                res.status(200).send({token})
            }
            else{
                res.status(401).send({"msg":"incorrect password"})
            }
        })
    } catch (error) {
         console.log(error)
        res.status(500).send({"msg":"Something went wrong"})
    }
}