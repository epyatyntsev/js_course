console.log("Lesson 8: objects and data copying");

console.log("----- object basics -----");

const user = {
  name: "Anna",
  age: 22,
  city: "Kyiv",
  isStudent: true,
};

console.log("user:", user);
console.log("user name:", user.name);
console.log("user age:", user.age);
console.log("user city:", user.city);
console.log("is student:", user.isStudent);

console.log("----- changing object properties -----");

const product = {
  title: "Laptop",
  price: 30000,
  inStock: true,
};

console.log("product before:", product);

product.price = 28000;
product.inStock = false;
product.category = "tech";

console.log("product after:", product);

console.log("----- bracket notation -----");

const student = {
  firstName: "Oleh",
  lastName: "Koval",
  score: 82,
};

const propertyName = "score";

console.log("firstName:", student["firstName"]);
console.log("lastName:", student["lastName"]);
console.log("score:", student[propertyName]);

console.log("----- objects in arrays -----");

const users = [
  { name: "Anna", role: "admin", isActive: true },
  { name: "Oleh", role: "editor", isActive: true },
  { name: "Maria", role: "viewer", isActive: false },
];

console.log("users:", users);
console.log("first user:", users[0]);
console.log("first user name:", users[0].name);

const activeUsers = users.filter((user) => user.isActive);
const userNames = users.map((user) => user.name);
const adminUser = users.find((user) => user.role === "admin");

console.log("activeUsers:", activeUsers);
console.log("userNames:", userNames);
console.log("adminUser:", adminUser);

console.log("----- copying arrays -----");

const numbers = [1, 2, 3];
const copiedNumbers = [...numbers];
const extendedNumbers = [...numbers, 4, 5];
const numbersWithZero = [0, ...numbers];

console.log("numbers:", numbers);
console.log("copiedNumbers:", copiedNumbers);
console.log("extendedNumbers:", extendedNumbers);
console.log("numbersWithZero:", numbersWithZero);

copiedNumbers.push(100);

console.log("numbers after copiedNumbers push:", numbers);
console.log("copiedNumbers after push:", copiedNumbers);

console.log("----- copying objects -----");

const originalUser = {
  name: "Ivan",
  age: 25,
  city: "Lviv",
};

const copiedUser = { ...originalUser };
const updatedUser = {
  ...originalUser,
  city: "Odesa",
  isOnline: true,
};

console.log("originalUser:", originalUser);
console.log("copiedUser:", copiedUser);
console.log("updatedUser:", updatedUser);

copiedUser.name = "Petro";

console.log("originalUser after copiedUser change:", originalUser);
console.log("copiedUser after change:", copiedUser);

console.log("----- spread with function results -----");

const createUserCard = (user) => {
  return {
    ...user,
    label: user.name + " from " + user.city,
  };
};

const userCard = createUserCard(originalUser);

console.log("userCard:", userCard);

const applyDiscount = (product, discountPercent) => {
  const discount = product.price * discountPercent / 100;

  return {
    ...product,
    oldPrice: product.price,
    price: product.price - discount,
  };
};

const phone = {
  title: "Phone",
  price: 20000,
  inStock: true,
};

const discountedPhone = applyDiscount(phone, 10);

console.log("phone:", phone);
console.log("discountedPhone:", discountedPhone);

console.log("----- shallow copy -----");

const course = {
  title: "JavaScript",
  settings: {
    level: "beginner",
    duration: "2 months",
  },
};

const copiedCourse = { ...course };

copiedCourse.title = "JavaScript Basics";
copiedCourse.settings.duration = "3 months";

console.log("course:", course);
console.log("copiedCourse:", copiedCourse);
console.log("same settings object:", course.settings === copiedCourse.settings);

console.log("----- copying nested object manually -----");

const safeCourseCopy = {
  ...course,
  settings: {
    ...course.settings,
  },
};

safeCourseCopy.settings.level = "middle";

console.log("course after safe copy:", course);
console.log("safeCourseCopy:", safeCourseCopy);
console.log("same settings object after safe copy:", course.settings === safeCourseCopy.settings);

console.log("----- practical examples -----");

const cartItems = [
  { title: "Keyboard", price: 2500 },
  { title: "Mouse", price: 900 },
  { title: "Monitor", price: 12000 },
];

const cartItemsWithStatus = cartItems.map((item) => {
  return {
    ...item,
    inCart: true,
  };
});

const expensiveItems = cartItemsWithStatus.filter((item) => item.price > 2000);
const monitor = cartItemsWithStatus.find((item) => item.title === "Monitor");

console.log("cartItems:", cartItems);
console.log("cartItemsWithStatus:", cartItemsWithStatus);
console.log("expensiveItems:", expensiveItems);
console.log("monitor:", monitor);

console.log("----- lesson summary -----");
console.log("Objects store data as properties");
console.log("Spread can copy arrays and objects");
console.log("Spread creates a shallow copy");
