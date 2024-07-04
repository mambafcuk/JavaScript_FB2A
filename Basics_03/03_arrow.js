// this function

const user = {
    username: "kartik",
    price: 999,

    welcomeMessage : function(){
        console.log(`${this.username}, welcome to the webiste`)
    }
}

console.log(user.welcomeMessage())



//Explicit Method
const addTwo = (num1, num2) =>{
    return num1+num2
}

console.log(addTwo(3, 4))


//Implicit Method
const mulTwo = (num3, num4) => ( num3 * num4 )

console.log(mulTwo(3, 4))