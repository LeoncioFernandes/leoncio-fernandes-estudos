function sumNumbers(...numbers: number[]){
    let total = 0;
    numbers.forEach(number => {
        total += number;
    })
    return total;
}

const result = sumNumbers(1,2,3,4,5);
console.log(`The sum of the numbers is: ${result}`);