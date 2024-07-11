import express from 'express'
import dotenv from 'dotenv'
import cookieParser from "cookie-parser"

import connectToMongoDB from './db/connecttoMongoDB.js'
import authRoutes from './routes/auth.Routes.js'
import contentRoutes from './routes/content.routes.js'


const app = express();
const PORT = process.env.PORT || 5000

dotenv.config()

app.use(express.json());
app.use(cookieParser());



app.use("/api/auth" , authRoutes);
app.use("/api/content" , contentRoutes);

app.listen(PORT , ()=> {
    connectToMongoDB();
    console.log("Server Running on Port: "+PORT)
});