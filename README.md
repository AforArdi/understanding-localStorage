# 🗄️ Local Storage

> **LocalStorage** is a browser feature that lets you store data in the user's browser.

---

## 📋 Key Characteristics

| Feature | Details |
|---|---|
| 📦 Data format | Key–value pairs |
| 🔄 Persistence | Survives page refresh |
| ⏳ Lifetime | Until manually removed |
| 🔤 Data type | **Strings only** |

> ⚠️ Objects and arrays **DO NOT** work directly — use `JSON.stringify()` and `JSON.parse()` to convert them.

---

## 🛠️ Methods

### 1. `setItem()` — Store data

```js
// localStorage.setItem(key, value);
localStorage.setItem("username", "Ardi");
```

---

### 2. `getItem()` — Retrieve data

```js
// localStorage.getItem(key);
const user = localStorage.getItem("username");
console.log(user); // Ardi
```

---

### 3. `removeItem()` — Delete one item

```js
localStorage.removeItem("username");
```

---

### 4. `clear()` — Delete everything

```js
localStorage.clear();
```

---

## 🔄 Working with Objects & Arrays

Since localStorage only stores strings, use JSON conversion:

```js
// Storing an object
const user = { name: "Ardi", age: 21 };
localStorage.setItem("user", JSON.stringify(user));

// Retrieving an object
const stored = JSON.parse(localStorage.getItem("user"));
console.log(stored.name); // Ardi
```

| Method | Direction | Use case |
|---|---|---|
| `JSON.stringify()` | Object → String | Before storing |
| `JSON.parse()` | String → Object | After retrieving |
