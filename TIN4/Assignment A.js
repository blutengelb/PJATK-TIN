// a)	Function calculating the factorial of a number.
// Do this using recursion and iteration.
// Create recursive function using function expression, iterative function using function declaration

function factIter(num) {
    let res = 1
    for (let i = 1; i <= num; i += 1) {
        res *= i
    }
    return res
}
console.log(factIter(5));

const factorRecursive = (num) => {
    if (num === 1) return 1
    return num * factorRecursive(num - 1);
}
console.log(factorRecursive(5))