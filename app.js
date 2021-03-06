const express = require("express");
const app = express();

app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});




require('./routes/routes.js')(app);

// server at port 4000
app.listen("4000", (req, res) => {
    console.log("server is started at port 4000")
});
