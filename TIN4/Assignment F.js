// f)	Write a JavaScript function that accepts
//     a number as a parameter and check the number is prime or not

const prime = (num) => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) return false;
    }
    return num > 1;
}
console.log(prime(17));
console.log(prime(10));