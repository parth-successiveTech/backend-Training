const express=require("express");
const users=require("./MOCK_DATA.json");
const app=express();
const port=3000;
app.use(express.json()); 
app.post("/users/add",(req,res)=>
{
    const {id,first_name,last_name,email,gender,ip_address}=req.body
    const  newuser={
        id:id,
        first_name:first_name,
        last_name: last_name,
        email: email,
         gender: gender,
    ip_address: ip_address
    }
    users.push(newuser);

    res.status(201).json({
    message: 'New user added successfully!',
    user: newuser
  });

})
app.listen(port,()=>console.log("running question5 server"));