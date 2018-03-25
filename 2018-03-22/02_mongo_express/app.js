// Requires:
const {app} =require('./controllers/index');
const {mongoose}=require('./models/index');
const managerController = require('./controllers/manager');
/*
const express = require("express"); 
const bodyParser = require("body-parser"); 


// Create express app:
const app = express();

// Use middlewares:
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

managerController.init();
app.post("/api/manager", (request, response) => {

            response.status(201);
            response.send("g");
  
});
*/

managerController.init();
// Run server: 
app.listen(3000, function(){
    console.log("Listening on http://localhost:3000");
});