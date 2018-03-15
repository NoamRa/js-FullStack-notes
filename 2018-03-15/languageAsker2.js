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

var eEmitter = new events.EventEmitter();
eEmitter.on("addLanguage", (langAndExp) => { fs.appendFile(`./languages.txt`, langAndExp); });


fs.writeFileSync("./languages.txt", "");

rl.question(question1, (num) => {
    doStuff(num);
    // rl.close();
});

function doStuff(num) {
    for (let i = 1; i <= num; i++) {
        q2();
    }

    recallLanguage(langAndExp);
};

function q2() {
    rl.question(question2, (langAndExp) => {
        eEmitter.emit("addLanguage", langAndExp)
        // rl.pause();
    });
}


function recallLanguage() {
    fs.readFile('./languages.txt', function read(err, data) {
        content = data;
        // Invoke the next step here however you like
        // console.log(content);   // Put all of the code here (not the best solution)
        processContent(content);          // Or put the next step in a function and invoke it
    });
}

function processContent(content) {
    console.log(content);
}






