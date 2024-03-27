import express from "express"
import InterviewController from "../controllers/interview.controller.js"

const interviewRouter = express.Router()

const interviewController = new InterviewController

interviewRouter.get("/",(req,res)=>{
    interviewController.getAll(req,res)
})

interviewRouter.post("/",(req,res)=>{
    interviewController.addInterview(req,res)
})

interviewRouter.put("/:interviewId",(req,res)=>{
    interviewController.updateInterview(req,res)
})

interviewRouter.delete("/:interviewId",(req,res)=>{
    interviewController.deleteInterview(req,res)
})

export default interviewRouter