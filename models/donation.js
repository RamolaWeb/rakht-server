const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donationSchema = new Schema({
  "id" : Schema.ObjectId,
  "donor" : { type: Schema.ObjectId, ref: "donor", required: "true"},
  "donotedBlood" : { type: Boolean, default: false}
});

module.exports = mongoose.model("donation", donorSchema);
