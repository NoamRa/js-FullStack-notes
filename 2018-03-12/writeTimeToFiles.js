var fs = require('fs');
var readline = require("readline");
var events = require('events');
 
var eEmitter = new events.EventEmitter();

var rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

let questionText = "How many files to write? "

rl.question(questionText, function (number) {
    console.log(`Writing ${number} files...`);
    files = []
    writeFiles(number);
    for (let i = 0; i < number ; ++i) {
        var name = eval("var listener" + i);
        name = (file, data) => {appendToFile(file, data)}
        eEmitter.on('writeTime', name);
        files.push(`./${i}.txt`);
    }
    console.log("emitting!")
    var time = getTime();
    eEmitter.emit('writeTime', files[0], time);

    rl.close();
});

function writeFiles(number) {
    // arr = Array.apply(null, Array(number));
    // console.log(arr.length);
    // arr.forEach((x, i) => createFile(`./${i}.txt`))
    for (let i = 0; i < number ; ++i) {
        createFile(`./${i}.txt`);
    }
}

function appendToFile(file, data){
    fs.appendFile(file, data, (err) => {if (err) throw err;});
}

function createFile(name) {
    fs.writeFile(name, (err) => {if (err) throw err;}); 
    console.log(`Wrote file ${name}`)
}



