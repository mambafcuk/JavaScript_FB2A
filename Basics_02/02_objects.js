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


const regularName = {
       email : "kartikkaranwal8192@gmail.com",
       fullName:{
        userName:{
            firstName : "kartik",
            lastName : "karanwal"
        }
       }
}

// console.log(regularName.fullName.userName.firstName);



const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "b", 4: "d"}

// const obj3 = Object.assign({}, obj1, obj2)

const obj3 = {...obj1, ...obj2}

// console.log(obj3);


// console.log(Object.keys(obj1))
// console.log(Object.values(obj1));
// console.log(Object.entries(obj1))

// console.log(Object.hasOwnProperty('a'))


const course ={
    courseId : 1001,
    courseName : "Javascript",
    coursePrice : 599
}


const {courseId, courseName, coursePrice} = course


console.log(coursePrice);