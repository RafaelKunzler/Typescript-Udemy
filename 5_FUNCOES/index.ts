// 1 - void
function withoutReturn(): void {
  console.log("Esta função não tem retorno!");  
}
withoutReturn()

// 2 - callback como argumento
function greeting(name: string) {
  return `Olá ${name}`
}

function preGreeting(f: (name: string) => string, userName: string) {
  console.log("Preparando a função");
  const greet = f(userName)
  console.log(greet);
}

preGreeting(greeting, "Rafael")

// 3 - generic function
function firstElement<T>(arr: T[]): T {
  return arr[0]
}

console.log(firstElement([1, 2, 3]));
console.log(firstElement(["a", "b", "c"]));

function mergeObjects<U, T>(obj1: U, obj2: T) {
  return{
    ...obj1,
    ...obj2
  }
}

const newObject = mergeObjects({name: "Rafael"}, {age: 30, job: "Programmer"})
console.log(newObject);

// 4 - constrains
function biggestNumber<T extends number | string>(a: T, b: T): T {
  let biggest: T
  if(+a > +b){
    biggest = a
  } else {
    biggest = b
  }
  return biggest
}

console.log(biggestNumber(5, 3));
console.log(biggestNumber("12", "5"));
//console.log(biggestNumber(7, "14"));



