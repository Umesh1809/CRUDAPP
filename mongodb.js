const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/CoffeShop',(err) => {
    if(!err) {
        console.log('Mongodb connected')
    }
    else {
        console.log('MongoDB connection error:', err) 
    }
});
