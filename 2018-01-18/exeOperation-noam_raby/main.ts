import reader = require("readline-sync");

function exeOperation(mathFunc: any=Math.floor, ...rest:number[]): number {
    return rest.reduce((acc, x) => acc + mathFunc(x), 0);
}

console.log("floor:", exeOperation(Math.floor, -1.9, -2.2, 3.5, 4.6));
console.log("no func:", exeOperation(undefined , -1.9, -2.2, 3.5, 4.6));
console.log("squared (anonymous):", exeOperation((n) => n**2, -1.9, -2.2, 3.5, 4.6));

let squared = (n) => n**2
console.log("squared (called):", exeOperation(squared, -1.9, -2.2, 3.5, 4.6));
console.log("round:", exeOperation(Math.round, -1.9, -2.2, 3.5, 4.6));
console.log("abs:", exeOperation(Math.abs, -1.9, -2.2, 3.5, 4.6));
