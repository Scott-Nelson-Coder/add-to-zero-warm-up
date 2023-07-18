// Starting array
let array = [28, 43, -12, 30, 4, 0, 12]

// Write your solution below:

let value = false

for(i = 0; i < array.length; i++){
    for(j = 0; j < array.length; j++){
        if(i !== j) {
            if(array[i] + array[j] === 0) {
                value = true
            }
        }
    }
}

console.log(value)

