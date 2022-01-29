// d)	Extend task B with getter for average grade property
//      and getter and setter for student’s full name

function Student(firstName, lastName, id, grades) {
    this.firstName = firstName
    this.lastName = lastName
    this.id = id
    this.grades = grades

    this.stInfo = function () {
        console.log("First name of the student: " + this.firstName
            + "\nLast name of the student: " + this.lastName
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

    Object.defineProperty(Student.prototype, 'fullName', {
        get: function () {
            return this.firstName + " " + this.lastName;
        },
        set: function (value) {
            // splitting the full name to first and last name
            let name = value.split(" ");
            this.firstName = name[0] || "";
            this.lastName = name[1] || "";
        }

    });

    Object.defineProperty(Student.prototype, 'getAvgGrade', {
        get: function () {
            return this.avgGrade();
        },

    });
}

const student = new Student('Danylo', 'Borshch', 17115, [3, 3, 2, 4])
student.stInfo();
student.avgGrade()
student.fullName = "Daniil Borsch";

console.log("\n" + student.fullName);
console.log("Average  grade: " + student.getAvgGrade);
console.log(student.firstName);
console.log(student.lastName);