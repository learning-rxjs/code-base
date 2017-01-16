const express = require('express');

const app = express();

app.use(express.static('client/dist'));

app.get('/inspector', (req, res)=> {
  res.send("Hello, world!");
});

app.listen(3000, ()=> {
  console.log("Server started: http://localhost:3000")
});