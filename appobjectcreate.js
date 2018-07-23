const personPrototypes = {
    greeting: function() {
        return `Hello there ${this.firstName} ${this.lastName}`;
    },
    getsMarried: function(newLastName) {
        this.lastName = newLastName;

    }
}

const mary = Object.create(personPrototypes);
mary.firstName = 'Mary';
mary.lastName = 'Williams';
mary.age = 30;
console.log(mary);
mary.getsMarried('Bisset');
console.log(mary.greeting());

const ragavan = Object.create(personPrototypes, {
    firstName: {
        value: 'Ragavan'
    },
    lastName: {
        value: 'Rajan'
    },
    age: {
        value: '30'
    }
});
console.log(ragavan);
console.log(ragavan.greeting());