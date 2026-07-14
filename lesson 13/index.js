console.log("Lesson 13: events and state");

console.log("----- click event -----");

document.addEventListener("click", function (event) {
  console.log("clicked:", event.target.tagName);
});

console.log("----- counter -----");

const counterState = {
  value: 0,
  min: -10,
  max: 10,
};

function renderCounter() {
  const display = document.getElementById("counter-display");
  const btnDec = document.getElementById("btn-decrement");
  const btnInc = document.getElementById("btn-increment");

  display.textContent = counterState.value;
  display.style.color =
    counterState.value > 0
      ? "#48bb78"
      : counterState.value < 0
        ? "#fc8181"
        : "#2d3748";

  btnDec.disabled = counterState.value <= counterState.min;
  btnInc.disabled = counterState.value >= counterState.max;
}

document.getElementById("btn-increment").addEventListener("click", function () {
  counterState.value += 1;
  renderCounter();
  console.log("state:", counterState.value);
});

document.getElementById("btn-decrement").addEventListener("click", function () {
  counterState.value -= 1;
  renderCounter();
  console.log("state:", counterState.value);
});

document.getElementById("btn-reset").addEventListener("click", function () {
  counterState.value = 0;
  renderCounter();
  console.log("reset");
});

renderCounter();

console.log("----- live preview -----");

const MAX_CHARS = 150;

document
  .getElementById("bio-input")
  .addEventListener("input", function (event) {
    const value = event.target.value;
    const count = value.length;
    const remaining = MAX_CHARS - count;

    const info = document.getElementById("char-info");
    info.textContent = `${count} / ${MAX_CHARS}`;
    info.className = remaining <= 20 ? "char-info warn" : "char-info";

    console.log("chars typed:", count);
  });

console.log("----- todo list -----");

const todoState = {
  items: [],
  nextId: 1,
};

function renderTodo() {
  const list = document.getElementById("todo-list");
  const stats = document.getElementById("todo-stats");

  if (todoState.items.length === 0) {
    list.innerHTML = `<div class="empty-state">Список порожній. Додайте першу задачу.</div>`;
    stats.textContent = "";
    return;
  }

  list.innerHTML = todoState.items
    .map(
      (item) => `<div class="todo-item ${item.done ? "done" : ""}">
        <span data-id="${item.id}">${item.title}</span>
        <button class="todo-delete" data-id="${item.id}">×</button>
      </div>`,
    )
    .join("");

  const doneCount = todoState.items.filter((i) => i.done).length;
  stats.textContent = `Виконано: ${doneCount} з ${todoState.items.length}`;

  list.querySelectorAll("span[data-id]").forEach((span) => {
    span.addEventListener("click", function () {
      const id = Number(this.dataset.id);
      const item = todoState.items.find((i) => i.id === id);
      item.done = !item.done;
      renderTodo();
      console.log("toggled:", item.title, "→", item.done);
    });
  });

  list.querySelectorAll(".todo-delete").forEach((btn) => {
    btn.addEventListener("click", function () {
      const id = Number(this.dataset.id);
      const item = todoState.items.find((i) => i.id === id);
      todoState.items = todoState.items.filter((i) => i.id !== id);
      renderTodo();
      console.log("deleted:", item.title);
    });
  });
}

function addTodo() {
  const input = document.getElementById("todo-input");
  const title = input.value.trim();

  if (title === "") return;

  todoState.items.push({ id: todoState.nextId, title, done: false });
  todoState.nextId += 1;
  input.value = "";
  renderTodo();
  console.log("added:", title, "| total:", todoState.items.length);
}

document.getElementById("btn-add").addEventListener("click", addTodo);

document
  .getElementById("todo-input")
  .addEventListener("keydown", function (event) {
    if (event.key === "Enter") addTodo();
  });

renderTodo();
