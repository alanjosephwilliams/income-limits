const express = require("express");
const router = express.Router();
const IncomeLimitsByState = require("../models/IncomeLimitsByState");
const { Op } = require("sequelize");

router.get("/", async (req, res) => {
  try {
    const limits = await IncomeLimitsByState.findAll();
    res.json(limits);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/search", async (req, res) => {
  try {
    const {
      state,
      min_fpl,
      max_fpl,
      min_eitc,
      max_eitc,
      // Add other query parameters as needed
    } = req.query;

    const whereClause = {};

    if (state) whereClause.state = state.toUpperCase();
    if (min_fpl) whereClause.fpl = { [Op.gte]: min_fpl };
    if (max_fpl) whereClause.fpl = { [Op.lte]: max_fpl };
    if (min_eitc) whereClause.eitc = { [Op.gte]: min_eitc };
    if (max_eitc) whereClause.eitc = { [Op.lte]: max_eitc };

    const searchResults = await IncomeLimitsByState.findAll({ where: whereClause });

    res.json(searchResults);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/states", async (req, res) => {
  try {
    const states = await IncomeLimitsByState.findAll();
    res.json(states);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/states/:state", async (req, res) => {
  try {
    const stateData = await IncomeLimitsByState.findOne({
      where: { state: req.params.state.toUpperCase() },
    });

    if (stateData) {
      res.json(stateData);
    } else {
      res.status(404).json({ message: "State not found" });
    }
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: "Internal server error" });
  }
});

router.get("/snap", async (req, res) => {
    try {
      const snapData = await IncomeLimitsByState.findAll({
        attributes: ["state", "snap"]
      });
      res.json(snapData);
    } catch (err) {
      console.error(err);
      res.status(500).json({ message: "Internal server error" });
    }
  });
  

// Export the router
module.exports = router;
