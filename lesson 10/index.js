console.log("Lesson 10: execution context (this)");

console.log("----- this in global context -----");

function showThis() {
  console.log("this in regular function:", this);
}

showThis();

console.log("----- this in object methods -----");

const user = {
  name: "Anna",
  age: 22,
  greet() {
    console.log("Hello, my name is " + this.name);
  },
  getInfo() {
    return this.name + ", " + this.age + " years old";
  },
};

user.greet();
console.log(user.getInfo());

const product = {
  title: "Phone",
  price: 20000,
  discount: 0.1,
  getFinalPrice() {
    return this.price - this.price * this.discount;
  },
  describe() {
    return this.title + " costs " + this.getFinalPrice() + " UAH";
  },
};

console.log(product.getFinalPrice());
console.log(product.describe());

console.log("----- losing this context -----");

const car = {
  brand: "Toyota",
  getBrand() {
    console.log(this.brand);
  },
};

car.getBrand();

const getBrand = car.getBrand;
getBrand();

console.log("----- call and apply -----");

const admin = {
  name: "Eugene",
  role: "admin",
};

const editor = {
  name: "Maria",
  role: "editor",
};

function introduce(greeting, punctuation) {
  console.log(greeting + ", I am " + this.name + " (" + this.role + ")" + punctuation);
}

introduce.call(admin, "Hello", "!");
introduce.call(editor, "Hi", ".");

introduce.apply(admin, ["Hello", "!"]);
introduce.apply(editor, ["Hi", "."]);

console.log("----- bind -----");

const timer = {
  label: "Timer A",
  start() {
    console.log(this.label + " started");
  },
};

const boundStart = timer.start.bind(timer);
boundStart();

function greetUser(greeting) {
  return greeting + ", " + this.name + "!";
}

const greetAnna = greetUser.bind({ name: "Anna" });
const greetOleh = greetUser.bind({ name: "Oleh" });

console.log(greetAnna("Hello"));
console.log(greetOleh("Hi"));

console.log("----- arrow functions and this -----");

const counter = {
  count: 0,
  increment() {
    const add = () => {
      this.count += 1;
      console.log("count:", this.count);
    };
    add();
  },
};

counter.increment();
counter.increment();
counter.increment();

const team = {
  name: "Dev Team",
  members: ["Anna", "Oleh", "Maria"],
  printMembers() {
    this.members.forEach((member) => {
      console.log(this.name + ": " + member);
    });
  },
};

team.printMembers();

console.log("----- regular function vs arrow in object -----");

const obj = {
  value: 42,
  getValueRegular: function () {
    return this.value;
  },
  getValueArrow: () => {
    return this.value;
  },
};

console.log("regular:", obj.getValueRegular());
console.log("arrow:", obj.getValueArrow());

console.log("----- practical example -----");

const userService = {
  users: [
    { name: "Anna", isActive: true },
    { name: "Oleh", isActive: false },
    { name: "Maria", isActive: true },
  ],
  prefix: "User",
  getActiveLabels() {
    return this.users
      .filter((user) => user.isActive)
      .map((user) => this.prefix + ": " + user.name);
  },
};

console.log(userService.getActiveLabels());
