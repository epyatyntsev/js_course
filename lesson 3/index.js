console.log("Lesson 3: operators");

console.log("----- arithmetic operators -----");
const a = 10;
const b = 5;
const c = 3;

console.log("a:", a);
console.log("b:", b);
console.log("c:", c);
console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a % c =", a % c);
console.log("b ** c =", b ** c);

console.log("----- arithmetic with variables -----");
const price = 200;
const discount = 50;
const finalPrice = price - discount;

console.log("price:", price);
console.log("discount:", discount);
console.log("finalPrice:", finalPrice);

const apples = 8;
const friends = 3;

console.log("apples:", apples);
console.log("friends:", friends);
console.log("apples / friends =", apples / friends);
console.log("apples % friends =", apples % friends);

console.log("----- increment and decrement -----");
let count = 1;
console.log("start count:", count);

count++;
console.log("after count++:", count);

count++;
console.log("after second count++:", count);

count--;
console.log("after count--:", count);

console.log("----- comparison operators -----");
console.log("10 > 5:", 10 > 5);
console.log("10 < 5:", 10 < 5);
console.log("10 >= 10:", 10 >= 10);
console.log("8 <= 5:", 8 <= 5);
console.log("7 == '7':", 7 == "7");
console.log("7 === '7':", 7 === "7");
console.log("7 != '7':", 7 != "7");
console.log("7 !== '7':", 7 !== "7");

console.log("----- comparison with variables -----");
const userAge = 16;
const minAge = 18;
const score = 90;

console.log("userAge:", userAge);
console.log("minAge:", minAge);
console.log("userAge >= minAge:", userAge >= minAge);
console.log("score > 75:", score > 75);
console.log("score === 90:", score === 90);

console.log("----- logical operators -----");
const isStudent = true;
const hasHomework = false;

console.log("isStudent && hasHomework:", isStudent && hasHomework);
console.log("isStudent || hasHomework:", isStudent || hasHomework);
console.log("!isStudent:", !isStudent);
console.log("!hasHomework:", !hasHomework);

console.log("----- logical operators with conditions -----");
const hasTicket = true;
const hasPassport = true;
const hasMoney = false;

console.log("hasTicket && hasPassport:", hasTicket && hasPassport);
console.log("hasTicket && hasMoney:", hasTicket && hasMoney);
console.log("hasPassport || hasMoney:", hasPassport || hasMoney);
console.log("!hasMoney:", !hasMoney);

console.log("----- combined examples -----");
const age = 18;
const hasPermission = true;
const isOnline = false;

console.log("age >= 18:", age >= 18);
console.log("age >= 18 && hasPermission:", age >= 18 && hasPermission);
console.log("age < 18 || hasPermission:", age < 18 || hasPermission);
console.log("hasPermission && isOnline:", hasPermission && isOnline);
console.log("hasPermission || isOnline:", hasPermission || isOnline);

console.log("----- real examples -----");
const temperature = 22;
const isWarm = temperature > 20;
const isCold = temperature < 10;

console.log("temperature:", temperature);
console.log("isWarm:", isWarm);
console.log("isCold:", isCold);
console.log("isWarm && !isCold:", isWarm && !isCold);
