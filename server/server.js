const express = require("express");
const mongoose = require("mongoose");
require("dotenv/config")
const bodyParser =  require("body-parser")
const cors =  require("cors")
const userRoutes = require("./routes/userRoutes");

// app initiation
const app = express();

// middlewares
app.use(bodyParser.json())
app.use(cors({
    credentials: true,
    origin: ['http://localhost:5173']
}))
// MongoDB connection
const connect = async () => {
  try {
    mongoose.connect(process.env.DB_URI);
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  }catch(error) {
    console.log(error);
  }
};
connect() 

app.use("/app/user/", userRoutes);

const Port = 8000;
app.listen(Port, () => console.log("Server up and running"));
