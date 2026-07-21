console.log("Lesson 14: immutability");

console.log("----- mutation problem -----");

const original = { name: "Іван", age: 25 };
const ref = original;
ref.age = 30;
console.log("original.age:", original.age); // 30 — змінився через посилання!

const a = [1, 2, 3];
const b = a;
b.push(4);
console.log("a:", a); // [1, 2, 3, 4] — масив теж змінився

console.log("----- immutable object update -----");

const user = { name: "Іван", city: "Київ", age: 25 };

const olderUser = { ...user, age: 26 };
console.log("user:", user);
console.log("olderUser:", olderUser);
console.log("same object?", user === olderUser); // false

const withRole = { ...user, role: "admin" };
console.log("withRole:", withRole);
console.log("original still no role:", "role" in user); // false

console.log("----- immutable array update -----");

const fruits = ["яблуко", "банан", "вишня"];

const withMango = [...fruits, "манго"];
console.log("original:", fruits);
console.log("withMango:", withMango);

const withoutBanana = fruits.filter((item) => item !== "банан");
console.log("withoutBanana:", withoutBanana);

const withPeach = [...fruits.slice(0, 1), "персик", ...fruits.slice(1)];
console.log("withPeach at index 1:", withPeach);

console.log("----- immutable task update -----");

const tasks = [
  { id: 1, title: "Купити молоко", done: false },
  { id: 2, title: "Зателефонувати лікарю", done: false },
  { id: 3, title: "Прочитати книгу", done: false },
];

const completed = tasks.map((task) =>
  task.id === 2 ? { ...task, done: true } : task
);
console.log("original task 2 done:", tasks[1].done); // false
console.log("completed task 2 done:", completed[1].done); // true

const withoutFirst = tasks.filter((task) => task.id !== 1);
console.log("tasks count:", tasks.length); // 3
console.log("withoutFirst count:", withoutFirst.length); // 2

console.log("----- state with history -----");

const profileState = {
  current: { name: "Іван", city: "Київ" },
  history: [],
};

function renderProfile() {
  const display = document.getElementById("profile-display");
  const historyList = document.getElementById("history-list");
  const btnUndo = document.getElementById("btn-undo");
  const inputName = document.getElementById("input-name");
  const inputCity = document.getElementById("input-city");

  display.innerHTML = `Поточний профіль: <span>${profileState.current.name}</span>, <span>${profileState.current.city}</span>`;

  inputName.value = profileState.current.name;
  inputCity.value = profileState.current.city;

  if (profileState.history.length === 0) {
    historyList.innerHTML = `<div class="empty-state">Змін ще не було.</div>`;
  } else {
    historyList.innerHTML = profileState.history
      .slice()
      .reverse()
      .map((snap, i) => `<div class="history-item">${snap.name}, ${snap.city}</div>`)
      .join("");
  }

  btnUndo.disabled = profileState.history.length === 0;
}

document.getElementById("btn-save").addEventListener("click", function () {
  const name = document.getElementById("input-name").value.trim();
  const city = document.getElementById("input-city").value.trim();

  if (!name || !city) return;

  profileState.history = [...profileState.history, profileState.current];
  profileState.current = { name, city };

  renderProfile();
  console.log("saved:", profileState.current);
  console.log("history length:", profileState.history.length);
});

document.getElementById("btn-undo").addEventListener("click", function () {
  const previous = profileState.history[profileState.history.length - 1];
  profileState.current = previous;
  profileState.history = profileState.history.slice(0, -1);

  renderProfile();
  console.log("undo to:", profileState.current);
});

renderProfile();
