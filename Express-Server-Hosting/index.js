import express, { request } from "express";
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

app.get("/", (req, res) => { //The local host is trying to get the '/' or the root //The parameters for anonymous function are request, response

    res.send("<h1>Hello</h1>"); //Response to the GET request

}); 

//A request basically comes from the server and asks for a bunch of information and we can send back resources
//Everytime we need to change something in the server, we are having to stop and restart the server, what can we do instead? We use a tool called Nodemon
//Now our server should be able to handle /, /about and /contact

app.get("/about", (req, res) => {
    res.send("This is my server!");
});

app.get("/contact", (req, res)=> {
    res.send("Contact me at whatsapp link phone at xxx.")
});

