# 📌 jQuery Notes
---

## 1️⃣ Checking if jQuery Is Ready

```js
$(document).ready(function() {
  // jQuery code
});
```

* Ensures jQuery runs **only after the DOM is fully loaded**
* Useful when scripts are placed inside the `<head>`
* Optional if scripts are placed at the end of `<body>`

---

## 2️⃣ Selecting Elements in jQuery

```js
$("h1")
$("button")
$(".btn")
$("#level-title")
```

* `$()` selects HTML elements
* Same syntax works for **single or multiple elements**
* No loops required

---

## 3️⃣ Manipulating Styles with Classes

```js
$("h1").addClass("big-title margin-50");
$("h1").removeClass("big-title");
$("h1").hasClass("margin-50");
```

* Keeps styling in CSS
* JavaScript only controls behavior

---

## 4️⃣ Manipulating Text & HTML

```js
$("h1").text("Hello");
$("button").html("<em>Click</em>");
```

* `.text()` → text only
* `.html()` → includes HTML tags

---

## 5️⃣ Manipulating Attributes

```js
$("img").attr("src");
$("a").attr("href", "https://www.example.com");
```

* One method replaces `getAttribute()` and `setAttribute()`

---

## 6️⃣ Adding Event Listeners

```js
$("button").click(function() {
  $("h1").css("color", "purple");
});
```

* Automatically applies to all selected elements
* Cleaner than vanilla JS loops

---

## 7️⃣ Using `.on()` for Events

```js
$("h1").on("click", function() {
  $(this).css("color", "purple");
});
```

* General-purpose event handler
* More scalable than `.click()`

---

## 8️⃣ Using `$(this)`

```js
$(".btn").click(function() {
  var id = $(this).attr("id");
});
```

* Refers to the element that triggered the event
* Essential for handling multiple elements

---

## ✅ Advantages of jQuery

* Less code, better readability
* No manual loops
* Easy DOM manipulation
* Clean event handling
* Cross-browser compatibility

> https://docs.google.com/document/d/1EyWiOvX3lNaW8g4_Ufh85IP2xe6h8N2B3lnlIi7PaZ8/edit?tab=t.0#heading=h.eeqv5vujdsp6

---

📘 These notes act as a **quick-reference guide** when building jQuery-based projects.
