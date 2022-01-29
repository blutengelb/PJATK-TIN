// b)  Write a nodejs script that watches directory
// supplied as a parameter and
// prints out contents of files that are modified to console.

const fs = require('fs');
const directoryPath = process.argv[2]
fs.watch(directoryPath, (eventType, filename) => {
    console.log(eventType);
    console.log(filename);
})