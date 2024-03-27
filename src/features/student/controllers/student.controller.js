import StudentRepositories from "../models/student.repository.js";

export default class StudentController{
    constructor(){
        this.studentRepository = new StudentRepositories()
    }

    async getAllStudents(req,res){
        try {
            const studentList = await this.studentRepository.getAllStudent()
            res.status(200).send(studentList)
        } catch (error) {
            res.status(500).send("server error occured")
        }
    }

    async addStudent(req,res){
        try {
            const data = req.body
            const addStudent = await this.studentRepository.addNewStudent(data)
            console.log(addStudent)
            res.status(200).send(addStudent)
        } catch (error) {
            console.log(error)
        }
    }
    async updateStudent(req,res){
        try {
            const studentId = req.params.studentId
            const data = req.body
            const updatedRecord = await this.studentRepository.updateExistingStudent(studentId,data)
            res.status(200).send(updatedRecord)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteRecord(req,res){
        try {
            const studentId = req.params.studentId
            const afterDeleting = await this.studentRepository.deleteExistingStudent(studentId)
            res.status(200).send(afterDeleting)
        } catch (error) {
            res.status(500).send("server error occured")
        }
    }
}