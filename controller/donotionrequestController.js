const donorrequest = require("../models/donotionrequest");

const createDonotionRequest = function(req, res){
  const donotionReq = new donorrequest({
    ownerId: req.body.id,
    message: req.body.message,
    bloodGroup: req.body.bloodGroup
  });
  donotionReq.save((err, user)=>{
    if(err){
      const response = {
        status: false,
        message: "Could Not Make the request"
      };
      return res.json(response);
    }
    const response = {
      status: true,
      message: "Thanks for making the donotion",
      donotionRequestId: user._id
    };
    return res.json(response);
  });
};

const updateDonotionRequest = function(req, res){
const id = req.body.id;
let doReq = {};
if(req.body.message) doReq.message = req.body.message;
if(req.body.bloodGroup) doReq.bloodGroup = req.body.bloodGroup;
donorrequest.findByIdAndUpdate(id, doReq, function(err, user){
  if(err){
    const response = {
      status: false,
      message: "Could Not Found Donor By Given Id"
    };
    return res.json(response);
  }
  const response = {
    status: true,
    message: "Succesfully Updated the Information of "+user._id
  };
  return res.json(response);
});

};

const deleteDonotionRequest = function(req, res){};

const donotionRequest = function(req, res){
donorrequest.find().exec(function(err, result){
  if(err){
    const response = {
      status: false,
      message: "Could Not Found Donor By Given Id"
    };
    return res.json(response);
  }
  return res.json(result);
});
};

const createDonotionRequestForm = function(req, res){
  res.render("donationRequestForm");
};

const updateDonotionRequestForm = (req, res)=> {
  res.render("updateDonotionRequestForm");
};

module.exports = {
  createDonotionRequest : createDonotionRequest,
  updateDonotionRequest : updateDonotionRequest,
  deleteDonotionRequest : deleteDonotionRequest,
  donotionRequest : donotionRequest,
  createDonotionRequestForm: createDonotionRequestForm,
  updateDonotionRequestForm: updateDonotionRequestForm,
};
