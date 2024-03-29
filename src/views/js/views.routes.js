import express from "express"
import { jwtAuth } from "../../middlewares/jwt.middleware.js"

const viewRouter = express.Router()

viewRouter.get("/signup",(req,res)=>{
    res.render("signup", { layout: false })
})

viewRouter.get("/addstudent", jwtAuth,(req,res)=>{
    res.render("student_application")
})

export default viewRouter