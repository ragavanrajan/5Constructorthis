//string 

const name1 = 'mike';
const name2 = new String('Mike');
name2.emailid = 'mike@me.com';
console.log(name1);
console.log(name2);

console.log(typeof name2);

if (name2 === 'Mike') {
    console.log('YES');
} else {
    console.log('NO');
}

//Number 
const num1 = 5;
const num2 = new Number(5);
console.log(num2);

//Boolean 
const bool1 = true;
const bool2 = new Boolean(true);
console.log(bool2);

//Functions

const getSum1 = function(x, y) {
    return x + y;
}
console.log(getSum1(1, 4));

const getSum2 = new Function('x', 'y', 'return 1 + 1');
console.log(getSum2(1, 8));

//object
const john1 = {
    name: "john"
};

const john2 = new Object({
    name: "John2"
});

console.log(john1);
console.log(john2);

//Arrays 
const arr1 = [1, 2, 3, 4, 5];
const arr2 = new Array(1, 2, 3, 45, 6);
console.log(arr2);

// Regular Expression
// look for word with one or more occurences
const re1 = /\w+/;
const re2 = new RegExp('\\w+');
console.log(re2);