const express = require("express");
const router = express.Router();
const donorController = require("../controller/donorController");
const { check, validationResult } = require('express-validator/check');

router.get("/donor/:id", donorController.donorDetail);

router.get("/search", donorController.searchDonor);

router.post("/create",[
  check("name", "Name of Donor Must not be Empty").isLength({min: 1}),
  check("address", "Address of Donor Must not be Empty").isLength({min: 1}),
  check("email", "Email of Donor Must not be Empty").isLength({min: 1}),
  check("phoneNumber", "Phone Number of Donor Must not be Empty").isLength({min: 1}),
  check("bloodGroup", "Blood Group of Donor Must not be Empty").isLength({min: 1}),
],donorController.createDonor);

router.get("/update", donorController.updateDonorForm);

router.post("/update", donorController.updateDonor);

router.post("/remove/:id", donorController.deleteDonor);

router.get("/create", donorController.createDonorForm);

router.get("/", function(req, res, next){
  res.send("Profile of Donor");
});

module.exports = router;
