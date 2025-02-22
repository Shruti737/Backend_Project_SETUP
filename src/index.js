import dotenv from "dotenv"
import connectDB from './Db/index.js';
import { app } from "./app.js";
dotenv.config({
    path: './.env'
})

connectDB()
.then(()=>{
    app.listen(process.env.PORT || 8000, ()=>{
        console.log(`Server running on the port :${process.env.PORT}`);
        
    })
})
.catch((err)=>{
    console.log("MongoDB Connection Failed!!!", err);
    
})