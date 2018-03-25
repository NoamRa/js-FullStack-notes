const { mongoose } = require('./index');

let Manager = mongoose.model("Manager", {
    firstName: String,
    lastName: String,
    userName: String,
    password: String
}, "managers");


function validateUserName(userName) {
    //validate that this userName is not used in the DB
    return new Promise((resolve,reject)=>{
        Manager.count({ "userName": userName }, function (err, x) {
            console.log(x);
            if (x) {
                reject(`${userName} is allready used as a userName`);
            }
            else{
                resolve(true);
            }
        });
    })
   
 
}

function validateName(lName) {
    if (lName) {
        if (lName.length <= 3)
            throw new Error(`${lName} is to short - please use at least 4 chars`);

        else if (lName.length >= 8)
            throw new Error(`${lName} is to long - please do not use more than 8 chars`);
        return true;
    }
    throw new Error(`${lName} is to short - please use at least 4 chars`);
}

function validatePassword(password) {
    if (password && password.length > 8) {
        throw new Error(`password is to long - please do not use more than 8 chars`);
    }
    else if (password && password.length < 4) {
        throw new Error(`password is to short - please do not use less than 4 chars`);
    }
    else if (password)
        return true
    throw new Error(`please enter password`);
}


function validateManager(manager){
        return validateUserName(manager.userName).then(
            (res)=> res
            &&validateName(manager.firstName)
            &&validateName(manager.lastName)
            &&validatePassword(manager.password)
        ).catch(
            (x)=>{throw new Error(x)}
        ); 
};

module.exports = {
    Manager,
    validateManager
}


