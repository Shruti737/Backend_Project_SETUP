import mongoose from "mongoose";
import { DB_NAME } from "./constants";

const connectDB = async () =>{
    try {
          const connection = await mongoose.connect(`${process.env.MONGODB_URI }`)
          console.log(`MongoDB COnnected ${connectionInstance.connection.host}`);
          
    } catch (error) {
        console.log("MongozDB CONNEVTION ERROR", error);
        process.exut(1)
    }
}

export default connectDB