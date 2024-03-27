import jwt from "jsonwebtoken"

export const jwtAuth = (req,res,next)=> {
    const token = req.cookies.token
    if(!token){
            res.send("login or signup to access the pages")
    } else {
        const decodedData = jwt.verify(token,process.env.JWT_SECRET)
        req.userId = decodedData.userId 
    }
}
