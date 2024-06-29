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

