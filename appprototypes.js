//Object.prototype - see the last console
//Person.prototype


// Person constructor
function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.birthday = new Date(dob);
    // this.calculateAge = function(){
    //   const diff =  Date.now() - this.birthday.getTime();
    //   const ageDate = new Date(diff);
    //   return Math.abs(ageDate.getUTCFullYear() - 1970);
    // }
}


//calculat age 
Person.prototype.calculatAge = function() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get full name
Person.prototype.getFullName = function() {
    return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMaried = function(newLastName) {
    this.lastName = newLastName;
}
const john = new Person('Mike', 'Bisset', '22/02/55');
const Andrea = new Person('Andrea', 'Bisset', '25/03/60');

console.log(Andrea);
console.log(john.calculatAge());
console.log(john.getFullName());

Andrea.getsMaried('Smith');
// Check the console for the new lastname
console.log(Andrea.getFullName());

//object prototypes examples
console.log(Andrea.hasOwnProperty('firstName'));
console.log(Andrea.hasOwnProperty('getFullName'));