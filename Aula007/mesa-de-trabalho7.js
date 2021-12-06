// Exercício 1 - O que cada expressão retorna?

console.log("1- !true = " + !true);
console.log("2- !false = " + !false);
console.log("3- !!false = " + !!false);
console.log("4- !!true = " + !!true);
console.log("5- !1 = " + !1);
console.log("6- !!1 = " + !!1);
console.log("7- !0 = " + !0);
console.log("8- !!0 = " + !!0);
console.log('9- !!"" = ' + !!"");

let x = 5;
let y = 9;

console.log("let x = 5; let y = 9;");
console.log("10-a) x < 10 && x!==5 = " + (x<10 && x!==5));
console.log("10-b) x > 9 || x===5 = " + (x>9 || x===5));
console.log("10-c) !(x===y) = " + (!(x===y)));

// Exercício 2 - O que cada expressão retorna?

let x1 = 10;
let y1 = "a";

console.log('let x1 = 10; let y1 = "a";')
console.log('1- y==="b" || x >= 10 = ' + (y==="b" || x>=10));

let x2 = 3;
let y2 = 8;

console.log('let x2 = 3; let y2 = 8;')
console.log('2- !(x == "3" || x === y) && !(y !== 8 && x <= y) = ' + (!(x == "3" || x === y) && !(y !== 8 && x <= y)));

let str = "";
let msg = "haha!";
let eBonito = "false";

console.log('let str = ""; let msg = "haha!"; let eBonito = "false";');
console.log("!((str || msg) && eBonito) = " + !((str || msg) && eBonito));

