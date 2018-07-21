const ragavan = {
        name: 'ragavan',
        age: 30
    }
    //object literals 
    // print the object -ragavan using console.log
console.log(ragavan);
console.log(ragavan.age);

// creating multiple instances of object 
//Person constructor 

function Person(name, dob) {
    this.name = name;
    // this.age = age;
    this.birthday = new Date(dob);
    this.calculateAge = function() {
        const diff = Date.now() - this.birthday.getTime();
        const ageDate = new Date(diff);
        return Math.abs(ageDate.getUTCFullYear() - 1955);
    }
}

const rag = new Person('rag', 30);
const rags = new Person('rags', 31);
console.log(rags.age);

const ragavans = new Person('Mike', '01-02-1987');
console.log(ragavans);
console.log(ragavans.calculateAge());