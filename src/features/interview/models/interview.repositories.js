import mongoose from "mongoose";
import interviewSchema from "./interview.schema.js";
import { ObjectId } from "mongodb";

const InterviewModel = new mongoose.model("Interview",interviewSchema)
export default class InterviewRepository{
    async getAllInterview(){
        return await InterviewModel.find()
    }

    async addInterview(data){
        const newInterview = new InterviewModel(data)
        await newInterview.save()
        return this.getAllInterview()
    }

    async updateInterview(interviewId,body){
        const isInterviewFound = await InterviewModel.findById(interviewId)
        if(isInterviewFound){
            Object.assign(isInterviewFound, body);
            isInterviewFound.save()
            return this.getAllInterview()
        } else {
            return null
        }
    }

    async deleteInterview(interviewId){
        await InterviewModel.deleteOne({_id:new ObjectId(interviewId)})
        return this.getAllInterview()
    }
}