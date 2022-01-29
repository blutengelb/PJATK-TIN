// h)   Write a JavaScript function which will
//     take an array of numbers stored and
//     find the second lowest and second greatest numbers, respectively

const lowHighSecond = (arr) => {
    const sortArr = [...new Set(arr)].sort((a,b) => a - b)
    return [sortArr[1], sortArr[sortArr.length - 2]]
}
console.log(lowHighSecond([1,2,3,4,5,6,7,8,9,10]))