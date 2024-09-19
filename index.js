var express = require('express')
var app = express()
const port = 3000


app.get('/', (req, res) => {
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

