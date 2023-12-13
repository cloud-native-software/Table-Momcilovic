console.log("Array")
let arr = [1, 3, 23, -2, 23232, 2132, 65, 7, 8]
console.log(arr)
let min = arr[0]
let max = arr[0]
for (let i = 0; i < arr.length; i++) {
    if (arr[i]< min){
        min = arr[i]
        
    }if (arr[i]>max){
        max = arr[i]
        
    }
}
console.log('min je ' +min)
console.log('max je ' +max)
