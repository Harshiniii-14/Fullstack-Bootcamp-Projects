import express from "express";
const app = express(); //creating an app using the express object
const port = 3000;
 
app.listen(port, () => { //we first specify the port number, and then create an anonymous callback function to let us know that the server is running
    console.log("Server running on port " + port + ".");
});

//the server listens on the port and responds to us when it is ready
//now we need to start the server using the node index.js command
//to access the server, we use localhost:3000 on our browser
//right now when we open the localhost for the port, it shows an error "cannot get /" i.e the index.js
//netstat -ano | findstr "LISTENING" is used to find all running ports 