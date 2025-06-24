const express = require("express");
require('dotenv').config()
const app = express();
const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.get("/twitter", (req, res) => {
    res.send('mridulchourasia')
});

app.get("/login", (req, res) => {
    res.send("<h1>login for my project Backend Format</h1>")
})

app.get("/email", (req, res) => {
    res.send("mridulchourasia123@gmail.com")
})



app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`);
});
