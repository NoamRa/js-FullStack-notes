const { app } = require('./index.js');
const { 
    Product, 
    validateNewProduct, 
    validateProductValues } = require('./../models/product.model.js');


dupAndRemove = (obj) => {
    let dup = Object.assign({}, obj._doc);
    delete dup._id;
    delete dup.__v;
    return dup
}

let init = () => {
    // get a product: 
    app.get("/api/product/:name", (req, res) => {
        Product.findOne({
            "name": req.params.name,
        }, function (err, record) {
            if (record) {
                res.status(200);
                res.end(JSON.stringify(dupAndRemove(record)));
            }
            else if (!record) {
                res.status(400);
                res.end(`No product '${req.params.name}'`);  
            }
            else {
                res.status(500);
                res.end("Did not succeed");
            }
        });
    });

    // get all product: 
    app.get("/api/products", (req, res) => {
        Product.find({}, function (err, records) {
            // console.log(records)
            if (records) {
                let allProducts = records.map((product) => dupAndRemove(product));
                res.status(200);
                res.end(JSON.stringify(allProducts));
            }
            else {
                res.status(500);
                res.end("Did not succeed");
            }
        });
    });


    // Add new product: 
    app.post("/api/product", (req, res) => {
        validateNewProduct(req.body)
        .then((record) => {
            if (record) {
                console.log(record)
                let product = new Product(req.body);
                product.save();
                // res.setHeader("Content-Type", "application/json");
                res.status(201);
                res.end(JSON.stringify(dupAndRemove(product)));
            }
            else if (!record){
                res.status(400);
                res.send(`product '${req.body.name}' already exists\n${JSON.stringify(req.body)}`);
            }
            else {
                res.status(500);
                res.send("error");
            }
        })
        .catch((err) => {
            res.status(400);
            res.send(`Product data not complete\n${JSON.stringify(req.body)}\n${err}`);
        });
    });

    // update product:
    app.put("/api/product/:name", function (req, res) {
        try {
            validateProductValues(req.body);
        }
        catch (err) {
            res.status(400);
            res.send(err + "\n" + JSON.stringify(req.body));
        }
        Product.findOne({
            "name": req.params.name,
        }, function (err, record) {
            if (record) {
                record.price = req.body.price;
                record.description = req.body.description;
                record.save();
                res.setHeader("Content-Type", "application/json");
                res.status(200);
                // console.log(dupAndRemove(record))
                res.end(JSON.stringify(dupAndRemove(record)));
            }
            else if (!record) {
                res.status(400);
                res.end(`No product '${req.params.name}'`);  
            }
            else {
                res.status(500);
                res.end("Did not succeed");
            }
        });
    });

    // delete a Product:
    app.delete("/api/product/:name", function (req, res) {
        Product.findOne({
            "name": req.params.name,
        }, function (err, record) {
            if (record) {
                record.remove();
                res.setHeader("Content-Type", "application/json");
                res.status(200);
                // console.log(dupAndRemove(record))
                res.end(JSON.stringify(dupAndRemove(record)));
            }
            else if (!record) {
                res.status(400);
                res.end(`No product '${req.params.name}'`);  
            }
            else {
                res.status(500);
                res.end("Did not succeed");
            }
        });
    });
}

module.exports = {
    init
}
