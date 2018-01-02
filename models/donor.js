const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donorSchema = new Schema({
  "name" : { type : String, required : true},
  "address" : { type : String, required : true},
  "phoneNumber" : { type : String, required : true},
  "bloodGroup" : { type : String, required : true, enum: ["A-", "A+", "B+", "B-", "O-", "O+", "AB+", "AB-"]},
  "email" : { type : String, required : true},
  "registerationNumber" : String,
  "id" : Schema.ObjectId
});

module.exports = mongoose.model("donor", donorSchema);
