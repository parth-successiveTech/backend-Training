import mongoose from "mongoose";

const playerSChema=new mongoose.Schema({
    id:{
        type:String,
        required:true,
    },
    name:{
        type:String,
        required:true,
    },
    password:{
        type:String,
        required:true,
    },
})
const playermodel=mongoose.model("player",playerSChema);

export default playermodel;


