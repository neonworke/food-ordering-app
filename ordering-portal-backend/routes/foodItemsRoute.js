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

// router.post('/addorders', async function(req, res) {
//     try {
//         const orderadditionResponse = await orderItemsModel.create(req.body);
//         console.log("additionResponse", orderadditionResponse);
//         res.send({ results: "item added successfully" });
//     } catch (e) {
//         console.log("error occured in adding item", e);
//     }
// });
// router.get('/getallorders', async function(req, res) {
//     try {
//         const orderItemRecord = await orderItemsModel.find({}, { __v: 0 });
//         console.log("orderItemRecord", orderItemRecord);
//         res.send({ result: orderItemRecord });
//     } catch(e) {
//         console.log("Error", e);
//     }
// });

// router.delete('/deleteall', async function(req, res){
//     try {
//         await orderItemsModel.deleteOne({id: req.body.id});
//         res.send( {result: "All items deleted" });
//     } catch(e) {
//         console.log("Error in deleting all item", e);
//     }
// });


module.exports = router;