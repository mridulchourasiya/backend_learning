

import express from "express";
// common js vs module js
// common js use async code

const app = express();

app.get("/", (req, res) => {
  res.send("server is ready");
});


// use proper / and indentation
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "another jokes",
      content: "this is an another joke",
    },
    {
      id: 3,
      title: "Third joke",
      content: "this is an third joke ",
    },
  ];
  res.send(jokes);
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`server is http://localhost:${port}`);
});
