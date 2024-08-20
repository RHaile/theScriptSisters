// const mongoose = require("mongoose");
const express = require("express");
const app = express();
const PORT = 3000;
const cors = require("cors");

const corsOptions = {
  origin: ["http://localhost:5173"],
};

app.use(cors(corsOptions));


app.get("/api", (req, res) => {
res.json({fruits: ["apple", "orange", "banana"] })
});

app.listen(PORT, () => console.log("Server Started on port 3000"));
