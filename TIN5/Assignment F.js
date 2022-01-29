// f)	Create class Person with first and last name,
//     as well as getter and setter for full name.
//     Rewrite Student class from task E to extend class Person

class Person {
    constructor(firstName, lastName) {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(value) {
        let name = value.split(" ");
        this.firstName = name[0] || "";
        this.lastName = name[1] || "";
    }

    printFullName() {
        console.log(this.firstName + " " + this.lastName);
    }

}

class Student extends Person {
    constructor(firstName, lastName, id, grades) {
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }

    stInfo() {
        console.log("First name of the student: " + this.firstName
            + "\nLast name of the student: " + this.lastName
            + "\nID of the student: " + this.id
            + "\nGrades of the student: " + this.grades);
    }

    avgGrade() {
        let points = 0;
        for (let i = 0; i < this.grades.length; i++) {
            points += this.grades[i];
        }
        return points / this.grades.length
    }

    get fullName() {
        return this.firstName + " " + this.lastName;
    }

    set fullName(value) {
        let name = value.split(" ");
        this.firstName = name[0] || "";
        this.lastName = name[1] || "";
    }

    get getAvgGrade() {
        return this.avgGrade();
    }

}

const student = new Student('Danylo', 'Borshch', 17115, [3, 3, 2, 4])
student.fullName = "Daniil Borsch";

console.log("\n" + student.fullName);
console.log("Average  grade: " + student.getAvgGrade);