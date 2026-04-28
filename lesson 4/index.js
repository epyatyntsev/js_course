console.log("Lesson 4: conditional statements");

console.log("----- if / else -----");
const age = 17;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult yet");
}

const temperature = 24;

if (temperature > 30) {
  console.log("It's very hot");
} else if (temperature > 20) {
  console.log("The weather is warm");
} else {
  console.log("The weather is cool");
}

console.log("----- switch -----");
const day = "monday";

switch (day) {
  case "monday":
    console.log("Start of the week");
    break;
  case "tuesday":
    console.log("Second day");
    break;
  case "wednesday":
    console.log("Midweek");
    break;
  case "thursday":
    console.log("Almost Friday");
    break;
  case "friday":
    console.log("Last working day");
    break;
  default:
    console.log("Weekend or unknown day");
}

const role = "admin";

switch (role) {
  case "admin":
    console.log("Full access");
    break;
  case "editor":
    console.log("Can edit content");
    break;
  case "viewer":
    console.log("Read only access");
    break;
  default:
    console.log("Unknown role");
}

console.log("----- truthy / falsy -----");
const emptyText = "";
const filledText = "Hello";
const zero = 0;
const positiveNumber = 3;
const emptyValue = null;
const notDefinedValue = undefined;

console.log("Boolean(emptyText):", Boolean(emptyText));
console.log("Boolean(filledText):", Boolean(filledText));
console.log("Boolean(zero):", Boolean(zero));
console.log("Boolean(positiveNumber):", Boolean(positiveNumber));
console.log("Boolean(emptyValue):", Boolean(emptyValue));
console.log("Boolean(notDefinedValue):", Boolean(notDefinedValue));

if (emptyText) {
  console.log("emptyText is truthy");
} else {
  console.log("emptyText is falsy");
}

if (filledText) {
  console.log("filledText is truthy");
} else {
  console.log("filledText is falsy");
}

if (zero) {
  console.log("zero is truthy");
} else {
  console.log("zero is falsy");
}

if (positiveNumber) {
  console.log("positiveNumber is truthy");
} else {
  console.log("positiveNumber is falsy");
}

console.log("----- practical examples -----");
const hasAccess = true;
const isBanned = false;

if (hasAccess && !isBanned) {
  console.log("Access granted");
} else {
  console.log("Access denied");
}

const score = 82;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  case score >= 70:
    grade = "C";
    break;
  case score >= 60:
    grade = "D";
    break;
  default:
    grade = "F";
}

console.log("score:", score);
console.log("grade:", grade);
