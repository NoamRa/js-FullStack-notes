const { mongoose } = require('./index.js');

let Manager = mongoose.model("Manager", {
    firstName: String,
    lastName: String,
    userName: String,
    password: String
}, "managers");


function validateUserUserNotExists(userName) {
    //validate that this userName is not used in the DB
    return new Promise((resolve,reject)=>{
        Manager.count({ "userName": userName }, function (err, recordCount) {
            console.log(recordCount);
            if (recordCount) {
                reject(`'${userName}' is already used as a userName`);
            }
            else{
                resolve(true);
            }
        });
    })
}

function validateStrLen(str, min=3, max=8) {
    if (str && typeof str === "string") {
        if (str.length <= min)
            throw new Error(`'${str}' is to short - please use at least ${min} chars`);
        else if (str.length >= max)
            throw new Error(`'${str}' is to long - please do not use more than ${max} chars`);
        return true;
    }
    else if (str && !(typeof str === "string")) {
        throw new Error(`'${str}' is not a string`);
    }
    throw new Error(`problem with value '${str}'`);
}

function validatePassword(password, min=4, max=8) {
    if (password && typeof password === "string") {
        if (password.length > max) {
            throw new Error(`password is to long - please do not use more than ${max} chars`);
        }
        else if (password.length < min) {
            throw new Error(`password is to short - please do not use less than ${min} chars`);
        }
        else {
            return true
        }
    }
    throw new Error(`Invalid password`);
}

function validateManagerValues(manager) {
    return validateStrLen(manager.userName)
            && validateStrLen(manager.firstName)
            && validateStrLen(manager.lastName)
            && validatePassword(manager.password) 
}

function validateNewManager(manager) {
    return validateUserUserNotExists(manager.userName)
        .then((res) => res && validateManagerValues(manager))
        .catch((err) => console.log(err.message));
};


module.exports = {
    Manager,
    validateManagerValues,
    validateNewManager
}


