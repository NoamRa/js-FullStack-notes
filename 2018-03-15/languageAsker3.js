var fs = require('fs');
var readline = require("readline");
var events = require('events');
 
var eEmitter = new events.EventEmitter();

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let question1 = "How many programing languages do you know? "
let question2 = "please write language name and years of experiance: "
let question3 = "what language to recall? "

fs.writeFileSync("./languages.txt", "");

function q1() {
  return new Promise((resolve, reject) => {
    rl.question(question1, (num) => { resolve(num) })
  })
};

function q2() {
  return new Promise((resolve, reject) => {
    rl.question(question2, (langAndExp) => { resolve(fs.appendFile(`./languages.txt`, langAndExp)) })
  })
}

function askLanguages(num){
    pArr = new Array(num, q2())
    return pArr;
}


q1()
.then(num => askLanguages(num))
.then(() => rl.close())
