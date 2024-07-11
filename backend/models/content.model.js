import mongoose from "mongoose";

const  contentSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true 
    },
    textarea: {
        type: String,
        required: true
    }
},{timestamps:true})

const Content = mongoose.model("Content" , contentSchema);

export default Content