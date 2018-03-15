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


rl.question(question1, function (num) {
    fs.writeFileSync("./language.txt", "");
    eEmitter.on("addLanguage",(param)=>{fs.appendFileSync(`./languages.txt`, param);});
    doStuff(num);
    rl.close();
});

function doStuff(num){
    console.log("ok, " + num + " languages.");
    for (var i = 1; i <= num; i++) {
        eEmitter.emit("addLanguage", function handleSingleLanguage(i) {
            // console.log("handling "+i)
            rl.question(question2, function (langAndExp) {
                console.log()
                fs.appendFile("./language.txt", langAndExp);
            // rl.close();
            });
        });
    };
}



function recallLanguage() {
    rl.question(question3, function (langAndExp) {

        fs.readFile('./language.txt', function read(err, data) {
            if (err) {
                throw err;
            }
            content = data;
            // Invoke the next step here however you like
            // console.log(content);   // Put all of the code here (not the best solution)
            processContent(content);          // Or put the next step in a function and invoke it
        });


    // rl.close();

    });
}

function processContent(content) {
    console.log(content);
}