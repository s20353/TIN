class Student
{
    constructor(firstName, lastName, id, grades)
    {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
        this.grades = grades;
    }

    printInfo()
    {
        console.log(this.fullName + ' ' + this.averageGrade);
    }

    get fullName()
    {
        return this.firstName + ' ' + this.lastName;
    }

    get averageGrade()
    {
        let sum = 0;
        for (let i = 0; i < this.grades.length; ++i) {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }

    set fullName(name)
    {
        let splitname = name.split(' ');
        this.firstName = splitname[0] || '';
        this.lastName = splitname[1] || '';
    }

}

let student = new Student('John', 'Doe', 20353, [3, 4, 3, 5, 3, 3, 5, 3, 4, 4])
student.printInfo();
console.log('full name: ' + student.fullName);
console.log('average grade: ' + student.averageGrade);

//comment out for console auto-close
process.stdin.resume();