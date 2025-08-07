import { Application } from "express"
import studentRoute from "./routes/studentRoute"
import Config from "./config/config";
import Database from "./config/db";
import express from "express";

class Server{
    public static app:Application=express();
    public static async run()
    {
        this.connectDb();
        this.listen();
        this.setupRoutes();
        


    }
    public static setupRoutes()
    {
        this.app.use("/api/players",studentRoute.getRoutes);

    }
    public static listen()
    {
        this.app.listen(Config.PORT,()=>{
        console.log("Port activated on"+Config.PORT);
        })
    }
    public static  async connectDb()
    {
        return await Database.connectDb();

    }

}
export default Server;