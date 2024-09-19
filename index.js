var express = require('express')
var app = express()
const port = 3000

const appdata = [
  { name: "Kay", score: 132, date: (new Date("July 6, 2023 1:23:45 AM")).toDateString() },
  { name: "Taylor", score: 42, date: (new Date("September 8, 2024 2:30:00 PM")).toDateString() },
  { name: "test", score: 1, date: (new Date()).toDateString()},
];

const sendFileOptions = {root:"public/"}

app.get('/', (req, res) => {
  res.sendFile("index.html", sendFileOptions);
})
app.get("/css/main.css", (req, res) => {
  res.sendFile("/css/main.css", sendFileOptions);
})
app.get("/js/main.js", (req, res) => {
  res.sendFile("/js/main.js", sendFileOptions);
})
app.get("/js/snake.js", (req, res) => {
  res.sendFile("/js/snake.js", sendFileOptions);
})

app.post("/submit", function() {
  console.log(JSON.parse(dataString));
  const data = JSON.parse(dataString);
  let updated = false;
  for (var i = 0; i < appdata.length; i++) {
    if (data.name === appdata[i].name) {
      appdata[i].score = data.score;
      updated = true;
    }
  }
});
// const handlePost = function (request, response) {
//   let dataString = "";

//   request.on("data", function (data) {
//     dataString += data;
//   });

//   request.on("end", function () {
//     if (request.url === "/submit") {
//       console.log(JSON.parse(dataString));
//       const data = JSON.parse(dataString);
//       let updated = false;
//       for (var i = 0; i < appdata.length; i++) {
//         if (data.name === appdata[i].name) {
//           appdata[i].score = data.score;
//           updated = true;
//         }
//       }
//       if (!updated) {
//         console.log("name " + data.name);
//         appdata.push({ name: data.name, score: data.score, date: (new Date()).toDateString() });
//       }

//       sortAndSend(request, response);
//     } else if (request.url === "/delete") {
//       const data = JSON.parse(dataString);
//       console.log("Received delete request for " + dataString);
//       let idx = undefined;
//       for (let i = 0; i < appdata.length; i++) {
//         if (appdata[i].name === data.name) {
//           idx = i;
//         }
//       }
//       if (idx != undefined) {
//         console.log("Deleting.");
//         appdata.splice(idx, 1);
//       }
//       sortAndSend(request, response);
//     }
//   });
// };

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((req, res, next) => {
  console.log(`${req.method} ${req.url}`);
  next(); // Pass control to the next middleware or route handler
});

