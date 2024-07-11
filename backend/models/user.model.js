import mongoose from "mongoose";


const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true
    },

    password: {
        type: String,
        required: true,
        minlength: 6
    },

    contents: [{
        type: mongoose.Schema.Types.ObjectId,
        ref:"Content",
        default: []
    }],

},)

const User = mongoose.model("User" , userSchema);

export default User