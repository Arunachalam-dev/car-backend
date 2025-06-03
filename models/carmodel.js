const mongoose=require('mongoose');

const carschema=new mongoose.Schema({
    name:{type:String,required:true},
    image:{type:String,required:true},
    capacity:{type:Number,required:true},
    fuelType:{type:String,required:true},
    bookedTimeSlot:[{
        from:{type:String,require:true},
        to:{type:String,require:true}
    }],
    
rentPerHour:{type:Number,require:true}
},{timeseries:true})

const carmodel=mongoose.model('cars',carschema)
module.exports=carmodel