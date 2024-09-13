// import libraries
require("dotenv").config();
const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");
const userRouter = require("./routes/user-router");
const plantRouter = require("./routes/plant-router");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

// connect client-side
app.use(cors(corsOptions));

// JSON parsing middleware
app.use(express.json());

// apply middleware to routes
app.use("/users", userRouter);
app.use("/plants", plantRouter);

const clientOptions = {
  serverApi: { version: "1", strict: true, deprecationErrors: true },
};

// connection to mongoDb
async function connectDb() {
  try {
    // create a Mongoose client
    await mongoose.connect(process.env.MONGO_CONNECTION_STRING, clientOptions);
    console.log("SIS it's connected!");
  } catch (error) {
    // close if error
    await mongoose.disconnect();
    console.error(error);
  }
}

// run server
app.listen(PORT, async () => {
  await connectDb().catch(console.dir);
  console.log(`Server started at: http://localhost:${PORT}`);
}); 
