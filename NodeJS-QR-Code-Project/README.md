---

# 📌 QR Code Generator (Node.js)

A simple **Node.js command-line application** that generates a **QR code image** from a user-provided URL and saves the URL in a text file.

This project demonstrates how to use **Node.js**, **NPM packages**, **file system modules**, and **user input** in a real-world mini project.

---

## 🚀 Project Overview

This application:

* Prompts the user to enter a URL
* Generates a **QR code (PNG format)** for that URL
* Saves the QR image as `qr_img.png`
* Stores the entered URL in a text file called `URL.txt`

---

## 🛠️ Technologies Used

* **Node.js**
* **NPM**
* **@inquirer/prompts** – for command-line user input
* **qr-image** – to generate QR codes
* **fs (File System module)** – to create and write files

---

## 📦 NPM Packages Used

```bash
npm install @inquirer/prompts qr-image
```

---

## 📂 Project Structure

```
QR-Code-Generator/
│
├── index.js        # Main application file
├── qr_img.png      # Generated QR code image
├── URL.txt         # Saved URL entered by the user
├── package.json
└── README.md
```

---

## 🧠 How It Works

1. The user is prompted to enter a URL using `@inquirer/prompts`
2. The entered URL is stored in a variable
3. A QR code is generated using `qr-image`
4. The QR code is saved as a PNG file
5. The URL is written into a text file using Node’s `fs` module

---

## 💻 Code Explanation

### 1️⃣ Taking User Input

```js
const qrLink = await input({ message: 'Enter your URL' });
```

* Prompts the user in the terminal
* Stores the entered URL in `qrLink`

---

### 2️⃣ Generating the QR Code

```js
const qr_png = qr.image(qrLink, { type: 'png' });
qr_png.pipe(createWriteStream("qr_img.png"));
```

* Converts the URL into a QR code
* Saves it as `qr_img.png`

---

### 3️⃣ Saving the URL to a File

```js
writeFile('URL.txt', qrLink, (err) => {
    if (err) throw err;
    console.log('The URL has been saved to URL.txt!');
});
```

* Writes the entered URL into `URL.txt`
* Confirms successful save

---

## ▶️ How to Run the Project

1. Clone the repository

```bash
git clone https://github.com/your-username/qr-code-generator.git
```

2. Navigate into the project folder

```bash
cd qr-code-generator
```

3. Install dependencies

```bash
npm install
```

4. Run the application

```bash
node index.js
```

5. Enter a URL when prompted
   🎉 Your QR code will be generated!

---

## 📸 Output Example

* `qr_img.png` → QR code image
* `URL.txt` → Stores the entered URL

---

## 📚 What I Learned

* Using **Node.js with ES Modules**
* Handling **user input in the terminal**
* Working with **streams** in Node.js
* Creating files using the **File System module**
* Using external NPM packages in a real project

---

## ✅ Future Improvements

* Support for different QR formats (SVG, JPG)
* Custom file names
* Error handling for invalid URLs
* CLI flags for automation

---

## ⭐ Conclusion

This project is a great introduction to **backend JavaScript with Node.js**, showing how powerful command-line tools can be built using simple modules and packages.

---
