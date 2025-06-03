let express=require("express");
let router=express.Router();
let User = require("../models/usemodule");



router.post('/login',async(req,res)=>{
    const {Username,Password}=req.body

    try{
        let user=await User.findOne({Username,Password})
        if(user){
            res.send(user)
        }
        else{
            return res.status(400).json(error)
        }
    }
    catch(error){
        return res.status(400).json(error)
    }
});

router.post('/register',async(req,res)=>{
    try{
        let newuser = new User(req.body)
        await newuser.save()
        res.send("Register successfully")
        
    }
    catch(error){
        return res.status(400).json(error)
    }
});

module.exports = router;


