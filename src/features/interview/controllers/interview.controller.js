import InterviewRepository from "../models/interview.repositories.js";

export default class InterviewController{
    constructor(){
        this.interviewRepository = new InterviewRepository
    }

    async getAll(req,res){
        try {
            const interviews = await this.interviewRepository.getAllInterview()
            res.status(200).send(interviews)
        } catch (error) {
            console.log(error)
        }
    }

    async addInterview(req,res){
        try {
            const body = req.body
            const addInterview = await this.interviewRepository.addInterview(body)
            res.status(200).send(addInterview)
        } catch (error) {
            console.log(error)
        }
    }

    async updateInterview(req,res){
        try {
            const interviewId = req.params.interviewId
            const data = req.body
            const newData = await this.interviewRepository.updateInterview(interviewId,data)
            res.status(200).send(newData)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteInterview(req,res){
        try {
            const interviewId = req.params.interviewId
            const newData = await this.interviewRepository.deleteInterview(interviewId)
            res.status(200).send(newData)
        } catch (error) {
            console.log(error)
        }
    }
}