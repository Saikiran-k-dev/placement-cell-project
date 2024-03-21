import express from "express"
import UserController from "../controllers/user.controller.js"

const userRouter = express.Router()

const userController = new UserController

userRouter.post("/login",(req,res)=>{
    userController.signUp(req,res)
})
userRouter.post("/signup",(req,res)=>{
    res.status(200).send("signup")
})

export default userRouter