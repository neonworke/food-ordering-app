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
        },
    ]
}
},
    { collection: "orderItemsCollection" }
);

const model = mongoose.model('orderItemsCollection', orderItemsSchema);
module.exports = model;