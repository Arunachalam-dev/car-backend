const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  Username : { type: String, required: true , unique : true },
  Password : { type: String, required: true, unique : true },
});
// , { timestamps: true }); // adds createdAt and updatedAt fields

const usermodel = mongoose.model('users', userSchema);


module.exports = usermodel