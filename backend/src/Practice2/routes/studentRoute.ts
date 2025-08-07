import { Router } from "express";
import playerController from "../Controllers/playerController";

class studentRoute
{
public static getRoutes()
{
    const router=Router();
    router.get("/getall",playerController.getAllplayer);
    router.post("/add",playerController.createPlayers);
    router.put("/update",playerController.updatePlayerbyid);
    router.delete("/delete",playerController.deletePlayerbyid);
    return router;
}
}
export default  studentRoute;