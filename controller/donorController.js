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
  res.send("Not Yet Implemented");
};

const deleteDonor = function(req, res, next){};

const updateDonor = function(req, res, next){};

const searchDonor = function (req, res, next) {};

const createDonorForm = function(req, res, next) {
  res.render("donorform");
};


module.exports = {
  createDonor : createDonor,
  donorDetail : donorDetail,
  deleteDonor : deleteDonor,
  updateDonor : updateDonor,
  searchDonor : searchDonor,
  createDonorForm : createDonorForm,
};
