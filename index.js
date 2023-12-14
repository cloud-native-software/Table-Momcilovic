console.log("Array")
let arr = [2,4]
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
function avg (){
    let sum = 0
    for (let i = 0; i< arr.length; i++){
        sum =+ arr[i] 
    }
    let average = sum / arr.length
    console.log('average is '+ average)
}
function sort(){
    let arr_reverse = arr.sort(function(a, b){return b - a});
    console.log(arr_reverse)
}
sort()