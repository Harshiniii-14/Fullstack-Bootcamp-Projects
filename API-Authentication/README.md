# **API Authentication with Axios**

---

## **🚀 Project Overview**

This project demonstrates how to make **server-side API requests using Axios** with different **authentication methods**.

You learn how APIs control access and how to properly send credentials depending on the requirement.

---

## **🧰 Tech Stack**

* Node.js
* Express.js
* Axios
* EJS

---

## **📁 Structure**

```text
project/
├── index.js
├── views/
│   └── index.ejs
└── package.json
```

---

## **🧠 Core Concept: API Authentication**

Authentication is used to:

* Identify users
* Control access
* Protect data

---

## **🔐 Types of Authentication Implemented**

---

### **1. No Authentication**

```js
axios.get(API_URL + "random");
```

### **Explanation**

* Public endpoint
* No credentials required
* Anyone can access

### **Use Case**

* Open/public data APIs

---

### **2. Basic Authentication**

```js
axios.get(API_URL + "all?page=1", {
  auth: {
    username: yourUsername,
    password: yourPassword
  }
});
```

### **Explanation**

* Sends username + password
* Axios encodes it in Base64
* Sent in request headers

### **Behind the scenes**

```text
Authorization: Basic <encoded string>
```

### **Use Case**

* Simple protected APIs

---

### **3. API Key Authorization**

```js
axios.get(API_URL + "filter", {
  params: {
    score: 5,
    apiKey: yourAPIKey
  }
});
```

### **Explanation**

* API key identifies the user
* Sent as query parameter
* Used for tracking usage

### **Use Case**

* Public APIs with rate limiting

---

### **4. Bearer Token Authentication**

```js
axios.get(API_URL + "secrets/42", {
  headers: {
    Authorization: `Bearer ${yourBearerToken}`
  }
});
```

### **Explanation**

* Token sent in headers
* No password sent repeatedly
* Most secure method

### **Use Case**

* Modern applications (OAuth, JWT)

---

## **📡 Axios Concepts Used**

### **Basic Syntax**

```js
const response = await axios.get(url);
```

### **Response**

```js
response.data
```

### **Sending Config**

* `auth` → Basic Auth
* `params` → Query parameters
* `headers` → Tokens

---

## **🔁 Data Flow**

```text
User → Route → Axios → API → Response → EJS
```

---

## **⚠️ Key Learnings**
* Different endpoints require different authentication
* Axios simplifies request configuration
* Always check API documentation
* Authentication = identity
* Authorization = access

---

## **💡 Summary**
This project teaches:
* How APIs protect data
* How to authenticate requests
* How to use Axios with different configurations
