function addTwoNumber(number1, number2) //parameter
{
  console.log(number1+number2)
}

// addTwoNumber(3,4)  //arguments


//Declartion of function using values from object 

const Object = {
    name : "Kartik",
    price : 399
}

function Demo1(anyObject){
    return `My name is ${anyObject.name} & price of my product is ${anyObject.price}`
}

// console.log(Demo1(Object))


//Declartion of function using values from array

const Obj = [100,200,300,400]

function Demo(anyArray){
  return anyArray
}

console.log(Demo(Obj))


