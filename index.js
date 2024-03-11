const express = require("express");
const cors = require("cors");
const app = express();
require("dotenv").config();
const dataRoutes=require("./routes/dataRoutes");


app.use(cors());

const PORT = process.env.PORT || 3000;
app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.use("/",dataRoutes);



require("./config/database").connect();



app.listen(PORT, () => {
  console.log(`Server is running at ${PORT} port`);
});
