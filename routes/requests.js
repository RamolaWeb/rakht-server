const donotionrequestController = require("../controller/donotionrequestController");

const express = require('express');
const router = express.Router();

router.get("/", donotionrequestController.donotionRequest);

router.post("/create", donotionrequestController.createDonotionRequest);

router.delete("/remove/:id", donotionrequestController.deleteDonotionRequest);

router.put("/update/:id", donotionrequestController.updateDonotionRequest);

module.exports = router;
