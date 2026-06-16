console.log("Lesson 9: destructuring");

console.log("----- object destructuring -----");

const user = {
  name: "Anna",
  age: 22,
  city: "Kyiv",
  role: "admin",
};

const { name, age, city } = user;

console.log("user:", user);
console.log("name:", name);
console.log("age:", age);
console.log("city:", city);

console.log("----- object destructuring with new variable names -----");

const product = {
  title: "Laptop",
  price: 30000,
  inStock: true,
};

const { title: productTitle, price: productPrice } = product;

console.log("product:", product);
console.log("productTitle:", productTitle);
console.log("productPrice:", productPrice);

console.log("----- default values -----");

const student = {
  firstName: "Oleh",
  score: 82,
};

const { firstName, score, group = "No group" } = student;

console.log("firstName:", firstName);
console.log("score:", score);
console.log("group:", group);

console.log("----- rest in object destructuring -----");

const course = {
  title: "JavaScript",
  level: "beginner",
  duration: "2 months",
  studentsCount: 12,
};

const { title, ...courseDetails } = course;

console.log("title:", title);
console.log("courseDetails:", courseDetails);

console.log("----- nested object destructuring -----");

const order = {
  id: 101,
  customer: {
    customerName: "Maria",
    email: "maria@example.com",
  },
  total: 2500,
};

const {
  id,
  customer: { customerName, email },
  total,
} = order;

console.log("id:", id);
console.log("customerName:", customerName);
console.log("email:", email);
console.log("total:", total);

console.log("----- destructuring in function parameters -----");

const showUserInfo = ({ name, age, role }) => {
  console.log("Name:", name);
  console.log("Age:", age);
  console.log("Role:", role);
};

showUserInfo(user);

const createProductMessage = ({ title, price, inStock }) => {
  const stockMessage = inStock ? "available" : "not available";
  return title + " costs " + price + " and is " + stockMessage;
};

console.log(createProductMessage(product));

console.log("----- array destructuring -----");

const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log("colors:", colors);
console.log("firstColor:", firstColor);
console.log("secondColor:", secondColor);
console.log("thirdColor:", thirdColor);

console.log("----- skipping array elements -----");

const numbers = [10, 20, 30, 40, 50];

const [firstNumber, , thirdNumber] = numbers;

console.log("numbers:", numbers);
console.log("firstNumber:", firstNumber);
console.log("thirdNumber:", thirdNumber);

console.log("----- default values in array destructuring -----");

const scores = [95, 82];

const [firstScore, secondScore, thirdScore = 0] = scores;

console.log("firstScore:", firstScore);
console.log("secondScore:", secondScore);
console.log("thirdScore:", thirdScore);

console.log("----- rest in array destructuring -----");

const students = ["Anna", "Oleh", "Maria", "Ivan"];

const [mainStudent, ...otherStudents] = students;

console.log("mainStudent:", mainStudent);
console.log("otherStudents:", otherStudents);

console.log("----- swapping variables -----");

let left = "left value";
let right = "right value";

console.log("before swap:", left, right);

[left, right] = [right, left];

console.log("after swap:", left, right);

console.log("----- destructuring with array methods -----");

const users = [
  { name: "Anna", role: "admin", isActive: true },
  { name: "Oleh", role: "editor", isActive: true },
  { name: "Maria", role: "viewer", isActive: false },
];

const userLabels = users.map(({ name, role }) => name + " (" + role + ")");
const activeUserNames = users
  .filter(({ isActive }) => isActive)
  .map(({ name }) => name);
const adminUser = users.find(({ role }) => role === "admin");

console.log("userLabels:", userLabels);
console.log("activeUserNames:", activeUserNames);
console.log("adminUser:", adminUser);

console.log("----- practical examples -----");

const settings = {
  theme: "dark",
  language: "uk",
  notifications: true,
};

const createSettingsMessage = ({ theme, language, notifications }) => {
  return "Theme: " + theme + ", language: " + language + ", notifications: " + notifications;
};

console.log(createSettingsMessage(settings));

const getFirstAndLast = (items) => {
  const [firstItem, ...restItems] = items;
  const lastItem = restItems[restItems.length - 1];

  return "First: " + firstItem + ", last: " + lastItem;
};

console.log(getFirstAndLast(["HTML", "CSS", "JavaScript", "React"]));

console.log("----- lesson summary -----");
console.log("Object destructuring takes values by property names");
console.log("Array destructuring takes values by positions");
console.log("Default values and rest syntax make destructuring more flexible");
