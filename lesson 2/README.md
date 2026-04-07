# Заняття 2. Змінні та типи даних

## Коротко про урок

На цьому занятті ви познайомитеся зі змінними в JavaScript і навчитеся зберігати дані у коді. Розберете, коли використовувати `let`, коли `const`, які бувають базові типи даних і як перевіряти тип значення через `typeof`.

## Що таке змінна

Змінна в JavaScript це спосіб зберегти значення в коді під певною назвою.

Наприклад, якщо програма повинна запам'ятати ім'я користувача, вік або місто, для цього створюють змінну.

```js
let userName = "Anna";
const age = 18;
```

У цьому прикладі:

- `userName` зберігає текст
- `age` зберігає число

## `let` і `const`

У JavaScript змінні найчастіше оголошують через `let` і `const`.

### `let`

`let` використовують тоді, коли значення може змінитися.

```js
let city = "Kyiv";
city = "Lviv";
```

Тут значення змінної `city` спочатку було `"Kyiv"`, а потім стало `"Lviv"`.

### `const`

`const` використовують тоді, коли значення не планують змінювати.

```js
const country = "Ukraine";
```

Якщо змінну створили через `const`, їй не можна просто присвоїти нове значення.

## Коли використовувати `let`, а коли `const`

Просте правило для старту:

- використовуйте `const` за замовчуванням
- використовуйте `let`, якщо значення дійсно буде змінюватися

Це допомагає писати більш зрозумілий код.

## Типи даних

У JavaScript значення можуть бути різних типів. На цьому занятті важливо знати базові примітивні типи.

### `string`

`string` це текст.

```js
const firstName = "Olena";
```

### `number`

`number` це число.

```js
const age = 20;
```

### `boolean`

`boolean` це логічний тип, у якого є тільки два значення:

- `true`
- `false`

```js
const isStudent = true;
```

### `undefined`

`undefined` означає, що значення ще не задано.

```js
let city;
console.log(city);
```

### `null`

`null` означає навмисно порожнє значення.

```js
const selectedColor = null;
```

### `bigint`

`bigint` використовують для дуже великих чисел.

```js
const bigNumber = 123n;
```

### `symbol`

`symbol` створює унікальне значення.

```js
const id = Symbol("id");
```

## Оператор `typeof`

Оператор `typeof` допомагає визначити тип значення.

```js
const userName = "Anna";
const age = 18;
const isStudent = true;

console.log(typeof userName); // string
console.log(typeof age); // number
console.log(typeof isStudent); // boolean
```

## Важливий момент про `null`

У JavaScript є особливість:

```js
console.log(typeof null); // object
```

Це виглядає дивно, але саме так працює JavaScript. Це просто потрібно запам'ятати.

## Приклади для повторення

```js
let userName = "Anna";
userName = "Oleh";

const age = 18;
const isStudent = true;
const emptyValue = null;
let city;

console.log(userName, typeof userName);
console.log(age, typeof age);
console.log(isStudent, typeof isStudent);
console.log(emptyValue, typeof emptyValue);
console.log(city, typeof city);
```

## Що варто запам'ятати

- змінна зберігає значення
- `let` можна перевизначати
- `const` не можна переприсвоювати
- `string` це текст
- `number` це число
- `boolean` це `true` або `false`
- `undefined` означає, що значення ще не задано
- `null` означає навмисно порожнє значення
- `typeof` допомагає перевірити тип

## Домашнє завдання

1. Створи 6 змінних з різними типами даних.
2. Для кожної змінної виведи значення в консоль.
3. Для кожної змінної виведи результат `typeof`.
4. Зміни значення однієї змінної, оголошеної через `let`.
