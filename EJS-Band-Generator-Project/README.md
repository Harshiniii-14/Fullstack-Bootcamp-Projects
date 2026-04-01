# **Band Name Generator (Express + EJS)**

## **📌 Project Overview**
This is a simple web application built using **Express.js** and **EJS templating** that generates a random band name by combining an adjective and a noun.

When the user clicks a button, the server:

1. Picks random words from arrays
2. Sends them to the frontend
3. Displays them dynamically

---

## **⚙️ Tech Stack**

* **Node.js** – runtime environment
* **Express.js** – backend framework
* **EJS** – templating engine
* **CSS** – styling

---

## **📁 Project Structure**

```
project/
│
├── public/
│   └── styles/
│       └── main.css
│
├── views/
│   ├── partials/
│   │   ├── header.ejs
│   │   └── footer.ejs
│   │
│   └── index.ejs
│
├── index.js
└── package.json
```

---

## **🔁 Application Flow**

1. User opens `/`
2. Server renders `index.ejs`
3. User clicks **Generate Name**
4. Form sends a **POST request to `/submit`**
5. Server:
   * Picks random adjective + noun
   * Sends them using `res.render()`
6. EJS displays the generated name

---

## **🧠 Backend Logic (index.js)**

### **1. Static Files**
```js
app.use(express.static("public"));
```
* Allows CSS/images to load
* Without this → styling won’t work

---

### **2. Home Route**
```js
app.get("/", (req, res) => {
  res.render("index.ejs");
});
```
* Loads the homepage

---

### **3. Button Submit**
```js
app.post("/submit", (req, res) => {
  const randomadj = adj[Math.floor(Math.random() * adj.length)];
  const randomnoun = noun[Math.floor(Math.random() * noun.length)];

  res.render("index.ejs", {
    adjective: randomadj,
    noun: randomnoun
  });
});
```
✔ Picks random values
✔ Sends data to EJS
✔ Re-renders page with new content

---

## **🎯 Frontend Logic (EJS)**

### **1. Conditional Rendering**
```ejs
<% if (locals.adjective && locals.noun) { %>
  <h1><%= adjective %> <%= noun %></h1>
<% } else { %>
  <h1>Band Generator Project</h1>
<% } %>
```
* If data exists → show generated name
* Else → show default heading

---

### **2. Form**
```html
<form action="/submit" method="POST">
  <input type="submit" value="Generate Name">
</form>
```
* Sends POST request to server
* Triggers name generation

---

### **3. Partials (Reusable Components)**
```ejs
<%- include("partials/header.ejs") %>
<%- include("partials/footer.ejs") %>
```
* Avoids repeating code
* Keeps layout consistent

---

### **4. Dynamic Year in Footer**
```ejs
<p>Copyright © <%= new Date().getFullYear() %></p>
```
* Automatically updates year using JavaScript
* No need to manually change it

---

## **🎨 CSS Linking**
```html
<link rel="stylesheet" href="styles/main.css">
```
* Path is relative to **public folder**
* Works because of `express.static()`

---

## **💡 Key Concepts**
* **Routing** → decides which page to show
* **Templating (EJS)** → injects dynamic data into HTML
* **POST request** → sends data from frontend to backend
* **Partials** → reusable UI components
* **Static files** → CSS/images served separately
---

## **🚀 Final Summary**
This project demonstrates:
* How frontend and backend communicate
* How dynamic content is generated
* How to structure an Express + EJS app cleanly
---
