var express = require('express')
var app = express()
const port = 3000


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.post('/users', (req, res) => {
  // Code to handle POST requests to the '/users' path
  // (e.g., for creating a new user)
  res.send('User creation successful!');
});

app.get('/users/:id', (req, res) => {
    const userId = req.params.id; // Access the parameter value
    res.send(`User with ID: ${userId} from routes`);
});


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});
