const express = require('express');
const router = express.Router();
const foodItemsModel = require("../models/foodItemsModel");

router.post("/add", async function(req, res) {
    try {
        const additionResponse = await foodItemsModel.create(req.body);
        console.log("additionResponse", additionResponse);
        res.send({ results: "item added successfully" });
    } catch (e) {
        console.log("error occured in adding item", e);
    }
});

router.get('/list', async function(req, res) {
    try {
        const foodList = await foodItemsModel.find({}, { __v: 0 });
  res.send({ results: foodList });
    } catch (e) {
        console.log("error in retrieving the item", e);
    }
});


module.exports = router;