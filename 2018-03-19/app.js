var express = require('express');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');


var app = express();

app.use(bodyParser.urlencoded({extended:true}))
app.use(bodyParser.json());



var Product = mongoose.model("Product", {
  name: String, //schema of product
  price: Number,
});

mongoose.connect("mongodb://localhost:27017/test", function(err){
  console.log("Connected")
});

app.post("/products", function(request, response){
  var product = new Product(request.body);
  product.save();

  response.status(201);
  response.send(product);
})






app.listen(3001, function(){

})
