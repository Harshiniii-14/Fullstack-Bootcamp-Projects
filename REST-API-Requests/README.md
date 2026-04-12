# **Axios CRUD Operations (Secrets API)**

---

## **🚀 Project Overview**

This project demonstrates how to perform **CRUD operations (Create, Read, Update, Delete)** using Axios with a secured API.

You interact with the API using **Bearer Token Authentication**.

---

## **🧰 Tech Stack**

* Node.js
* Express.js
* Axios
* Body-parser
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

## **🔐 Authentication Setup**

```js
const config = {
  headers: {
    Authorization: `Bearer ${yourBearerToken}`
  }
};
```

### **Concept**

* Token proves identity
* Sent with every request

---

## **📌 CRUD Operations**

---

### **1. GET (Read Data)**

```js
axios.get(API_URL + "/secrets/" + id, config);
```

### **Explanation**

* Fetches specific resource
* Uses **path parameter (id)**

---

### **2. POST (Create Data)**

```js
axios.post(API_URL + "/secrets", req.body, config);
```

### **Explanation**

* Sends data in request body
* Creates new resource

---

### **3. PUT (Full Update)**

```js
axios.put(API_URL + "/secrets/" + id, req.body, config);
```

### **Explanation**

* Replaces entire resource
* Requires all fields
* Missing fields → data loss

---

### **4. PATCH (Partial Update)**

```js
axios.patch(API_URL + "/secrets/" + id, req.body, config);
```

### **Explanation**

* Updates only specific fields
* बाकी data remains unchanged

---

### **5. DELETE**

```js
axios.delete(API_URL + "/secrets/" + id, config);
```

### **Explanation**

* Deletes resource
* Only needs ID

---

## **📥 Handling User Input**

```js
req.body
```

* Comes from form submission
* Parsed using body-parser

---

## **⚠️ Error Handling**

```js
try {
  ...
} catch (error) {
  res.render(...);
}
```

* Prevents crashes
* Shows error messages

---

## **🔁 Data Flow**

```text
User → Form → Express Route → Axios → API → Response → EJS
```

---

## **🧠 Core Concepts**
* Axios simplifies HTTP requests
* Async/await handles async operations
* Different HTTP methods = different behaviors
* Backend acts as API client

---

## **⚠️ Common Mistakes**
* Wrong Axios syntax (especially PUT)
* Missing `await`
* Wrong endpoint
* Not sending response
* Mixing request types

---

## **💡 Summary**
This project teaches:
* Full API interaction (CRUD)
* Secure API communication
* Proper request structuring
* Real-world backend logic
