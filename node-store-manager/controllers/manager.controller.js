const { app } = require('./index.js');
const { 
    Manager, 
    validateNewManager, 
    validateMangerValues } = require('./../models/manager.model.js');


dupAndRemove = (obj) => {
    let dup = Object.assign({}, obj._doc);
    delete dup._id;
    delete dup.__v;
    return dup
}

let init = () => {
    // Add manager: 
    app.post("/api/manager", (req, res) => {
        validateNewManager(req.body)
        .then((record) => {
            if (record) {
                let manager = new Manager(req.body);
                manager.save();
                // res.setHeader("Content-Type", "application/json");
                res.status(201);
                res.end(JSON.stringify(dupAndRemove(manager)));
            }
            else {
                res.status(500);
                res.send("error");
            }
        })
        .catch(() => {
            res.status(400);
            res.send("User data not complete\n" + JSON.stringify(req.body));
        });
    });

    // Put manager:
    app.put("/api/manager/:userName/:password", function (req, res) {
        try {
            validateMangerValues(req.body);
        }
        catch (err) {
            res.status(400);
            res.send(err + "\n" + JSON.stringify(req.body));
        }   
        Manager.findOne({
            "userName": req.params.userName,
            "password": req.params.password
        }, function (err, record) {
            if (record) {
                record.password = req.body.password;
                record.lastName = req.body.lastName;
                record.firstName = req.body.firstName;
                record.save();
                // res.setHeader("Content-Type", "application/json");
                res.status(200);
                // console.log(dupAndRemove(record))
                res.end(JSON.stringify(dupAndRemove(record)));
            }
            else if (!record) {
                res.status(400);
                res.end("Wrong username and password don't match");  
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
