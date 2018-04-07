const { SHA256 } = require('crypto-js');

const { Manager } = require('./../models/manager');

var login = (req, res, next) => {
    var shaSecret = req.header('xx-auth');
    if(shaSecret){
        return Manager.find({}).then((allManagers) => {
            for (let x of allManagers) {
                let temp = SHA256(x.userName + x.password + "xyz").toString();
                if (temp == shaSecret) {
                    var data = {
                        id: x._id,
                        time: Date.now()
                      };
                    req.token =  jwt.sign(data, 'my secret');
                    break;
                }
            }
            next();
    
        }).catch((e) => {
            res.status(401).send();
        });
    }
    else{
        res.status(401).send();
    }
   
};

module.exports = { login };
