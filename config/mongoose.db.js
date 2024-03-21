import mongoose from "mongoose";
import dotenv from "dotenv"

dotenv.config()

const url = process.env.DB_URL+"placementcell"
console.log(url)

export const connectDB = async () => {
    try {
      console.log("db connecting...");
      const res = await mongoose.connect(url);
      console.log(`mongodb connected with server ${res.connection.host}`);
    } catch (error) {
      console.log("mongodb connection failed!");
      console.log(error);
    }
  };
  