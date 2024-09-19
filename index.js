var express = require('express')
var app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/users', (req, res) => {
  // Code to handle POST requests to the '/users' path
  const userId = req.params.id; // Access the parameter value
  res.send(`User with ID: ${userId}`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})