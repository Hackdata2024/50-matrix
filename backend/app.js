const express = require("express");
const cookie = require("cookie-parser");

const app = express();

app.use(express.json());
app.use(cookie());

const userroutes = require("./routes/userroutes");

app.use("/api/v1" , userroutes);

module.exports = app;