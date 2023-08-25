const mongoose = require("mongoose")

const {Schema} = mongoose


const ProductSchema = new Schema({
    CategoryName: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    img: {
        type: String,
        required: true
    },
    options: {
        type: [{
          half: String,
          full: String, 
          regular:String,
          medium: String,
          large:String,
          
        }] 
      }
    ,

    description: {
        type: String,
        required: true
    },
}, {
    collection: 'foods_items' // Specify the desired collection name here
});


module.exports = mongoose.model('Product', ProductSchema);