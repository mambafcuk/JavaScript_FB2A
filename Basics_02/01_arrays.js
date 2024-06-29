const  myArr = [1,2,3,4,5,6]

console.log(myArr)

//Array Methods
myArr.push(7)

console.log(myArr)

myArr.pop()
console.log(myArr)

//slice
console.log("A  ", myArr)
const sliced_array = myArr.slice(1,3)
console.log(sliced_array);

//splice -  it manupilate actual array with o/p  one
console.log("B ", myArr)
const splice_array = myArr.splice(1,3)
console.log(sliced_array)
console.log(myArr)


const myArr1 =  [1,2,3,4,5]
const myArr2 =  [6,7,8,9,10]

myArr1.push(myArr2)

console.log(myArr1)


const latest_Arr = myArr1.concat(myArr2)
console.log(latest_Arr);


console.log(latest_Arr.flat())

let score1 = 100
let score2 = 200
let score3 = 300
console.log(Array.of(score1,score2,score3));


//seperation operator

const Arr = [...myArr1,...myArr2]

console.log(Arr);

