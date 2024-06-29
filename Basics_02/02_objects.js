const mySym = Symbol("key1")

const JSUser =  {
    name: "Kartik", 
    [mySym]: "mykey1",
    email: "kartikkaranwal8192@gmail.com",
    age: 18,
    isLoggedIn: false
   
}



// console.log(JSUser.name)

// console.log(JSUser[mySym]);

// console.log(JSUser)

JSUser.email = "kartikkaranwal54@gmail.com"

// Object.freeze(JSUser)

JSUser.email = "kartikkaranwal89@gmail.com"


JSUser.greeting = function(){
    console.log("Hello, JS Users");
}

// console.log(JSUser.greeting());


// Singleton Object


