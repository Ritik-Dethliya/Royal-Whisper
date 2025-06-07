import e from "express";
import bcrypt from 'bcrypt'
import userModel from "../model/userModel";
import jwt from "jsonwebtoken";
import { userLogin, userSign } from "../controller/user.controller";

export default userRouter=e.Router()

const Salt=10
userRouter.post('/sign',userSign)
userRouter.get('login',userLogin)
