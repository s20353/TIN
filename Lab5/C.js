let Student = let Student =
{
    firstName: 'John',
    lastName: 'Doe',
    id: 20353,
    courses: ['ZPR', 'GRK', 'This', 'EPG']
};

function displayObject(obj)
{
    Object.keys(obj).forEach(function (key, index)
    {
        console.log(index + '. ' + 'propertyName: ' + key + '\n\tpropertyType: ' + typeof (obj[key]) + '\n\tpropertVal: ' + obj[key]);
    });
}

function registerNewStudent(firstName, lastName, id)
{
    let newStudent = Object.create(Student);
    newStudent.firstName = firstName;
    newStudent.lastName = lastName;
    newStudent.id = id;
    newStudent.courses = Student.courses;
    return newStudent;
}

console.log('Creating new student:')
let newStudent = registerNewStudent('Ikit', 'Claw', 13);
displayObject(newStudent);


//comment out for console auto-close
process.stdin.resume();