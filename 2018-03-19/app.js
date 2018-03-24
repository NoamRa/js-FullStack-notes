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



// ===== CRUD =====
app.get("api/products", function(req, res) {
  Product.find({}, function(err, products) {
    res.set('Content-Type', 'application/json');
    res.send(products);
  });
})

app.post("api/product", function(req, res){
  var product = new Product(req.body);
  product.save();
  res.status(201);
  res.send(product);
})



const port = 3001;


app.listen(port, function(){
    console.log(`listening on port ${port}`);
})
