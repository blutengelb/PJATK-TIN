// a)	Use object initializer to create an object,
// it should have at least 2-3 fields and 2-3 methods.
// Write a function accepting the object as a parameter
// and printing all its properties and their types

const student = {
    name: "Danylo",
    age: 21,
    snum: 17115,

    stInfo() {
        console.log("Name of the student: " + this.name
            + "\nAge of the student: " + this.age
            + "\nID of the student: " + this.snum);
    },

    yearOfBirth: function (currentYear) {
        return currentYear - this.age;
    },
}

const printProperties = function (obj) {
    let val;
    for (let prop in obj) {
        val = student[prop];
        console.log(prop + " = " + val);
    }
}

console.log("Year of birth of the student: "
    + student.yearOfBirth(2021) + "\n");
student.stInfo();
printProperties(student);