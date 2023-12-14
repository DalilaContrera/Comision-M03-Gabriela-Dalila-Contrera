  import { Schema, model } from "mongoose";

 const taskSchema = new Schema({
     title:{
        type: String,
        required: true,
        trim: true,
     },
     description:{
        type: String,
        required: true,
        trim: true,
        unique: true,
     },
     comments: [{
        type: Schema.Types.ObjectId,
        ref: "Comment",
     }],
     user:{
        type: Schema.Types.ObjectId,
        ref: "User",
        required: true,
        trim: true,
     },
     imageURL: {
      type: String,
      required: false,
     },
     createdAt: {
      type: Date,
      default: Date.now,
     }
 },
 {
    timestamps: true,
    versionKey: false,
 })

 export default model("Task", taskSchema)

