class Person
{
    constructor(firstName, lastName)
    {
        this.firstName = firstName;
        this.lastName = lastName;
    }

    get fullName()
    {
        return this.firstName + ' ' + this.lastName;
    }

    set fullName(name)
    {
        let splitname = name.split(' ');
        this.firstName = splitname[0] || '';
        this.lastName = splitname[1] || '';
    }
}

class Student extends Person
{
    constructor(firstName, lastName, id, grades)
    {
        super(firstName, lastName);
        this.id = id;
        this.grades = grades;
    }

    printInfo()
    {
        console.log(this.fullName + ' ' + this.averageGrade);
    }

    get averageGrade()
    {
        let sum = 0;
        for (let i = 0; i < this.grades.length; ++i)
        {
            sum += this.grades[i];
        }
        return sum / this.grades.length;
    }

}

let student = new Student('John', 'Doe', 20353, [3, 4, 3, 5, 3, 3, 5, 3, 4, 4])
student.printInfo();
console.log('full name: ' + student.fullName);
console.log('average grade: ' + student.averageGrade);

//comment out for console auto-close
process.stdin.resume();