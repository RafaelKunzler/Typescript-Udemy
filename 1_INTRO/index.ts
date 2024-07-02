const firstName = "Rafael"
const anotherName = 1
const x = true

const num1 = 3
const num2 = 3

function greeting(name: string) {
  console.log("Olá " + name);
}

function sum(x: number, y: number){
  console.log(x + y);  
}

greeting(firstName)
sum(num1, num2)
// greeting(anotherName)
// greeting(x)