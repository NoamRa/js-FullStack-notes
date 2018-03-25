const { app } = require('./index');
const { Manager, validateManager } = require('./../models/manager');


let init = () => {
    // Add manager: 
    app.post("/api/manager", (request, response) => {

        validateManager(request.body).then((x) => {
            if (x) {
                let manager = new Manager(request.body);
                manager.save();
                response.status(201);
                response.send(manager);
            }
            else {
                response.status(500);
                response.send("error");
            }
        })
            .catch(() => {
                response.status(500);
                response.send("error");
            });
    });


    // Put manager:
    app.put("/api/manager/:userName/:password", function (request, response) {
        Manager.findOne({
            "userName": request.params.userName,
            "password": request.params.password
        }, function (err, x) {
            if (x) {
                x.password = request.body.password || x.password;
                x.lastName = request.body.lastName || x.lastName;
                x.firstName = request.body.firstName || x.firstName;
                x.save();

                response.status(200);
                response.send(x);
            }
            else {
                response.status(500);
                response.send("Did not success");
            }
        });
    });
}


module.exports = {
    init
}
