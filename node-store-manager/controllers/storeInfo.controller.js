const { app } = require('./index.js');
const { 
    Store, 
    validateNewStore, 
    validateStoreValues } = require('./../models/store.model.js');


dupAndRemove = (obj) => {
    let dup = Object.assign({}, obj._doc);
    delete dup._id;
    delete dup.__v;
    return dup
}

let init = () => {
    // get a store: 
    app.get("/api/store/:name", (req, res) => {
        Store.findOne({
            "name": req.params.name,
        }, function (err, record) {
            if (record) {
                res.status(200);
                res.end(JSON.stringify(dupAndRemove(record)));
            }
            else if (!record) {
                res.status(400);
                res.end(`No store '${req.params.name}'`);  
            }
            else {
                res.status(500);
                res.end("Did not succeed");
            }
        });
    });

    // get all store: 
    app.get("/api/stores", (req, res) => {
        Store.find({}, function (err, records) {
            // console.log(records)
            if (records) {
                let allStores = records.map((store) => dupAndRemove(store));
                res.status(200);
                res.end(JSON.stringify(allStores));
            }
            else {
                res.status(500);
                res.end("Did not succeed");
            }
        });
    });


    // Add new store: 
    app.post("/api/store", (req, res) => {
        validateNewStore(req.body)
        .then((record) => {
            if (record) {
                console.log(record)
                let store = new Store(req.body);
                store.save();
                // res.setHeader("Content-Type", "application/json");
                res.status(201);
                res.end(JSON.stringify(dupAndRemove(store)));
            }
            else if (!record){
                res.status(400);
                res.send(`store '${req.body.name}' already exists\n${JSON.stringify(req.body)}`);
            }
            else {
                res.status(500);
                res.send("error");
            }
        })
        .catch((err) => {
            res.status(400);
            res.send(`Store data not complete\n${JSON.stringify(req.body)}\n${err}`);
        });
    });

    // update store:
    app.put("/api/store/:name", function (req, res) {
        try {
            validateStoreValues(req.body);
        }
        catch (err) {
            res.status(400);
            res.send(err + "\n" + JSON.stringify(req.body));
        }
        Store.findOne({
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
                res.end(`No store '${req.params.name}'`);  
            }
            else {
                res.status(500);
                res.end("Did not succeed");
            }
        });
    });

    // delete a Store:
    app.delete("/api/store/:name", function (req, res) {
        Store.findOne({
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
                res.end(`No store '${req.params.name}'`);  
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
