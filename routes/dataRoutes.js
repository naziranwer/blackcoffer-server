const express = require("express");
const router = express.Router();
const dataController = require("../controllers/dataController");

// Get all data
router.get("/data", dataController.getAllData);

// Get data filtered by criteria
router.get("/data/filter", dataController.getDataByFilters);

module.exports = router;
