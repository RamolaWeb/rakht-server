const express = require("express");
const router = express.Router();
const donorController = require("./controller/donorController");

router.get("/:id", donorController.donorDetail);

router.get("/search", donorController.searchDonor);

router.post("/create", donorController.createDonor);

router.put("/update/:id", donorController.updateDonor);

router.delete("/remove/:id", donorController.deleteDonor);

module.exports = router;
