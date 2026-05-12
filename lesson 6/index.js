console.log("Lesson 6: functions deep dive");

console.log("----- regular functions and arrow functions -----");

function greetUser(userName) {
  return "Hello, " + userName + "!";
}

const greetStudent = (studentName) => {
  return "Hello, " + studentName + "!";
};

console.log(greetUser("Anna"));
console.log(greetStudent("Oleh"));

console.log("----- short arrow functions -----");

const addNumbers = (firstNumber, secondNumber) => firstNumber + secondNumber;
const multiplyNumbers = (firstNumber, secondNumber) => firstNumber * secondNumber;
const getFullName = (firstName, lastName) => firstName + " " + lastName;

console.log("addNumbers(10, 5):", addNumbers(10, 5));
console.log("multiplyNumbers(6, 4):", multiplyNumbers(6, 4));
console.log("getFullName:", getFullName("Anna", "Koval"));

console.log("----- arrow functions with one parameter -----");

const doubleNumber = (number) => number * 2;
const squareNumber = (number) => number ** 2;
const isAdult = (age) => age >= 18;

console.log("doubleNumber(8):", doubleNumber(8));
console.log("squareNumber(5):", squareNumber(5));
console.log("isAdult(16):", isAdult(16));
console.log("isAdult(21):", isAdult(21));

console.log("----- arrow functions with conditions -----");

const getAccessMessage = (age) => {
  if (age >= 18) {
    return "Access allowed";
  }

  return "Access denied";
};

const getTemperatureStatus = (temperature) => {
  if (temperature > 30) {
    return "hot";
  }

  if (temperature > 20) {
    return "warm";
  }

  if (temperature > 10) {
    return "cool";
  }

  return "cold";
};

console.log("age 15:", getAccessMessage(15));
console.log("age 22:", getAccessMessage(22));
console.log("temperature 35:", getTemperatureStatus(35));
console.log("temperature 24:", getTemperatureStatus(24));
console.log("temperature 8:", getTemperatureStatus(8));

console.log("----- pure functions -----");

const calculateTotalPrice = (price, quantity) => price * quantity;
const calculateDiscount = (price, discountPercent) => price * discountPercent / 100;
const calculateFinalPrice = (price, discountPercent) => {
  const discount = calculateDiscount(price, discountPercent);
  return price - discount;
};

console.log("calculateTotalPrice(100, 3):", calculateTotalPrice(100, 3));
console.log("calculateTotalPrice(100, 3):", calculateTotalPrice(100, 3));
console.log("calculateFinalPrice(1000, 10):", calculateFinalPrice(1000, 10));
console.log("calculateFinalPrice(1000, 10):", calculateFinalPrice(1000, 10));

const createUserLabel = (userName, userRole) => userName + " (" + userRole + ")";
const isEven = (number) => number % 2 === 0;

console.log("createUserLabel:", createUserLabel("Maria", "admin"));
console.log("isEven(10):", isEven(10));
console.log("isEven(11):", isEven(11));

console.log("----- not pure functions: side effects -----");

let currentScore = 0;

const addScore = (points) => {
  currentScore = currentScore + points;
  return currentScore;
};

console.log("currentScore:", currentScore);
console.log("addScore(5):", addScore(5));
console.log("addScore(5):", addScore(5));
console.log("currentScore:", currentScore);

const showMessage = (message) => {
  console.log("Message:", message);
};

showMessage("This function writes to the console");

console.log("----- pure version instead of changing external value -----");

const getUpdatedScore = (score, points) => score + points;

const scoreAfterFirstTask = getUpdatedScore(0, 5);
const scoreAfterSecondTask = getUpdatedScore(scoreAfterFirstTask, 5);

console.log("scoreAfterFirstTask:", scoreAfterFirstTask);
console.log("scoreAfterSecondTask:", scoreAfterSecondTask);
console.log("currentScore is still:", currentScore);

console.log("----- side effects with arrays -----");

const students = ["Anna", "Oleh"];

const addStudent = (studentName) => {
  students.push(studentName);
  return students;
};

console.log("students before:", students);
console.log("addStudent:", addStudent("Maria"));
console.log("students after:", students);

console.log("----- pure function with arrays -----");

const createStudentsListWithNewStudent = (studentsList, studentName) => {
  return [...studentsList, studentName];
};

const firstGroup = ["Ivan", "Olena"];
const secondGroup = createStudentsListWithNewStudent(firstGroup, "Petro");

console.log("firstGroup:", firstGroup);
console.log("secondGroup:", secondGroup);

console.log("----- practical examples -----");

const products = [
  { name: "Laptop", price: 30000, quantity: 1 },
  { name: "Phone", price: 20000, quantity: 2 },
  { name: "Mouse", price: 800, quantity: 3 },
];

const getProductTotal = (product) => {
  return product.price * product.quantity;
};

const createProductMessage = (product) => {
  const total = getProductTotal(product);
  return product.name + ": " + product.quantity + " item(s), total " + total;
};

console.log(createProductMessage(products[0]));
console.log(createProductMessage(products[1]));
console.log(createProductMessage(products[2]));

const getGrade = (score) => {
  if (score >= 90) {
    return "A";
  }

  if (score >= 80) {
    return "B";
  }

  if (score >= 70) {
    return "C";
  }

  if (score >= 60) {
    return "D";
  }

  return "F";
};

const createGradeMessage = (studentName, score) => {
  const grade = getGrade(score);
  return studentName + " has grade " + grade;
};

console.log(createGradeMessage("Anna", 95));
console.log(createGradeMessage("Oleh", 82));
console.log(createGradeMessage("Maria", 58));

console.log("----- when side effects are okay -----");

const appStorage = {};

const saveUserName = (userName) => {
  appStorage.userName = userName;
};

const getSavedUserName = () => {
  return appStorage.userName;
};

saveUserName("Anna");
console.log("appStorage:", appStorage);
console.log("saved userName:", getSavedUserName());

console.log("----- lesson summary -----");
console.log("Arrow functions are shorter syntax for functions");
console.log("Pure functions return the same result for the same arguments");
console.log("Side effects change something outside the function");
