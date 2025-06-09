import e from "express";
import bcrypt from 'bcrypt'
import userModel from "../model/userModel.js";
import jwt from "jsonwebtoken";
import { userLogin, userSign } from "../controller/user.controller.js";

const userRouter=e.Router()

const Salt=10
userRouter.post('/sign',userSign)
userRouter.get('/login',userLogin)
export default userRouter