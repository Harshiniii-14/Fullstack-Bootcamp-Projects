import express from "express";
import { dirname } from "path";
import { fileURLToPath } from "url";
import bodyParser from "body-parser";

const __dirname = dirname(fileURLToPath(import.meta.url));

const app = express();
const port = 3000;
var userIsAuthorised = false;


app.use(bodyParser.urlencoded({extended: true}));

//creating a middleware for authorization instead of putting it in the post req

function passwordCheck(req, res, next) {
  const password = req.body["password"];
  if (password === "ILoveProgramming") {
    userIsAuthorised = true;
  }
  next();
}
app.use(passwordCheck);

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/public/index.html");
});

app.post("/check", (req, res) => {
    // var password = req.body["password"];
    // console.log(password);
    // if(password === "ILoveProgramming") {
    //     res.sendFile(__dirname + "/public/secret.html");
    // }
    if (userIsAuthorised) {
    res.sendFile(__dirname + "/public/secret.html");
  } else {
    res.sendFile(__dirname + "/public/index.html");
    //Alternatively res.redirect("/");
  }
})

app.listen(port, () => {
    console.log("Server running on port " + port);
})




