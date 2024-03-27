import jwt from "jsonwebtoken"
import UserRepositories from "../model/users.repositories.js"
import bcrypt from "bcrypt"

export default class UserController{
    constructor(){
        this.userRepositories = new UserRepositories()
    }
    signUp(req,res){
        try {
            // console.log("hi")
            res.render("signup_login")
        } catch (error) {
            console.log(error)
        }
    }
    async postSignup(req,res){
        const body = req.body

        // Hasing the password and changing the password value inside object
        const hashedPass = await bcrypt.hash(body.password,12)
        body.password = hashedPass

        // Adding the created into database
        const createdUser = await this.userRepositories.postSignup(body)

        // Creating the jwtauth
        const createJwtAuth = jwt.sign({userId:createdUser._id,email:createdUser.email},process.env.JWT_SECRET,{
            expiresIn:"1h"
        })

        // creating cookie and storing the auth token into it
        const cookieOptions = {
            expires: new Date(
              Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
            ),
            httpOnly: true,
          };
        res.status(200).cookie("token",createJwtAuth,cookieOptions).send(createdUser)
    }

    async postLogin(req,res){
        const {email,password} = req.body

        // checking whether the user present in database
        const userFound = await this.userRepositories.postLogin(email)

        // comparing hashedpassword with password
        const hashedPassword =  userFound[0].password
        console.log(hashedPassword)

        // sending error if the user not found
        if(!userFound){
            res.status(400).send("user not found")
        } else {

            // comparing password using bcrypt
            const checkPassword = await bcrypt.compare(password, hashedPassword)
            if(checkPassword){
                
                const createJwtAuth = jwt.sign({userId:userFound._id,email:userFound.email},process.env.JWT_SECRET,{
                    expiresIn:"1h"
                })
                console.log(createJwtAuth)
                // creating cookie and storing the auth token into it
                const cookieOptions = {
                    expires: new Date(
                      Date.now() + process.env.COOKIE_EXPIRES_IN * 24 * 60 * 60 * 1000
                    ),
                    httpOnly: true,
                  };
                return res.status(200).cookie("token",createJwtAuth,cookieOptions).send("userfound")
            } else {
                return res.status(400).send("incorrect username or password")
            }
        }
    }

}