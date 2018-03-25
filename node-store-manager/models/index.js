const mongoose = require("mongoose"); 
const conf = require('../conf/conf.js');

// Connect to MongoDB: 
mongoose.connect(`mongodb://localhost:27017/${conf.dbName}`, function(err) {
    console.log(`We're connected to MongoDB, using db ${conf.dbName}`);
})


module.exports={
    mongoose
}
