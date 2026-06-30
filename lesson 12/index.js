console.log("Lesson 12: forming data representations");

console.log("----- join -----");

const fruits = ["apple", "banana", "cherry", "mango"];

console.log(fruits.join(", "));
console.log(fruits.join(" | "));

const names = ["Anna", "Oleh", "Maria"];
const lastIndex = names.length - 1;
const naturalList =
  names.slice(0, lastIndex).join(", ") + " та " + names[lastIndex];

console.log("natural list:", naturalList);

console.log("----- map to strings -----");

const prices = [100, 250, 1999, 45000];

const formattedPrices = prices.map((price) => price + " грн");
console.log(formattedPrices);

const scores = [95, 82, 67, 100, 74];

const graded = scores.map((score) => {
  if (score >= 90) return score + " (відмінно)";
  if (score >= 75) return score + " (добре)";
  return score + " (задовільно)";
});
console.log(graded);

console.log("----- template strings -----");

const user = { name: "Anna", age: 22, city: "Kyiv", role: "admin" };

const userCard = `Ім'я: ${user.name}
Вік: ${user.age}
Місто: ${user.city}
Роль: ${user.role}`;

console.log(userCard);

console.log("----- conditional representation -----");

const users = [
  { name: "Anna", role: "admin", isActive: true },
  { name: "Oleh", role: "editor", isActive: false },
  { name: "Maria", role: "viewer", isActive: true },
];

const userLines = users.map(
  (u) => `${u.isActive ? "●" : "○"} ${u.name} — ${u.role}`,
);
console.log(userLines.join("\n"));

console.log("----- nested data -----");

const order = {
  id: 1042,
  customer: "Anna",
  items: [
    { title: "Phone", price: 20000, quantity: 1 },
    { title: "Case", price: 500, quantity: 2 },
    { title: "Charger", price: 800, quantity: 1 },
  ],
};

const itemLines = order.items.map(
  (item) => `  - ${item.title}: ${item.quantity} x ${item.price} грн`,
);
const orderTotal = order.items.reduce(
  (sum, item) => sum + item.price * item.quantity,
  0,
);

console.log(`Замовлення #${order.id} (${order.customer}):
${itemLines.join("\n")}
  Разом: ${orderTotal} грн`);

console.log("----- render to HTML -----");

const tasks = [
  { title: "Вивчити масиви", completed: true },
  { title: "Зробити домашнє завдання", completed: false },
  { title: "Переглянути записи уроку", completed: true },
  { title: "Написати функції", completed: false },
];

const tasksHTML = tasks
  .map(
    (t) =>
      `<div class="task ${t.completed ? "done" : ""}">${t.completed ? "✓" : "○"} ${t.title}</div>`,
  )
  .join("");

document.getElementById("tasks").innerHTML = tasksHTML;
