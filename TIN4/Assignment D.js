// d)   Write a JavaScript function that returns a passed string with letters in alphabetical order.
//     Example string : 'webmaster'
//     Expected Output : 'abeemrstw'

const sortLetters = (s) => {
    return s.split('').sort().join('')
}
console.log(sortLetters("cbabacacbc"));
console.log(sortLetters("webmaster"));