const express = require("express");
const session = require("express-session");
const PORT = 3000;
const bodyParser = require("body-parser");
const path = require("path");

const app = express();

app.use(bodyParser.urlencoded({ extended : true }));

app.use("/public", express.static(path.join(__dirname, "public")));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, "views", "login.html"));
});

app.listen(PORT, () => {
    console.log(`Server Running at http://localhost:${PORT}`);
});
