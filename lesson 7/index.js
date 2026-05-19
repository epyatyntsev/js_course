console.log("Lesson 7: arrays and array methods");

console.log("----- arrays basics -----");

const students = ["Anna", "Oleh", "Maria", "Ivan"];
const scores = [95, 82, 58, 74, 100];
const mixedValues = ["Hello", 25, true, null];

console.log("students:", students);
console.log("scores:", scores);
console.log("mixedValues:", mixedValues);
console.log("students length:", students.length);
console.log("first student:", students[0]);
console.log("second student:", students[1]);
console.log("last student:", students[students.length - 1]);

console.log("----- changing arrays -----");

const fruits = ["apple", "banana"];

console.log("fruits before:", fruits);

fruits.push("orange");
console.log("after push:", fruits);

fruits.pop();
console.log("after pop:", fruits);

fruits.unshift("kiwi");
console.log("after unshift:", fruits);

fruits.shift();
console.log("after shift:", fruits);

console.log("----- includes -----");

const availableRoles = ["admin", "editor", "viewer"];
const currentRole = "editor";
const unknownRole = "guest";

console.log("availableRoles:", availableRoles);
console.log("includes editor:", availableRoles.includes(currentRole));
console.log("includes guest:", availableRoles.includes(unknownRole));

const blockedUsers = ["user-1", "user-4", "user-9"];
const userId = "user-4";

if (blockedUsers.includes(userId)) {
  console.log("User is blocked");
} else {
  console.log("User is active");
}

const allowedStatuses = ["new", "paid", "shipped"];
const orderStatus = "paid";

console.log("allowedStatuses:", allowedStatuses);
console.log("can process order:", allowedStatuses.includes(orderStatus));

console.log("----- map -----");

const numbers = [1, 2, 3, 4, 5];

const doubledNumbers = numbers.map((number) => number * 2);
const squaredNumbers = numbers.map((number) => number ** 2);
const numberMessages = numbers.map((number) => "Number: " + number);

console.log("numbers:", numbers);
console.log("doubledNumbers:", doubledNumbers);
console.log("squaredNumbers:", squaredNumbers);
console.log("numberMessages:", numberMessages);

const userNames = ["anna", "oleh", "maria"];

const capitalizedNames = userNames.map((name) => {
  const firstLetter = name[0].toUpperCase();
  const otherLetters = name.slice(1);

  return firstLetter + otherLetters;
});

const greetingMessages = capitalizedNames.map((name) => "Hello, " + name + "!");

console.log("userNames:", userNames);
console.log("capitalizedNames:", capitalizedNames);
console.log("greetingMessages:", greetingMessages);

console.log("----- filter -----");

const highScores = scores.filter((score) => score >= 80);
const lowScores = scores.filter((score) => score < 60);
const evenNumbers = numbers.filter((number) => number % 2 === 0);
const oddNumbers = numbers.filter((number) => number % 2 !== 0);

console.log("scores:", scores);
console.log("highScores:", highScores);
console.log("lowScores:", lowScores);
console.log("evenNumbers:", evenNumbers);
console.log("oddNumbers:", oddNumbers);

const prices = [30000, 20000, 7000, 3000, 2500];

const expensivePrices = prices.filter((price) => price > 10000);
const cheapPrices = prices.filter((price) => price < 5000);
const pricesWithDiscount = prices.map((price) => price - price * 0.1);

console.log("prices:", prices);
console.log("expensivePrices:", expensivePrices);
console.log("cheapPrices:", cheapPrices);
console.log("pricesWithDiscount:", pricesWithDiscount);

console.log("----- find -----");

const foundStudent = students.find((student) => student === "Maria");
const missingStudent = students.find((student) => student === "Petro");

console.log("foundStudent:", foundStudent);
console.log("missingStudent:", missingStudent);

const firstHighScore = scores.find((score) => score >= 90);
const firstLowScore = scores.find((score) => score < 60);
const firstCheapPrice = prices.find((price) => price < 5000);
const firstVeryExpensivePrice = prices.find((price) => price > 50000);

console.log("firstHighScore:", firstHighScore);
console.log("firstLowScore:", firstLowScore);
console.log("firstCheapPrice:", firstCheapPrice);
console.log("firstVeryExpensivePrice:", firstVeryExpensivePrice);

console.log("----- filter and map together -----");

const highScoreMessages = scores
  .filter((score) => score >= 80)
  .map((score) => "High score: " + score);

const cheapPriceMessages = prices
  .filter((price) => price < 10000)
  .map((price) => "Cheap price: " + price + " UAH");

const activeUserNames = ["Anna", "Oleh", "Ivan"];
const activeUserMessages = activeUserNames.map((name) => name + " is active");

console.log("highScoreMessages:", highScoreMessages);
console.log("cheapPriceMessages:", cheapPriceMessages);
console.log("activeUserMessages:", activeUserMessages);

console.log("----- practical task examples -----");

const orderStatuses = ["new", "paid", "paid", "canceled", "shipped"];

const paidStatuses = orderStatuses.filter((status) => status === "paid");
const statusMessages = orderStatuses.map((status) => "Order status: " + status);
const firstPaidStatus = orderStatuses.find((status) => status === "paid");
const hasCanceledOrder = orderStatuses.includes("canceled");

console.log("orderStatuses:", orderStatuses);
console.log("paidStatuses:", paidStatuses);
console.log("statusMessages:", statusMessages);
console.log("firstPaidStatus:", firstPaidStatus);
console.log("hasCanceledOrder:", hasCanceledOrder);

const lessonTopics = ["variables", "operators", "conditions", "functions", "arrays"];

const longTopics = lessonTopics.filter((topic) => topic.length > 8);
const topicTitles = lessonTopics.map((topic) => topic.toUpperCase());
const functionsTopic = lessonTopics.find((topic) => topic === "functions");
const hasArraysTopic = lessonTopics.includes("arrays");

console.log("lessonTopics:", lessonTopics);
console.log("longTopics:", longTopics);
console.log("topicTitles:", topicTitles);
console.log("functionsTopic:", functionsTopic);
console.log("hasArraysTopic:", hasArraysTopic);

console.log("----- original arrays are still available -----");

console.log("students:", students);
console.log("scores:", scores);
console.log("numbers:", numbers);
console.log("prices:", prices);
console.log("orderStatuses:", orderStatuses);
