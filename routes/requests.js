const donotionrequestController = require("../controller/donotionrequestController");

const express = require('express');
const router = express.Router();

router.get("/", donotionrequestController.donotionRequest);

router.get("/create", donotionrequestController.createDonotionRequestForm);

router.post("/create", donotionrequestController.createDonotionRequest);

router.delete("/remove/:id", donotionrequestController.deleteDonotionRequest);

router.get("/update", donotionrequestController.updateDonotionRequestForm);

router.post("/update", donotionrequestController.updateDonotionRequest);

module.exports = router;
