import mongoose from "mongoose"

const interviewSchema = new mongoose.Schema({
    date: {
        type: Date,
        required: true
      },
      company: {
        type: String,
        required: true
      },
      students: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Student'
      }]
    }
)

export default interviewSchema