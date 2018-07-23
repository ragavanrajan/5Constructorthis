// Person constructor
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;

}

Person.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName}`;

}

const person1 = new Person('John', 'Doe');
console.log(person1.greeting);

// customer constructor 
function Customer(firstName, lastName, phone, membership) {
    //call is a function that allow us to call another fn from somewhere else in the current context 
    Person.call(this, firstName, lastName);
    this.phone = phone;
    this.membership = membership;
}

//Inherit the person prototype methods
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Create customer 
const customer1 = new Customer('Tom', 'Cruise', '0228980668', 'standard');
console.log(customer1);
console.log(customer1.greeting());

// Customer greeting
Customer.prototype.greeting = function() {
    return `Hello there ${this.firstName} ${this.lastName} welcome to our company`;
}

console.log(customer1.greeting());