import{Request,Response,NextFunction} from "express"
import studentService from "../service/studentservice";

class playerController{

    public static async getAllplayer(req:Request,res:Response,next:NextFunction)
    {
        try{
          const data=await studentService.getAllplayer();
          res.status(201).json({success:true,
            data:data}
          );
        }
        catch(e:any)
        {
            res.status(400).json({success:false,
                }
            )


        }
   
    }
    public static async getPlayerbyid(req:Request,res:Response,next:NextFunction)
    {
        try{
            const id=req.body.id
            const data=await studentService.getPlayerbyid(id);
          res.status(201).json({success:true,
            data:data}
          );

        }
        catch(e:any)
        {
             res.status(400).json({success:false,
                }
            )

        }
    }
    public static async createPlayers(req:Request,res:Response,next:NextFunction)
    {
        try{
              const  dta=req.body
            const data=await studentService.createPlayers(dta);
          res.status(201).json({success:true,
            data:data}
          );

        }
        catch(e:any)
        {
             res.status(400).json({success:false,
                }
            )

        }
    }
    public static async deletePlayerbyid(req:Request,res:Response,next:NextFunction)
    {
        try{
            const  id=req.body.id
            const data=await studentService.createPlayers(id);
          res.status(201).json({success:true,
            data:data})
            

        }
        catch(e:any)
        {

             res.status(400).json({success:false,
                }
            )
        }
    }
    public static async updatePlayerbyid(req:Request,res:Response,next:NextFunction)
    {
        try{
            const  dta=req.body
            const id=req.body.id
            const data=await studentService.updatePlayerbyid(id,dta);
          res.status(201).json({success:true,
            data:data}
          )

        }
        catch(e:any)
        {
             res.status(400).json({success:false,
                }
            )

        }
    }
}
export default playerController;