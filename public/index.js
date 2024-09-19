var express = require('express')
var app = express()


var fs = require('fs')
var _ = require('lodash')
var users = []

// Reading  a JSON file and initiate an Array of Users
fs.readFile('users.json', {encoding: 'utf8'}, function (err, data) {
    if (err) throw err
  
    JSON.parse(data).forEach(function (user) {
      user.name.full = _.startCase(user.name.first + ' ' + user.name.last)
      users.push(user)
    })
  
  })

app.get('/', function (req, res) {
    var buffer = ''
    users.forEach(function(user){
        buffer += `<a href="/${user.username}" > ${user.name.full} </a> <br>` 
    })
    res.send(buffer)
})

app.get('/:username', function (req, res) {
    var username =  req.params.username
    res.send(username)
})

var server = app.listen(3000, function(){
    console.log('Server running at http://localhost:' + server.address().port);
})