const jwt = require('jsonwebtoken');

const { app } = require('./index');
const { Manager } = require('./../models/manager');
var { authenticate } = require('./../middleware/authenticate');
var { login } = require('./../middleware/login');

let init = () => {
    // Add manager: 
    app.post("/api/manager", (request, response) => {
        let manager = new Manager(request.body);
        manager.save()
            .then((newDoc) => {
                response.status(201).send(newDoc);
            })
            .catch((e) => {
                response.status(400).send(e);
            });
    });

    // Get manager: (login)
    app.get("/api/manager", login, function (request, response) {
        if (request.token) {
            response.header('xx-auth', request.token);
            response.status(200);
            response.send("login success");
        }
        else {
            res.status(401).send();
        }
    });
}


module.exports = {
    init
}
