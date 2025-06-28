const mongoose = require('mongoose');



const coffeSchema = new mongoose.Schema(
    {
        Name:{
            type: String,
            required: true,
        },flavour:{
            type: String,
            required: true,
        },cost:{
            type: String,
            required: true,
        }
    });



module.exports = mongoose.model('coffedetails',coffeSchema);