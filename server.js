import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/mongo.js";
import userRoutes from './routes/userRoutes.js'
import { loginUser, registerUser } from "./controllers/userController.js";
import cors from 'cors';
dotenv.config();
const app = express();


const PORT = process.env.PORT 

//cors setup
const corsOptions = 
{
    origin : 'http://localhost:5173',
    credentials:true
};
app.use(cors(corsOptions));
// Middleware
app.use(express.json()); 
app.use('/api/v1/auth', userRoutes);

// Your other middleware and routes here
app.use('/api/v1/auth/login', userRoutes);
app.use('/api/v1/auth/register', userRoutes);

// Connect to MongoDB
connectDB();




// Start server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

