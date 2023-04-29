const express = require("express");
const app = express();
const cors = require("cors");

const port = process.env.PORT || 5000; // process.env.PORT deploy er somoy lagbe;

const categories = require("./data/categories.json"); // ./ ditei hobe;

app.use(cors());

app.get("/", (req, res) => {
    res.send("Dragon is running");
});

app.get("/categories", (req, res) => {
    console.log(categories);
    res.send(categories);
});

app.listen(port, () => {
    console.log(`Dragon api is running on port: ${port}`);
});