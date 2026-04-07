console.log("Lesson 2: variables and data types");

console.log("----- let -----");
let userName = "Anna";
console.log("userName:", userName);

userName = "Oleh";
console.log("new userName:", userName);

let userAge = 16;
console.log("userAge:", userAge);

userAge = 17;
console.log("new userAge:", userAge);

console.log("----- const -----");
const birthYear = 2005;
console.log("birthYear:", birthYear);

const country = "Ukraine";
console.log("country:", country);

console.log("----- primitive types -----");
const message = "Hello";
const age = 18;
const isStudent = true;
const emptyValue = null;
let city;
const bigNumber = 12345678901234567890n;
const uniqueId = Symbol("id");

console.log("message:", message);
console.log("age:", age);
console.log("isStudent:", isStudent);
console.log("emptyValue:", emptyValue);
console.log("city:", city);
console.log("bigNumber:", bigNumber);
console.log("uniqueId:", uniqueId);

console.log("----- typeof -----");
console.log("typeof message:", typeof message);
console.log("typeof age:", typeof age);
console.log("typeof isStudent:", typeof isStudent);
console.log("typeof emptyValue:", typeof emptyValue);
console.log("typeof city:", typeof city);
console.log("typeof bigNumber:", typeof bigNumber);
console.log("typeof uniqueId:", typeof uniqueId);

console.log("----- string examples -----");
const firstName = "Olena";
const lastName = "Koval";
const fullName = firstName + " " + lastName;

console.log("firstName:", firstName);
console.log("lastName:", lastName);
console.log("fullName:", fullName);
console.log("typeof fullName:", typeof fullName);

console.log("----- boolean examples -----");
const isOnline = true;
const isAdmin = false;

console.log("isOnline:", isOnline);
console.log("isAdmin:", isAdmin);
console.log("typeof isOnline:", typeof isOnline);
console.log("typeof isAdmin:", typeof isAdmin);

console.log("----- undefined and null -----");
let phoneNumber;
const selectedColor = null;

console.log("phoneNumber:", phoneNumber);
console.log("selectedColor:", selectedColor);
console.log("typeof phoneNumber:", typeof phoneNumber);
console.log("typeof selectedColor:", typeof selectedColor);

console.log("----- reassignment -----");
let score = 5;
console.log("score:", score);

score = 8;
console.log("new score:", score);

score = 10;
console.log("final score:", score);
