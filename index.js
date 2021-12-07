var express = require("express");
var app = express();

app.get("/", (req, res, next) => {
    res.json({ message: "Hello World!" });
});

app.listen(3001, () => {
    console.log("Server running on port 3001");
});
