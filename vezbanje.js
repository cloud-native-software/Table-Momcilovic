const readline = require('readline');
const fs = require ('fs')


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
list = []
p = []
n = []

enter_number()
function enter_number() {
    rl.question('Type number from 0 to 99 (0 for results)', (number) => {
        number = parseInt(number)

        if (number > 0 && number < 99) {
            list.push(number)
            
            enter_number()

        } else if (number < 0 || number > 99) {
            console.log("Enter number beetween 0 and 99 (except 0)")
            enter_number()
        } else if (number === 0) {
            let min = list[0]
            let max = list[0]
            let sum = 0
            for (let i = 0; i < list.length; i++) {
                if (min > list[i]){
                    min = list[i]
                }
                if (max < list [i]){
                    max = list[i]
                }
                sum =+ list[i]
                
            }
            let avg = sum / list.length
            console.log(list)
            console.log ('Minimum of this array is :'+min)
            console.log('Maximum of this array is'+max)
            console.log ('Average is :'+ avg)
            console.log ('Parni brojevi su:'+ p)
            console.log ('Neparni brojevi su :'+ n)
            descending_sort()
            ascending_sort()
            
            const jsonData = JSON.stringify(list)
            console.log(jsonData)
            rl.close()

        }
        if (number % 2 === 0){
            p.push(number)
        }else {
            n.push(number)
        }

    }
    )
}

function descending_sort(){
    list.sort((a, b) => b - a);
    console.log("Sortirani brojevi od najveceg ka najmanjem", list)       
}
function ascending_sort(){
    list.sort((a, b) => a - b);
    console.log("Sortirani brojevi od najmanjeg ka najvecem", list)       
}


