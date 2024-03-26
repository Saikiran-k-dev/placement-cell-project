import express from "express"
import UserController from "../controllers/user.controller.js"

const userRouter = express.Router()

const userController = new UserController

userRouter.post("/login",(req,res)=>{
   
})
userRouter.get("/signup",(req,res)=>{
    userController.signUp(req,res)
})

export default userRouter