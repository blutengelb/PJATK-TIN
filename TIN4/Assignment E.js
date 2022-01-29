// e)	Write a JavaScript function that accepts
//      a string as a parameter and find the longest word within the string

const longestWord = (s) => {
    return s.split(' ').sort((a, b) => b.length - a.length)[0]
}
console.log(longestWord('test1 testt2 testtt3 testttt4'));