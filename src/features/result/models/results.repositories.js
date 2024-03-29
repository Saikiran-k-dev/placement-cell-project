import mongoose from "mongoose";
import resultSchema from "./results.schema.js";
import { ObjectId } from "mongodb";


const ResultModel = new mongoose.model("Result",resultSchema)
export default class ResultRepository{
    async getAllResult(){
        return await ResultModel.find()
    }

    async addResult(data){
        const newResult = new ResultModel(data)
        await newResult.save()
        return this.getAllResult()
    }

    async updateResult(resultId,data){
        const updateResult = await ResultModel.findOne({_id:new ObjectId(resultId)})
        Object.assign(updateResult,data)
        updateResult.save()
        return this.getAllResult()
    }

    async deleteResult(resultId){
        await ResultModel.deleteOne({_id:new ObjectId(resultId)})
        return this.getAllResult()
    }
}