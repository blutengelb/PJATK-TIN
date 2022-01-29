// b)	Implement a constructor function, creating objects representing students –
//      they should include first and last name, id, array with grades
//      (without subject names, just grades) ,
//      a method printing first and last name and grade average of a student

function Student(firstName, lastName, id, grades) {
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.grades = grades

    this.stInfo = function () {
        console.log("First name of the student: " + this.firstName
            + "Last name of the student: " + this.lastName
            + "\nID of the student: " + this.id
            + "\nGrades of the student: " + this.grades);
    }

    this.avgGrade = function () {
        let points = 0;
        for (let i = 0; i < this.grades.length; i++) {
            points += this.grades[i];
        }
        return points / this.grades.length;
    }
}

const student = new Student('Danylo', 'Borshch', 17115, [3, 3, 2, 4])
student.stInfo();
console.log(student.avgGrade());