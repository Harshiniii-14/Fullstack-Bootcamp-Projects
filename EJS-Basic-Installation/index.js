import express from "express"

const app = express(); //creating an app using the express object
const port = 3000;

app.set("view engine", "ejs");


const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const date = new Date();
const daynumber =  date.getDay();

let dayofweek;
if(daynumber != 0 && daynumber !=6) {
    dayofweek = "weekday";
} else {
    dayofweek = "weekend";
}

app.get("/", (req, res) => {
    res.render("index", { day: dayofweek });
});

app.listen(port, () => {
    console.log("Server running on port "+ port +".");
});