// Requires:
const conf = require('./conf/conf');
const { app } = require('./controllers/index.js');
const { mongoose } = require('./models/index.js');
const managerController = require('./controllers/manager.controller.js');
const productController = require('./controllers/product.controller.js');

managerController.init();
productController.init();

// Run server: 
app.listen(conf.port, function(){
    console.log(`Listening on http://localhost:${conf.port}`);
});