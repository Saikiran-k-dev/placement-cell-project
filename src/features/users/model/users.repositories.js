import { UserModel } from "./user.schema.js";
export default class UserRepositories{
    async postSignup(data){
        const newUser = new UserModel(data)
        await newUser.save()
        return newUser
    }

    async postLogin(email){
        return UserModel.find({email:email})
    }
}