// Requires:
const conf = require('./conf/conf');
const { app } = require('./controllers/index.js');
const { mongoose } = require('./models/index.js');

const managerController = require('./controllers/manager.controller.js');
managerController.init();

const productController = require('./controllers/product.controller.js');
productController.init();

const storeInfoController = require('./controllers/storeInfo.controller.js');
storeInfoController.init();

// Run server: 
app.listen(conf.port, function(){
    console.log(`Listening on http://localhost:${conf.port}`);
});