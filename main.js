let num = 266219;

let result = 1;

for (let i = 0; i < num.toString().length; i++) {
    result *= parseInt(num.toString()[i]);
}

console.log(result);

result **= 3;

console.log(result.toString()[0]);
console.log(result.toString()[1]);