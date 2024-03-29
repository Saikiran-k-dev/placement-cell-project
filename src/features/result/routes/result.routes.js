import express from "express"
import ResultController from "../controllers/results.controller.js"

const resultRouter = express.Router()

const resultController = new ResultController

resultRouter.get("/",(req,res)=>{
    resultController.getAll(req,res)
})

resultRouter.post("/",(req,res)=>{
    resultController.addResult(req,res)
})

resultRouter.put("/:resultId",(req,res)=>{
    resultController.updateResult(req,res)
})

resultRouter.delete("/:resultId",(req,res)=>{
    resultController.deleteResult(req,res)
})

export default resultRouter