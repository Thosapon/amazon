const express = require("express");
const morgan = require("morgan");
const bodyParser = require("body-parser");

const app = express();

// Middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// GET - retrive data from the server
app.get("/", (req, res) => {
    res.json("Hello amazon clone");
});

// POST - send data from frontend to server
app.post("/", (req, res) => {
    console.log(req.body.name);
});

app.listen(3000, err =>{
    if (err) {
        console.log(err);
    } else {
        console.log("Listening on Port", 3000);
    }
});