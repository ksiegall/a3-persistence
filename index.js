var express = require('express')
var app = express()
const port = 3000

const appdata = [
  { name: "Kay", score: 132, date: (new Date("July 6, 2023 1:23:45 AM")).toDateString() },
  { name: "Taylor", score: 42, date: (new Date("September 8, 2024 2:30:00 PM")).toDateString() },
  { name: "test", score: 1, date: (new Date()).toDateString()},
];

app.get('/', (req, res) => {
  res.send('Hello World!')
//   sendFile(response, "public/index.html");
})

app.get('/data', (req, res) => {
  res.send('Hello World!')
//   sendFile(response, "public/index.html");
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

