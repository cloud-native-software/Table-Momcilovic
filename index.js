console.log("Array")
let arr = [1,2,3,4,5,6,7,8,9]
console.log(arr)

console.log("MINIMUM")
min = Math.min(...arr)
console.log(min)

console.log("MAXIMUM")
max = Math.max(...arr)
console.log(max)
console.log ("Average")
let sum = 0
for  ( let number in arr) {
    sum = sum + number
}
average = sum / arr.lenght
console.log(average)