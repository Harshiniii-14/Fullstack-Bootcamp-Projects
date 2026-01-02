# 🥁 Drum Kit – Mini Web Project

## 📌 Project Overview

The **Drum Kit** is an interactive web application that lets users play different drum sounds by:

* Clicking on on-screen buttons
* Pressing corresponding keys on the keyboard

Each button represents a drum instrument and plays a unique sound with a visual animation.

This project demonstrates **HTML structure**, **CSS styling**, and **JavaScript DOM manipulation & event handling**.

---

## 🛠️ Technologies Used

* **HTML5** – Page structure
* **CSS3** – Styling, layout, animations
* **JavaScript (ES6)** – Logic, events, sound handling
* **Google Fonts** – Custom typography
* **Audio API** – Playing sound files

---

## 📁 Project Structure

```
Drum-Kit/
│── index.html
│── styles.css
│── index.js
│── sounds/
│   ├── crash.mp3
│   ├── kick-bass.mp3
│   ├── snare.mp3
│   ├── tom-1.mp3
│   ├── tom-2.mp3
│   ├── tom-3.mp3
│   └── tom-4.mp3
│── images/
    ├── crash.png
    ├── kick.png
    ├── snare.png
    ├── tom1.png
    ├── tom2.png
    ├── tom3.png
    └── tom4.png
```

---

## 🧱 HTML Explanation (`index.html`)

### 1. Basic Structure

```html
<!DOCTYPE html>
<html lang="en">
```

* Declares HTML5 document
* Sets language to English

---

### 2. Head Section

```html
<link rel="stylesheet" href="styles.css">
<link href="https://fonts.googleapis.com/css?family=Arvo" rel="stylesheet">
```

* Links external CSS file
* Imports **Arvo** font from Google Fonts

---

### 3. Drum Buttons

```html
<button class="w drum">w</button>
```

* Each button:

  * Has a **drum** class (common styling)
  * Has a **unique class** (`w`, `a`, `s`, etc.)
  * Displays the key it responds to

These letters match keyboard keys.

---

### 4. JavaScript Connection

```html
<script src="index.js"></script>
```

* Loads JavaScript after HTML is rendered
* Ensures DOM elements exist before JS runs

---

## 🎨 CSS Explanation (`styles.css`)

### 1. Page Styling

```css
body {
  text-align: center;
  background-color: #283149;
}
```

* Centers content
* Adds dark background for contrast

---

### 2. Drum Button Styling

```css
.drum {
  border: 10px solid #404B69;
  font-size: 5rem;
  width: 150px;
  height: 150px;
}
```

* Large clickable buttons
* Rounded corners
* Bold text for clarity

---

### 3. Background Images

```css
.w {
  background-image: url('images/crash.png');
}
```

* Each drum key gets its own image
* Helps visually identify drum type

---

### 4. Button Animation

```css
.pressed {
  box-shadow: 0 3px 4px #DBEDF3;
  opacity: 0.5;
}
```

* Adds shadow and fade effect
* Applied temporarily when pressed

---

## 🧠 JavaScript Explanation (`index.js`)

### 1. Selecting All Drum Buttons

```js
var numberOfDrums = document.querySelectorAll(".drum").length;
```

* Selects all elements with class `drum`
* Counts how many buttons exist

---

### 2. Adding Click Event Listeners

```js
for (var i = 0; i < numberOfDrums; i++) {
  document.querySelectorAll(".drum")[i].addEventListener("click", function () {
    var buttonInnerHTML = this.innerHTML;
    makeSound(buttonInnerHTML);
    buttonAnimation(buttonInnerHTML);
  });
}
```

* Loop adds event listener to **every drum**
* `this.innerHTML` gets the button’s letter
* Calls:

  * `makeSound()` → plays sound
  * `buttonAnimation()` → visual effect

---

### 3. Keyboard Event Detection

```js
document.addEventListener("keydown", function(event) {
  makeSound(event.key);
  buttonAnimation(event.key);
});
```

* Detects key press
* Uses `event.key` to identify which key was pressed
* Enables keyboard control

---

### 4. Playing Sounds

```js
function makeSound(key) {
  switch (key) {
    case "w":
      var crash = new Audio("sounds/crash.mp3");
      crash.play();
      break;
```

* Uses `switch` to match key
* Creates new `Audio()` object
* Plays correct sound file

---

### 5. Button Animation Logic

```js
function buttonAnimation(currentKey) {
  var activeButton = document.querySelector("." + currentKey);
  activeButton.classList.add("pressed");

  setTimeout(function () {
    activeButton.classList.remove("pressed");
  }, 500);
}
```

* Finds button using its class
* Adds `.pressed` class
* Removes it after 0.5 seconds

---

## ✅ Key Concepts Learned

* DOM selection using `querySelectorAll`
* Event listeners (`click`, `keydown`)
* JavaScript loops
* Switch statements
* Audio handling in JavaScript
* CSS animations using class toggling
* Keyboard & mouse interaction

---

## 🚀 Future Improvements

* Add mobile touch support
* Volume control slider
* Record & replay beats
* Add more instruments
* Improve accessibility


Say the word — and do it properly.
