console.log("Lesson 11: state");

console.log("----- state as variables -----");

let isLoggedIn = false;
let userName = "";
let cartCount = 0;

console.log("isLoggedIn:", isLoggedIn);
console.log("userName:", userName);
console.log("cartCount:", cartCount);

isLoggedIn = true;
userName = "Anna";
cartCount = 2;

console.log("isLoggedIn:", isLoggedIn);
console.log("userName:", userName);
console.log("cartCount:", cartCount);

isLoggedIn = false;
userName = "";
cartCount = 0;

console.log("after logout — isLoggedIn:", isLoggedIn);

console.log("----- state as object -----");

const appState = {
  isLoggedIn: false,
  userName: "",
  role: "guest",
  cartCount: 0,
};

console.log("initial state:", appState);

appState.isLoggedIn = true;
appState.userName = "Anna";
appState.role = "admin";
appState.cartCount = 3;

console.log("after login:", appState);

console.log("----- ui state -----");

const uiState = {
  isMenuOpen: false,
  activeTab: "home",
  isLoading: false,
  modalType: null,
};

console.log("initial ui state:", uiState);

uiState.isMenuOpen = true;
console.log("menu opened:", uiState.isMenuOpen);

uiState.activeTab = "profile";
console.log("active tab changed:", uiState.activeTab);

uiState.isLoading = true;
console.log("loading started:", uiState.isLoading);

uiState.isLoading = false;
console.log("loading finished:", uiState.isLoading);

uiState.modalType = "confirm-delete";
console.log("modal opened:", uiState.modalType);

uiState.modalType = null;
console.log("modal closed:", uiState.modalType);

console.log("----- state changed through functions -----");

let count = 0;

function increment() {
  count = count + 1;
  console.log("count:", count);
}

function decrement() {
  count = count - 1;
  console.log("count:", count);
}

function incrementBy(value) {
  count = count + value;
  console.log("count:", count);
}

function reset() {
  count = 0;
  console.log("count:", count);
}

increment();
increment();
increment();
decrement();
incrementBy(5);
reset();
increment();

console.log("----- multiple state objects -----");

const userState = {
  isLoggedIn: false,
  name: "",
  role: "guest",
};

const cartState = {
  items: [],
  couponCode: "",
};

function login(name, role) {
  userState.isLoggedIn = true;
  userState.name = name;
  userState.role = role;
  console.log("user state:", userState);
}

function logout() {
  userState.isLoggedIn = false;
  userState.name = "";
  userState.role = "guest";
  console.log("user state:", userState);
}

function addItem(item) {
  cartState.items.push(item);
  console.log("cart items:", cartState.items.length);
}

function applyCoupon(code) {
  cartState.couponCode = code;
  console.log("coupon applied:", cartState.couponCode);
}

login("Oleh", "editor");
addItem({ title: "Phone", price: 20000, quantity: 1 });
addItem({ title: "Case", price: 500, quantity: 2 });
applyCoupon("SUMMER10");
logout();

console.log("----- form state -----");

const formState = {
  name: "",
  email: "",
  password: "",
  isValid: false,
};

function updateField(field, value) {
  formState[field] = value;
  formState.isValid =
    formState.name.length >= 2 &&
    formState.email.includes("@") &&
    formState.password.length >= 6;
  console.log("form state:", formState);
}

updateField("name", "A");
updateField("name", "Anna");
updateField("email", "anna");
updateField("email", "anna@example.com");
updateField("password", "123");
updateField("password", "secret123");

console.log("----- derived state -----");

const shopCart = {
  items: [
    { title: "Phone", price: 20000, quantity: 1 },
    { title: "Case", price: 500, quantity: 2 },
    { title: "Charger", price: 800, quantity: 1 },
    { title: "Cable", price: 300, quantity: 3 },
  ],
};

const totalQuantity = shopCart.items.reduce((sum, item) => sum + item.quantity, 0);
const totalPrice = shopCart.items.reduce((sum, item) => sum + item.price * item.quantity, 0);
const mostExpensive = shopCart.items.reduce((max, item) => item.price > max.price ? item : max);
const hasItems = shopCart.items.length > 0;

console.log("total quantity:", totalQuantity);
console.log("total price:", totalPrice);
console.log("most expensive:", mostExpensive.title);
console.log("has items:", hasItems);

const usersState = {
  users: [
    { name: "Anna", isActive: true, role: "admin" },
    { name: "Oleh", isActive: false, role: "editor" },
    { name: "Maria", isActive: true, role: "editor" },
    { name: "Ivan", isActive: false, role: "viewer" },
    { name: "Sofia", isActive: true, role: "viewer" },
  ],
};

const activeUsers = usersState.users.filter(u => u.isActive);
const admins = usersState.users.filter(u => u.role === "admin");
const activeCount = activeUsers.length;
const activeNames = activeUsers.map(u => u.name);

console.log("active count:", activeCount);
console.log("active names:", activeNames);
console.log("admins:", admins.map(u => u.name));

console.log("----- state history and undo -----");

const history = [];
let currentValue = 0;

function setValue(newValue) {
  history.push(currentValue);
  if (history.length > 10) {
    history.shift();
  }
  currentValue = newValue;
  console.log("value:", currentValue, "| history:", history);
}

function undo() {
  if (history.length === 0) {
    console.log("nothing to undo");
    return;
  }
  currentValue = history.pop();
  console.log("after undo:", currentValue, "| history:", history);
}

setValue(10);
setValue(25);
setValue(5);
setValue(99);
setValue(42);
undo();
undo();
undo();
undo();
undo();
undo();
