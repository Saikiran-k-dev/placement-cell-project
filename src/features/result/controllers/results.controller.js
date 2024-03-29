import ResultRepository from "../models/results.repositories.js";

export default class ResultController{
    constructor(){
        this.resultRepository = new ResultRepository
    }

    async getAll(req,res){
        try {
            const results = await this.resultRepository.getAllResult()
            res.status(200).send(results)
        } catch (error) {
            console.log(error)
        }
    }

    async addResult(req,res){
        try {
            const data = req.body
            const afterAddding = await this.resultRepository.addResult(data)
            res.status(200).send(afterAddding)
        } catch (error) {
            console.log(error)
        }
    }

    async updateResult(req,res){
        try {
            const resultId = req.params.resultId
            const data = req.body
            const afterUpdate = await this.resultRepository.updateResult(resultId,data)
            res.status(200).send(afterUpdate)
        } catch (error) {
            console.log(error)
        }
    }

    async deleteResult(req,res){
        try {
            const resultId = req.params.resultId
            const afterDelete = await this.resultRepository.deleteResult(resultId)
            res.status(200).send(afterDelete)
        } catch (error) {
            console.log(error)
        }
    }
}