import mongoose from 'mongoose';

const connectToMongoDB = async() => {
    try{
        await mongoose.connect("mongodb+srv://amalv2004:qKNo0jWXLtH9r45L@cluster0.rjfjmr6.mongodb.net/notedata?retryWrites=true&w=majority&appName=Cluster0");
        console.log('connectedToMongoDB')

    } catch(error) {
        console.log("Connection Error" , error.message)
    }
}

export default connectToMongoDB;