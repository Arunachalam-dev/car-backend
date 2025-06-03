const express = require('express');
const router=express.Router();
const car =require("../models/carmodel")


router.get("/getallcars",async(req,res)=>{
    try{
        const cars=await car.find()
        res.send(cars)
    }catch(error){
        return res.status(400).json(error);
    }
    
});


router.post('/addcar',async(req,res)=>{
    try{
        const newcar = new car(req.body)
        newcar.save()
         res.send('car add successfully')
    }
    catch(error){
        return res.status(400).json(error);
    }
});

router.post('/editcar',async(req,res)=>{

    try{
           const  cars= await car.findOne({_id : req.body._id})
           
    cars.name=req.body.name
    cars.image=req.body.image
    cars.capacity=req.body.capacity
    cars.fuelType=req.body.fuelType
    cars.rentPerHour=req.body.rentPerHour
await cars.save()
res.send('car Edit successfully')
    }
    catch(error){
       return res.status(400).json(error); 
    }
    });
 

    router.post('/deletecar',async(req,res)=>{

    try{
        await car.findOneAndDelete({_id : req.body.carid})
           
   
res.send('car Delete successfully')
    }
    catch(error){
       return res.status(400).json(error); 
    }
    });



module.exports =router