"use strict";
// 1 - numbers
let x = 10;
console.log(x);
x = 16;
console.log(typeof x);
const y = 15.42342;
console.log(typeof y);
console.log(y);
console.log(y.toPrecision(3));
// 2 - string
const firstName = "Rafael";
console.log(firstName.toUpperCase());
let fullName;
const lastName = "Rodrigues";
fullName = firstName + " " + lastName;
console.log(fullName);
console.log(typeof fullName);
// 3 - boolean
let a = false;
console.log(a);
console.log(typeof a);
a = true;
console.log(a);
// 4 - inference e annotation
const ann = "Teste";
let inf = "Teste";
// inf = 1
console.log("Testando 2");
// converter variavel
const num = 12;
const str = num.toString();
const str2 = `Eu vou imprimir o numero ${str}`;
console.log(str2);
