import express from "express"
import dotenv from "dotenv"
import cookieParser from "cookie-parser";
import userRouter from "./src/users/routes/users.routes.js";

dotenv.config()



const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/placementcell/users",userRouter)

app.get("/",(req,res)=>{
    res.status(400).send("theres no such api")
})

export default app