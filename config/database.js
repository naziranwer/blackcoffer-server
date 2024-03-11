const mongoose = require("mongoose");
const DataModel = require("../models/DataModel");
const jsonData = require("./jsondata.json");

require("dotenv").config();

exports.connect = () => {
  mongoose
    .connect(
      process.env.DATABASE_URL
      // {
      //     useNewUrlParser : true,
      //     useUnifiedTopology:true
      // }
    )
    .then(async () => {
      console.log("Database is connected");
    //   await insertData(jsonData);
    // await DataModel.deleteMany({});
    })
    .catch((err) => {
      console.error(err);
      console.log("Database is not connect");
      process.exit(1);
    });
};
async function insertData(data) {
  try {
    await DataModel.insertMany(data);
    console.log("Data inserted successfully");
  } catch (error) {
    console.error("Error inserting data:", error);
  }
}
