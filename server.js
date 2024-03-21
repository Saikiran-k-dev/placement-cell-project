import { connectDB } from "./config/mongoose.db.js"
import app from "./index.js"

app.listen(process.env.PORT,()=>{
    connectDB()
    console.log("server is listning at port 3000")
})