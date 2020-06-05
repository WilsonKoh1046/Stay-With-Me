const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const cors = require("cors");
const port = 8080;

let messages = require("./forum");
let songs = require("./songs");

app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/api/messages", (req, res) => {
    res.status(200).json(messages);
})

app.get("/api/songs", (req, res) => {
    res.status(200).json(songs);
})

app.listen(port, () => {
    console.log(`Server running on localhost:${port} !`);
})