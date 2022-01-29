// c)	Create a prototype of a student object using initializer.
//     The object should contain an array with list of courses each student should take.
//     Write a function creating new objects based on this prototype,
//     setting their first and last name and id properties.

const student = {
    firstName: null,
    lastName: null,
    id: null,
    courses: ["TIN", "ZPR", "BYT", "GRK", "GER", "A_BD"],

    createStudent: function (firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
};

const me = Object.create(student);
me.createStudent("Danylo", "Borshch", 17115);
console.log("Hi, I am " + me.firstName + " " + me.lastName + " (:");
console.log("My courses: " + me.courses);