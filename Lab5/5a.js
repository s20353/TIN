let object =
{
    name: 'John',
    surname: 'Doe',
    age: 25,
    getName: function () { console.log('Name: ' + this.name); },
    getSurname: function () { console.log('Surname: ' + this.surname); },
    getAge() { console.log('Age: ' + this.age); }
}

function displayObject(obj) {
    Object.keys(obj).forEach(function (key, index) {
        console.log(index + '. ' + 'property name: ' + key + '\n   property type: ' + typeof (obj[key]) + '\n');
    });
}

displayObject(object);


//comment out for console auto-close
process.stdin.resume();