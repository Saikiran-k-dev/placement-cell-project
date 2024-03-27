import mongoose from "mongoose";
import { ObjectId } from "mongodb";

import studentSchema from "./student.schema.js";

const StudentModel = mongoose.model("Student",studentSchema)

export default class StudentRepositories{
  
    async getAllStudent(){
        return await StudentModel.find()
    }

    async addNewStudent(data){
        const newStudent = new StudentModel(data)
        await newStudent.save()
        return await this.getAllStudent()
    }

    async updateExistingStudent(studentId, data) {
        let student = await StudentModel.findOne({ _id: new ObjectId(studentId) });
        if (student) {
            Object.assign(student, data);
            await student.save();
            return await this.getAllStudent();
        } else {
            return null; 
        }
    }
    async deleteExistingStudent(studentId){
        const isStudentExist = await StudentModel.findById(studentId)
        if(isStudentExist){
            await StudentModel.deleteOne({_id:new ObjectId(studentId)})
            return await this.getAllStudent()
        } 

    }
}