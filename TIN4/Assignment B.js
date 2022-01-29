// b)	Function calculating nth number in Fibonacci sequence
const fibonacci = (num) => {
    const seq = [0, 1]

    if (num < 2) {
        return seq[num]
    }
    for (let i = 2; i <= num; i += 1) {
        const sum = seq[0] + seq[1]
        seq[0] = seq[1]
        seq[1] = sum
    }
    return seq[1]
}

console.log(fibonacci(7));