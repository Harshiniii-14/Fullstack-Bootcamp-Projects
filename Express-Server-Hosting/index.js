import express from "express";
const app = express(); //creating an app using the express object
const port = 3000;
 
app.listen(port, () => { //we first specify the port number, and then create an anonymous callback function to let us know that the server is running
    console.log("Server running on port " + port + ".");
});