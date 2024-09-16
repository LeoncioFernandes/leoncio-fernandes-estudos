function numberSquared(num: number): number;
function numberSquared(num: number[]): number[];

function numberSquared(num: unknown): unknown{
    if(typeof num == "number"){
        return Math.pow(num, 2);
    }
    if(Array.isArray(num)){
        return num.map(n => Math.pow(n, 2))
    }
    return undefined
}

const number = 3;
const squaredNumber = numberSquared(number);
console.log(`The number ${number} squared:`, squaredNumber);

const numbers = [2, 3, 4, 5];
const squaredNumbers = numberSquared(numbers);
console.log(`The numbers [${numbers}] squared:`, squaredNumbers);