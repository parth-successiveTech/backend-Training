import { config } from "dotenv";
import mongoose from "mongoose";
import Config from "./config";

class Database{
    public  static async connectDb()
    {
        try{
         await mongoose.connect(Config.MONGO_URL);
         console.log("db connected")
        }catch(e:any)
        {
            console.log("db not connected");

        }

    }
}
export default Database;