const donor = require("../models/donor");

const createDonor = function(req, res, next){
  const user = new donor({
    name: req.body.name,
    address: req.body.address,
    email: req.body.email,
    phoneNumber: req.body.phoneNumber,
    bloodGroup: req.body.bloodGroup,
    registerationNumber: req.body.registerationNumber
  });
  user.save((err, user)=>{
    if(err){ return console.log(err);}
    const response = {
      status : true,
      message : "Succesfully Created The Donor Profile ",
      id : user._id
    };
    console.log(user);
    res.json(response);
  })
};

const donorDetail = function(req, res, next){
  const id = req.params.id;
  donor.findById(id, function(err, donor){
    if(err) {
      const response = {
        status: false,
        message: "Could Not Found Donor By Given Id"
      };
      return res.json(response);
    }
    return res.json(donor);
  });
};

const deleteDonor = function(req, res, next){};

const updateDonor = function(req, res, next){
  const id = req.body.id;
  let user = {};
  if(req.body.name) user.name = req.body.name;
  if(req.body.address) user.address = req.body.address;
  if(req.body.email) user.email = req.body.email;
  if(req.body.phoneNumber) user.phoneNumber = req.body.phoneNumber;
  if(req.body.bloodGroup) user.bloodGroup = req.body.bloodGroup;
  if(req.body.registerationNumber) user.registerationNumber = req.body.registerationNumber;
  donor.findByIdAndUpdate(id, user, function(err, result){
    if(err){
      const response = {
        status: false,
        message: "Could Not Found Donor By Given Id"
      };
      return res.json(response);
    }
    const response = {
      status: true,
      message: "Succesfully Updated the Information of "+result.name
    };
    return res.json(response);
  });
};

const searchDonor = function (req, res, next) {};

const createDonorForm = function(req, res, next) {
  res.render("donorform");
};

const updateDonorForm = function(req, res, next) {
  res.render("updateDonorForm");
};


module.exports = {
  createDonor : createDonor,
  donorDetail : donorDetail,
  deleteDonor : deleteDonor,
  updateDonor : updateDonor,
  searchDonor : searchDonor,
  createDonorForm : createDonorForm,
  updateDonorForm : updateDonorForm,
};
