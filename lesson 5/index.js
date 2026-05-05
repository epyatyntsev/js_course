console.log("Lesson 5: functions");

console.log("----- function declaration -----");

function showLessonTitle() {
  console.log("Lesson topic: functions");
}

showLessonTitle();
showLessonTitle();

function sayHello() {
  console.log("Hello!");
}

sayHello();

console.log("----- functions with parameters -----");

function greetUser(userName) {
  console.log("Hello, " + userName + "!");
}

greetUser("Anna");
greetUser("Oleh");
greetUser("Maria");

function showUserInfo(userName, userAge, userCity) {
  console.log("Name:", userName);
  console.log("Age:", userAge);
  console.log("City:", userCity);
}

showUserInfo("Ivan", 18, "Kyiv");
showUserInfo("Olena", 21, "Lviv");

console.log("----- return value -----");

function addNumbers(firstNumber, secondNumber) {
  return firstNumber + secondNumber;
}

const sum = addNumbers(10, 5);
console.log("sum:", sum);
console.log("addNumbers(7, 3):", addNumbers(7, 3));

function multiplyNumbers(firstNumber, secondNumber) {
  return firstNumber * secondNumber;
}

const result = multiplyNumbers(6, 4);
console.log("result:", result);

function getFullName(firstName, lastName) {
  return firstName + " " + lastName;
}

const fullName = getFullName("Anna", "Koval");
console.log("fullName:", fullName);

console.log("----- return and conditions -----");

function canEnterClub(age) {
  if (age >= 18) {
    return "Access allowed";
  }

  return "Access denied";
}

console.log("age 16:", canEnterClub(16));
console.log("age 18:", canEnterClub(18));
console.log("age 25:", canEnterClub(25));

function getTemperatureMessage(temperature) {
  if (temperature > 30) {
    return "It is hot";
  }

  if (temperature > 20) {
    return "It is warm";
  }

  if (temperature > 10) {
    return "It is cool";
  }

  return "It is cold";
}

console.log("temperature 35:", getTemperatureMessage(35));
console.log("temperature 24:", getTemperatureMessage(24));
console.log("temperature 12:", getTemperatureMessage(12));
console.log("temperature 5:", getTemperatureMessage(5));

console.log("----- practical examples -----");

function calculateTotalPrice(price, quantity) {
  return price * quantity;
}

const applesTotalPrice = calculateTotalPrice(15, 4);
const orangesTotalPrice = calculateTotalPrice(20, 3);

console.log("applesTotalPrice:", applesTotalPrice);
console.log("orangesTotalPrice:", orangesTotalPrice);

function calculateDiscountedPrice(price, discountPercent) {
  const discount = price * discountPercent / 100;
  return price - discount;
}

console.log("price with 10% discount:", calculateDiscountedPrice(1000, 10));
console.log("price with 25% discount:", calculateDiscountedPrice(800, 25));

function convertMinutesToSeconds(minutes) {
  return minutes * 60;
}

console.log("5 minutes in seconds:", convertMinutesToSeconds(5));
console.log("12 minutes in seconds:", convertMinutesToSeconds(12));

function isEven(number) {
  return number % 2 === 0;
}

console.log("isEven(8):", isEven(8));
console.log("isEven(9):", isEven(9));

function getGrade(score) {
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
}

console.log("score 95:", getGrade(95));
console.log("score 82:", getGrade(82));
console.log("score 73:", getGrade(73));
console.log("score 45:", getGrade(45));

console.log("----- using functions together -----");

function createOrderMessage(customerName, price, quantity) {
  const totalPrice = calculateTotalPrice(price, quantity);
  return customerName + " ordered " + quantity + " items. Total price: " + totalPrice;
}

const firstOrderMessage = createOrderMessage("Anna", 120, 2);
const secondOrderMessage = createOrderMessage("Oleh", 75, 5);

console.log(firstOrderMessage);
console.log(secondOrderMessage);

function showFinalPrice(productName, price, discountPercent) {
  const finalPrice = calculateDiscountedPrice(price, discountPercent);

  console.log("Product:", productName);
  console.log("Price:", price);
  console.log("Discount:", discountPercent + "%");
  console.log("Final price:", finalPrice);
}

showFinalPrice("Laptop", 30000, 15);
showFinalPrice("Phone", 20000, 10);

console.log("----- functions help reuse code -----");

greetUser("Student 1");
greetUser("Student 2");
greetUser("Student 3");

console.log("10 + 20:", addNumbers(10, 20));
console.log("100 + 250:", addNumbers(100, 250));
console.log("3 * 9:", multiplyNumbers(3, 9));
console.log("7 * 8:", multiplyNumbers(7, 8));
