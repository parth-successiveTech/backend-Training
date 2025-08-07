import playermodel from "../models/playermodel";

class PlayerRepo{
    public static async getAllplayer()
    {
        return await playermodel.find();
    }
    public static async getPlayerbyid(id:String)
    {
        return await playermodel.findById(id)
    }
    public static async createPlayers(data:any)
    {
        return await playermodel.create(data);
    }
    public static async deletePlayerbyid(id:String)
    {
        return await playermodel.findByIdAndDelete(id);
    }
    public static async updatePlayerbyid(id:String,data:any)
    {
        return await playermodel.findByIdAndUpdate(id,data);
    }
}
export default PlayerRepo