// import
const express = require("express");
const router = express.Router();
const Plant = require("../models/plant");

// get
router.get("/:id", async (req, res) => {});

// create
router.post("/", async (req, res) => {});

// update
router.put("/:id", async (req, res) => {});

// delete
router.delete("/:id", async (req, res) => {});

// export
module.exports = router;
