const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const donotionrequestSchema = new Schema({
  "id" : Schema.ObjectId,
  "ownerId" : { type: Schema.ObjectId, ref: "donor", required: true},
  "bloodGroup" : { type: String, required: true},
  "message" : {type : String, required: true},
  "donor" : [{{ type: Schema.ObjectId, ref: "donor"}],
  "dateOfRequest" : { type : Date, default : Date.now()},
  "isAlive" : { type : Boolean, default : true}
});

module.exports = mongoose.model("donotionrequest", donotionrequestSchema);
