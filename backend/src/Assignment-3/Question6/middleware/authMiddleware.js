const jwt=require('jsonwebtoken');
const secret_key="dunnykey";
const authMiddleware=(req,res,next)=>
{
    const authHeader=req.header.authorization;
    if(!authHeader||!authHeader.startsWith('Bearer'))
    {
        return res.status(401).json({message:"Unauthorized access"});
    }
    const token=authHeader.split(' ')[1];
    try{
        const decoded=jwt.verify(token,secret_key);
        req.user=decoded;
        next();
    }
    catch(err)
    {
        return res.status(403).json({message:"Forbidden access, invalid token"});

    }
}
   module.exports=authMiddleware; 


