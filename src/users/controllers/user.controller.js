import jwt from "jsonwebtoken"

export default class UserController{
    constructor(){

    }
    signUp(req,res){
        try {
            // console.log("hi")
            res.render("signup_login")
        } catch (error) {
            console.log(error)
        }
    }

    login(req,res){
        try {
            
        } catch (error) {
            
        }
    }
}