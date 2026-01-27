# 🔐 Secret Access Password Authentication using Express.js

This project demonstrates a **basic password-protected website** using **Express.js** and **middleware**.
If the correct password is entered, the user can access a secret page.

---

## 🚀 Project Overview

* The user is shown a **login page**
* The user enters a password
* The server checks the password using **middleware**
* If the password is correct → **secret page is shown**
* If incorrect → **user stays on the login page**

Password used:

```
ILoveProgramming
```

---

## 📁 Project Structure

```
project/
│
├── public/
│   ├── index.html      # Login page
│   └── secret.html     # Protected page
│
├── solution.js         # Main server file
├── package.json
```

---

## ⚙️ How the Code Works

### 1️⃣ Importing Required Modules

```js
import express from "express";
import bodyParser from "body-parser";
```

* `express` → creates the server
* `body-parser` → reads form data from requests

---

### 2️⃣ Setting Up the Server

```js
const app = express();
const port = 3000;
```

* Creates an Express app
* Runs on port **3000**

---

### 3️⃣ Parsing Form Data

```js
app.use(bodyParser.urlencoded({ extended: true }));
```

* Allows the server to read data sent from HTML forms
* Makes form values available in `req.body`

---

### 4️⃣ Authorization Middleware

```js
function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
```

* This middleware runs **before every request**
* It checks whether the entered password is correct
* If correct, a flag (`userIsAuthorised`) is set to `true`
* `next()` allows the request to continue

---

### 5️⃣ Using the Middleware

```js
app.use(passwordCheck);
```

* Applies the password check automatically
* No need to repeat logic inside every route

---

### 6️⃣ Home Route

```js
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});
```

* Shows the login page when the site loads

---

### 7️⃣ Password Check Route

```js
app.post("/check", (req, res) => {
  if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
  }
});
```

* Runs after form submission
* If authorized → shows **secret page**
* Else → reloads **login page**

---

### 8️⃣ Starting the Server

```js
app.listen(port, () => {
  console.log("Server running on port " + port);
});
```

* Starts the server
* Logs confirmation in terminal

---

## 🧠 Key Concepts Learned

* Express server setup
* Middleware usage
* Handling POST requests
* Parsing form data
* Basic authentication logic
* Serving HTML files securely

---

## ▶️ How to Run the Project

```bash
npm i
node solution.js
```

Then open:

```
http://localhost:3000
```

---

## ✅ Summary

This project shows how **middleware can handle authorization cleanly** without repeating logic inside routes. It’s a foundation for understanding real-world authentication systems.

---
