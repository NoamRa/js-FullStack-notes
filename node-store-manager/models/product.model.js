const { mongoose } = require('./index.js');

let Product = mongoose.model("Product", {
    name: String,
    price: Number,
    description: String,
}, "products");


function validateProductNotExists(name) {
    //validate that this name is not used in the DB
    return new Promise((resolve,reject)=>{
        Product.count({ "name": name }, function (err, recordCount) {
            console.log(`${recordCount} records of ${name}`);
            if (recordCount) {
                reject(`'${name}' is already used as a product name`);
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

function validateNum(num) {
    if (num && typeof num === "number") {
        return true;
    }
    throw new Error(`'${num}' is not a number`);
}


function validateProductValues(product) {
    return validateStrLen(product.name)
            && validateNum(product.price)
            && validateStrLen(product.description)
}

function validateNewProduct(product) {
    return validateProductNotExists(product.name)
        .then((res) => res && validateProductValues(product))
        .catch((err) => console.log(err.message));
};


module.exports = {
    Product,
    validateNewProduct,
    validateProductValues
}


