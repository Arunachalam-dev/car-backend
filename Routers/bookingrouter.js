const express = require('express');
const router = express.Router();
const Car = require('../models/carmodel');
const Booking = require('../models/bookindmodel');

// POST route to book a car
router.post('/bookcar', async (req, res) => {
  req.body.transactionid = "1234";
  try {
    // Assuming req.body.user is being sent from the client
    const newBooking = new Booking({
      user: req.body.user,  // Make sure the user is passed
      car: req.body.car,
      bookedTimeSlot: req.body.bookedTimeSlot,
      totalhours: req.body.totalhours,
      totalamt: req.body.totalamt,
      transactionid: req.body.transactionid,
    });
    
    await newBooking.save();
    const car = await Car.findOne({ _id: req.body.car });
    car.bookedTimeSlot.push(req.body.bookedTimeSlot);
    await car.save();

    res.send("Car booking successful");
  } catch (error) {
    console.error('Booking Error:', error);
    return res.status(400).json({ error: error.message });
  }
});

// In your booking get route
router.get('/getallbookings', async (req, res) => {
  try {
    // Populate both the user and car fields
    const bookings = await Booking.find().populate('user').populate('car');
    res.send(bookings);
  } catch (error) {
    console.error('Get All Bookings Error:', error);
    res.status(400).json({ error: error.message });
  }
});


module.exports = router;
