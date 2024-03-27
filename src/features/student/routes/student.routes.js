import express from "express"
import StudentController from "../controllers/student.controller.js"

const studentRouter = express.Router()
const studentController = new StudentController()
studentRouter.get("/",(req,res)=>{
    studentController.getAllStudents(req,res)
})
studentRouter.post("/",(req,res)=>{
    studentController.addStudent(req,res)
})
studentRouter.put("/:studentId",(req,res)=>{
    studentController.updateStudent(req,res)
})
studentRouter.delete("/:studentId",(req,res)=>{
    studentController.deleteRecord(req,res)
})

export default studentRouter