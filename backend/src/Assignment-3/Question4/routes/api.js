const express=require('express');
const router=express.Router();
const generateMockUsers  = require('../seed/mockData');
router.get('/users',(req,res)=>
{
    const count=parseInt(req.query.get)||10;
    const users=generateMockUsers(count);
    res.json({
        success:true,
        total:users.length,
        data:users
    });
});
module.exports=router;
