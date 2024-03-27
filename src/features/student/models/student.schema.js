import mongoose from "mongoose"


const studentSchema = new mongoose.Schema({
    batch: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    email:{
        type:String,
        required: true
    },
    college: {
        type: String,
        required: true
    },
    status: {
        type: String,
        enum: ['placed', 'not_placed'],
        default: 'not_placed'
    },
    courseScores: {
        DSAFinalScore: Number,
        WebDFinalScore: Number,
        ReactFinalScore: Number
    }
})

export default studentSchema