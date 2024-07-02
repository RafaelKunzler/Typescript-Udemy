// 1 - numbers
let x: number = 10

console.log(x);

x = 16

console.log(typeof x);

const y: number = 15.42342

console.log(typeof y);
console.log(y);

console.log(y.toPrecision(3));

// 2 - string
const firstName: string = "Rafael"

console.log(firstName.toUpperCase());

let fullName: string

const lastName: string = "Rodrigues"

fullName = firstName + " " + lastName

console.log(fullName);
console.log(typeof fullName);

// 3 - boolean
let a: boolean = false
console.log(a);
console.log(typeof a);

a = true
console.log(a);

// 4 - inference e annotation
const ann: string = "Teste"
let inf = "Teste"

// inf = 1

console.log("Testando 2");

// converter variavel

const num: number = 12
const str: string = num.toString()
const str2: string = `Eu vou imprimir o numero ${str}`

console.log(str2);









