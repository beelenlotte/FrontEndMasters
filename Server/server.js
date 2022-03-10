//------------------------------------------------------------------------------------------
//example 1
// const http = require("http");

// //req = request --> object thqt re^resents everything coming from the request
// //res is everything you're going to send back to the user 
// const server = http.createServer(function(req, res) {
//     console.log(`user visited ${req.url}`);
//     res.end("hello!")
// })

// console.log("listening on http://localhost:3000");
// server.listen(3000)
//------------------------------------------------------------------------------------------
//example 2
//npm install express
// const express = require("express");

// const app = express();

// //route
// app.get("/", function(req, res) {
//     res.end("Welcome to my site!")
// });

// app.get("/complement", function(req, res) {
//     res.end("You look nice today!");
// })

// console.log("listening on http://localhost:3001")
// app.listen(3001)

//------------------------------------------------------------------------------------------
//example 3 : working with complements.js qnd index.html
const express = require("express")
const path = require("path")

const complements = [
    "You look nice today",
    "The dress looks nice on you",
    "Have you been working out?",
    "You can do hard things!",
    "you've gotten fqr in this course, you're really smart!",
    "You're programming, how cool is that?",
    "I'm really prou of you",
    "You made this!",
    "You've learned a lot of things, and that's a hard thing to do!"
]

function getRandomComplement() {
    const randomIndex = Math.floor(Math.random() * complements.length);
    return complements[randomIndex]
}

const app = express();

app.get("/", function(req, res) {
    res.sendFile(path.join(__dirname, "index.html"))
})

app.get("/complement", function(req, res) {
    res
        .json({
            complement: getRandomComplement()
        })
})

app.use("/public", express.static("./public"))
app.listen(3000)
console.log("app listening to http://localhost:3000");
