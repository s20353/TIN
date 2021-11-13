function Student(firstName, lastName, id, grades) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    this.printInfo = function () {
        console.log(this.fullName + ' ' + this.averageGrade);
    }
}

Object.defineProperties(Student.prototype, {
    fullName:
    {
        set: function () {
            [this.firstname, this.lastName] = fullname.split(" ");
        },

        get: function () {
            return this.firstName + ' ' + this.lastName;
        }

    },

    averageGrade:
    {
        get: function () {
            let sum = 0;
            for (let i = 0; i < this.grades.length; ++i) {
                sum += this.grades[i];
            }
            return sum / this.grades.length;
        }

    }

});

let student = new Student('John', 'Doe', 20353, [3, 4, 3, 5, 3, 3, 5, 3, 4, 4])
student.printInfo();
console.log('full name: ' + student.fullName);
console.log('average grade: ' + student.averageGrade);


//comment out for console auto-close
process.stdin.resume();