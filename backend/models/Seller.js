const mongoose = require('mongoose');
const { Schema } = mongoose;
const sellerSchema = new Schema({

    vendorname: {
        type: String,
        required: true
    },
    vendorcompany: {
        type: String,
        required: true
    },
    vendornumber: {
        type: String,
        required: true
    },
    vendorpassword: {
        type: String,
        required: true
    },
    vendoraddress: {
        type: String,
        required: true
    }


});


module.exports = mongoose.model('Seller', sellerSchema);