const mongoose=require('mongoose');

const bookingschema= new mongoose.Schema({
    car:{type:mongoose.Schema.Types.ObjectId,ref:'cars'},
    user:{type:mongoose.Schema.Types.ObjectId,ref:'users'},
        bookedTimeSlot: {
        from: { type: String,  },
        to: { type: String,  }
    },
     totalhours:{type: Number},
     totalamt:{type: Number},
     transactionid:{type:String},
     DriverRequire:{type:Boolean}

},{timestamps:true}
)

const Booking = mongoose.model('bookings', bookingschema);
module.exports = Booking;