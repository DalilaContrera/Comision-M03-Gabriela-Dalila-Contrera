import {Schema, model} from "mongoose"

const userSchema =new Schema(
    {
    username:{
        type: String,
        required: true,
        trim: true,
    },
    email:{
        type: String,
        required: true, 
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    avatarURL:{
        type: String,
        required: false,
    },
},{
    timestamps: true,
    versionKey: false,
});

export default model("User", userSchema);