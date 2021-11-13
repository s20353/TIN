function Student(firstName, lastName, id, grades)
{
    this.firstName = firstName;
    this.lastName = lastName;
    this.id = id;
    this.grades = grades;
    function getAverageGrade()
    {
        let sum = 0;
        for (let i = 0; i < grades.length; ++i)
        {
            sum += grades[i];
        }
        return sum / grades.length;
    }

    this.printInfo = function ()
    {
        console.log(this.firstName + ' ' + this.lastName + ' ' + getAverageGrade());
    }
}

let student = new Student('John', 'Doe', 20353, [3, 4, 3, 5, 3, 3, 5, 3, 4, 4])
student.printInfo();

//comment out for console auto-close
process.stdin.resume();