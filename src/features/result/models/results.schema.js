import mongoose  from "mongoose";

const resultSchema = new Schema({
    student: {
      type: Schema.Types.ObjectId,
      ref: 'Student',
      required: true
    },
    interview: {
      type: Schema.Types.ObjectId,
      ref: 'Interview',
      required: true
    },
    result: {
      type: String,
      enum: ['PASS', 'FAIL', 'On Hold', 'Didn’t Attempt'],
      required: true
    }
  });

  export default resultSchema