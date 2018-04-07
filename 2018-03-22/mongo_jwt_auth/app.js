// Requires:
const {app} =require('./controllers/index');
const {mongoose}=require('./models/index');
const managerController = require('./controllers/manager');

managerController.init();

// Run server: 
app.listen(3000, function(){
    console.log("Listening on http://localhost:3000");
});