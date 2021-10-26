const express = require('express');
const router = express.Router();
const orderItemsModel = require("../models/orderItemsModel");

router.post('/addorders', async function(req, res) {
    try {
        const orderadditionResponse = await orderItemsModel.create(req.body);
        console.log("additionResponse", orderadditionResponse);
        res.send({ results: "item added successfully" });
    } catch (e) {
        console.log("error occured in adding item", e);
    }
});
router.get('/getallorders', async function(req, res) {
    try {
        const orderItemRecord = await orderItemsModel.find({
            subItemsData : req.body.subItemsData
        }, { __v: 0 });
        console.log("orderItemRecord", orderItemRecord);
        res.send({ result: orderItemRecord });
    } catch(e) {
        console.log("Error", e);
    }
});

router.delete('/deleteall', async function(req, res){
    try {
        await orderItemsModel.deleteOne({id: req.body.id});
        res.send( {result: "All items deleted" });
    } catch(e) {
        console.log("Error in deleting all item", e);
    }
});

module.exports = router;