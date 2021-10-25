const mongoose = require('mongoose');
const orderItemsSchema = new mongoose.Schema({
    name: String,
    image: String,
    subItemsData: {
        name: String,
        subItems: [
            {
                name : String,
                image: String,
                price: Number,
                description: String,
            }
        ]
    }
},
    { collection: "orderItemsCollection" }
);

const model2 = mongoose.model('foodItemsModel', orderItemsSchema);
module.exports = model2;