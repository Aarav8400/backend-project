import mongoose from "mongoose";
import { DB_NAME } from "../constant.js";

const connectDB=async()=>{
    try {
       const connectionInsatnce= await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        console.log(`\n Mongodb connected !! DB HOST: ${connectionInsatnce.connection.host}`);
        
    } catch (error) {
        console.log("error",error);
        process.exit(1)
    }
}


export default connectDB