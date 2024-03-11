const DataModel = require("../models/DataModel");

exports.getAllData = async (req, res) => {
  try {
    const data = await DataModel.find();
    res.json({ message: "Data fetched successfully", data });
  } catch (error) {
    console.error("Error fetching data:", error);
    res.status(500).json({ message: "Failed to fetch all data. Please try again later." });
  }
};

exports.getDataByFilters = async (req, res) => {
  try {
    let query = {};
    if (req.query.end_year) {
      query.end_year = req.query.end_year;
    }
    if (req.query.topics) {
      query.topics = { $in: req.query.topics.split(",") };
    }
    if (req.query.sector) {
      query.sector = req.query.sector;
    }
    if (req.query.region) {
      query.region = req.query.region;
    }
    // Add more filters as needed

    const data = await DataModel.find(query);
    res.json({ message: "Data fetched successfully", data });
  } catch (error) {
    console.error("Error fetching data by filters:", error);
    res.status(500).json({ message: "Failed to fetch data with specified filters. Please try again later." });
  }
};
