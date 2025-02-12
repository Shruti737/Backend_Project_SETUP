import mongoose from "mongoose";
import { DB_Name } from "../constants.js";

const connectDB = async () =>{
    try {
          const connection = await mongoose.connect(`${process.env.MONGODB_URI }`)
          console.log(`MongoDB COnnected ${connection.connection.host}`);
          
    } catch (error) {
        console.log("MongoDB CONNEVTION ERROR", error);
        process.exut(1)
    }
}

export default connectDB