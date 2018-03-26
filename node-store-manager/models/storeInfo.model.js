const { mongoose } = require('./index.js');

let Store = mongoose.model("Store", {
    name: String,
    address: String,
    description: String,
}, "stores");


function validateStoreNotExists(name) {
    //validate that this name is not used in the DB
    return new Promise((resolve,reject)=>{
        Store.count({ "name": name }, function (err, recordCount) {
            console.log(`${recordCount} records of ${name}`);
            if (recordCount) {
                reject(`'${name}' is already used as a store name`);
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

function validateStoreValues(store) {
    return validateStrLen(store.name,3,20)
            && validateStrLen(store.address,3,50)
            && validateStrLen(store.description,0,50)
}

function validateNewStore(store) {
    return validateStoreNotExists(store.name)
        .then((res) => res && validateStoreValues(store))
        .catch((err) => console.log(err.message));
};


module.exports = {
    Store,
    validateNewStore,
    validateStoreValues
}


