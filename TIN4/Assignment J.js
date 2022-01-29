// j)	Write a JavaScript program for binary search

const binarySearch = (arr, x) => {
    let start = 0, end = arr.length - 1;
    while (start <= end) {
        let mid = Math.floor((start + end) / 2)
        if(arr[mid]===x){
            return mid;
        }
        if (arr[mid] < x) {
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return -1
}

const arr = [1, 2, 3, 5, 4, 6, 7, 9, 8, 10]
const sortedArr = [...new Set(arr)].sort((a, b) => a - b)
console.log(JSON.stringify(sortedArr))
console.log(binarySearch(sortedArr, 5));