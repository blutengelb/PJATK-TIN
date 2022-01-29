// c)	Write a JavaScript function that
// checks whether a passed string is palindrome or not

const palindrome = (s) => {
    const text = s.toLowerCase()
    const textReversed = text.split('').reverse().join('')
    return text === textReversed
}
console.log(palindrome('test'));
console.log(palindrome('civic'));