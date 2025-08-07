import PlayerRepo from "../repository/playerRepo";
class studentService{
    public static async getAllplayer()
    {
        return await PlayerRepo.getAllplayer();
    }
    public static async getPlayerbyid(id:String)
    {
        return await PlayerRepo.getPlayerbyid(id)
    }
    public static async createPlayers(data:any)
    {
        return await PlayerRepo.createPlayers(data);
    }
    public static async deletePlayerbyid(id:String)
    {
        return await PlayerRepo.deletePlayerbyid(id);
    }
    public static async updatePlayerbyid(id:String,data:any)
    {
        return await PlayerRepo.updatePlayerbyid(id,data);
    }
}
export default studentService;