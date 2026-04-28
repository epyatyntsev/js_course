# Заняття 4. Умовні конструкції

## Коротко про урок

На цьому занятті ви навчитеся керувати ходом виконання програми за допомогою умов. Розберете `if / else`, `switch`, а також зрозумієте, що означають `truthy` і `falsy` значення в JavaScript.

## Що таке умовні конструкції

Умовні конструкції потрібні тоді, коли програма має поводитися по-різному залежно від значення.

Наприклад:

- якщо користувач повнолітній, показати один текст
- якщо ні, показати інший
- якщо день тижня `monday`, вивести одне повідомлення
- якщо поле порожнє, попросити заповнити його

## `if / else`

`if / else` використовують, коли треба перевірити умову.

```js
const age = 17;

if (age >= 18) {
  console.log("You are an adult");
} else {
  console.log("You are not an adult yet");
}
```

Якщо умова в `if` істинна, виконується блок коду в фігурних дужках після `if`.
Якщо ні, виконується блок після `else`.

## `else if`

Якщо потрібно перевірити кілька варіантів, використовують `else if`.

```js
const temperature = 24;

if (temperature > 30) {
  console.log("It's very hot");
} else if (temperature > 20) {
  console.log("The weather is warm");
} else {
  console.log("The weather is cool");
}
```

У цьому прикладі програма перевіряє умови по черзі і зупиняється на першій, яка є `true`.

## `switch`

`switch` зручно використовувати, коли потрібно порівняти одне значення з кількома варіантами.

```js
const day = "monday";

switch (day) {
  case "monday":
    console.log("Start of the week");
    break;
  case "friday":
    console.log("Last working day");
    break;
  default:
    console.log("Weekend or unknown day");
}
```

### Для чого потрібен `break`

`break` зупиняє виконання `switch`.

Якщо його не написати, програма може перейти до наступних `case`.

### `default`

`default` спрацьовує тоді, коли жоден `case` не підійшов.

## `truthy` і `falsy`

У JavaScript не всі значення поводяться як `true` або `false` у `if`.
Є значення, які автоматично трактуються як істинні або хибні.

### `falsy` значення

Це значення, які в умовах поводяться як `false`:

- `false`
- `0`
- `-0`
- `0n`
- `""`
- `null`
- `undefined`
- `NaN`

### `truthy` значення

Усі інші значення вважаються `truthy`.

Наприклад:

- `"Hello"`
- `1`
- `-5`

## Приклад перевірки

```js
if ("") {
  console.log("This will not run");
}

if ("Hello") {
  console.log("This will run");
}
```

Порожній рядок `""` є `falsy`, а непорожній рядок `"Hello"` є `truthy`.

## Практичні приклади

### Перевірка наявності значення

```js
const userName = "";

if (userName) {
  console.log(`User name is ${userName}`);
} else {
  console.log("User name is empty");
}
```

### Перевірка числа

```js
const cartItems = 3;

if (cartItems) {
  console.log("Cart has items");
} else {
  console.log("Cart is empty");
}
```

### Оцінка за балами

```js
const score = 82;
let grade;

switch (true) {
  case score >= 90:
    grade = "A";
    break;
  case score >= 80:
    grade = "B";
    break;
  default:
    grade = "F";
}
```

Такий підхід інколи використовують, коли потрібно зручно описати кілька діапазонів.

## Що варто запам'ятати

- `if / else` використовують для перевірки умов
- `else if` допомагає перевірити кілька варіантів
- `switch` зручно застосовувати для багатьох значень однієї змінної
- `break` зупиняє виконання `switch`
- `default` спрацьовує, якщо не підійшов жоден `case`
- `truthy` значення поводяться як `true`
- `falsy` значення поводяться як `false`

## Домашнє завдання

1. Напиши `if / else`, який перевіряє вік користувача.
2. Створи `switch` для вибору дня тижня.
3. Перевір у консолі кілька значень на `truthy` і `falsy`.
4. Зроби приклад з `else if` для оцінки за балами.
