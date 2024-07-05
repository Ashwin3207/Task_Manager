import mongoose from "mongoose";
import dotenv from 'dotenv';
import colors from 'colors';

const connectDB = async (req,res)=>
    {
        try{
           const conn = await mongoose.connect(process.env.MONOGO_URL);
           console.log('Connected to database'.yellow);
        }
        catch(error)
        {
            console.log(`Error in mongo ${error}`);
        }
    }

 export default connectDB;