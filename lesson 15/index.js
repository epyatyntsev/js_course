console.log("Lesson 15: async");

console.log("----- порядок виконання -----");

console.log("1 — синхронний код на початку");

setTimeout(function () {
  console.log("3 — setTimeout з нулем, а виконався останнім");
}, 0);

console.log("2 — синхронний код у кінці");

console.log("----- setTimeout -----");

const timerId = setTimeout(function () {
  console.log("цей рядок ніколи не з'явиться");
}, 3000);

clearTimeout(timerId);
console.log("таймер скасовано");

console.log("----- promise -----");

function getUser(id) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      if (id > 0) {
        resolve({ id, name: `Користувач ${id}`, city: "Київ" });
      } else {
        reject(new Error(`невалідний id: ${id}`));
      }
    }, 400);
  });
}

getUser(1)
  .then(function (user) {
    console.log("[promise] отримали:", user.name);
    return user.city;
  })
  .then(function (city) {
    console.log("[promise] місто з попереднього then:", city);
  });

getUser(-1).catch(function (err) {
  console.log("[promise] catch зловив:", err.message);
});

console.log("----- async/await -----");

async function loadUser(id) {
  try {
    const user = await getUser(id);
    console.log("[async] успіх:", user.name);
  } catch (err) {
    console.log("[async] помилка:", err.message);
  }
}

loadUser(7);
loadUser(-7);

console.log("----- fetch -----");

async function fetchUser(id) {
  const url = `https://jsonplaceholder.typicode.com/users/${id}`;
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error(`сервер відповів ${response.status}`);
  }

  return response.json();
}

function setUserResult(html) {
  document.getElementById("user-result").innerHTML = html;
}

async function showUser(id) {
  setUserResult(`
    <div class="message-box"><span class="spinner"></span>Завантаження...</div>
  `);

  try {
    const user = await fetchUser(id);
    setUserResult(`
      <div class="user-card">
        <div class="name">${user.name}</div>
        <div>${user.email}</div>
        <div>${user.address.city}</div>
      </div>
    `);
    console.log("[fetch] завантажено:", user.name);
  } catch (err) {
    setUserResult(`
      <div class="message-box error">Не вдалося завантажити: ${err.message}</div>
    `);
    console.log("[fetch] помилка:", err.message);
  }
}

document.getElementById("btn-load").addEventListener("click", function () {
  showUser(1);
});

document.getElementById("btn-error").addEventListener("click", function () {
  showUser(9999);
});

console.log("----- послідовно vs паралельно -----");

function loadMockUser(id) {
  return new Promise(function (resolve) {
    setTimeout(function () {
      resolve({ id, name: `Користувач ${id}` });
    }, 400);
  });
}

function setTiming(elementId, html) {
  document.getElementById(elementId).innerHTML = html;
}

document.getElementById("btn-seq").addEventListener("click", async function () {
  setTiming("timing-seq", `<div class="message-box">Завантажую...</div>`);

  const start = Date.now();

  await loadMockUser(1);
  await loadMockUser(2);
  await loadMockUser(3);

  const elapsed = Date.now() - start;
  setTiming(
    "timing-seq",
    `<div class="message-box error">Послідовно: <b>${elapsed} мс</b></div>`,
  );
  console.log("[seq]", elapsed, "мс");
});

document.getElementById("btn-par").addEventListener("click", async function () {
  setTiming("timing-par", `<div class="message-box">Завантажую...</div>`);

  const start = Date.now();

  await Promise.all([loadMockUser(1), loadMockUser(2), loadMockUser(3)]);

  const elapsed = Date.now() - start;
  setTiming(
    "timing-par",
    `<div class="message-box success">Паралельно: <b>${elapsed} мс</b></div>`,
  );
  console.log("[par]", elapsed, "мс");
});
