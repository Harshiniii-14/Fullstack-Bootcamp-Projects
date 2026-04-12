import express from "express";
import axios from "axios";

const app = express();
const port = 3000;
const API_URL = "https://secrets-api.appbrewery.com/";


const yourUsername = "berry";
const yourPassword = "berrypass";
const yourAPIKey = "";
const yourBearerToken = "";

app.get("/", (req, res) => {
  res.render("index.ejs", { content: "API Response." });
});

app.get("/noAuth", async (req, res) => {

  const response = await axios.get(API_URL + "random");
  res.render("index.ejs", {content: JSON.stringify(response.data)});
});

app.get("/basicAuth", async (req, res) => {
   const response = await axios.get(API_URL + "all?page=1", {
      auth: {
        username: yourUsername,
        password: yourPassword,
      },
    });
    res.render("index.ejs", {content: JSON.stringify(response.data)});
});

app.get("/apiKey", async (req, res) => {
  const response = await axios.get(API_URL + "filter", {
    params: {
      score: 5,
      apiKey: yourAPIKey
    }
  });
  res.render("index.ejs", {content: JSON.stringify(response.data)});
});

app.get("/bearerToken", async (req, res) => {
  const response = await axios.get(API_URL + "secrets/42", {
    headers: { 
      Authorization: `Bearer ${yourBearerToken}` 
    },
  });
  res.render("index.ejs", {content: JSON.stringify(response.data)});
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
