const { mongoose } = require('./index');

let schemaDefenition=(min,max,pk=false)=>({
        type: String,
        required: true,
        unique: pk,
        minlength: min,
        maxlength:max
    });

let managerSchema = new mongoose.Schema({
    firstName: schemaDefenition(3, 10),
    lastName: schemaDefenition(3, 10),
    userName: schemaDefenition(3, 10, true),
    password: schemaDefenition(3, 10),
    tokens: [{
        access: {
          type: String,
          required: true
        },
        token: {
          type: String,
          required: true
        }
      }]
});

let Manager = mongoose.model("Manager", managerSchema, "managers");
module.exports = {
    Manager
}


