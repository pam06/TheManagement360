const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set("view engine", "ejs");

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

let date = new Date();
let year = date.getFullYear();

app.get("/", function(req, res) {
    res.render("start");
});

app.get("/studentLogin", function(req, res) {
    res.render("studentLogin");
});

app.get("/adminLogin", function(req, res) {
    res.render("adminLogin");
});

app.get("/adminPage", function(req, res) {
   res.render("adminPage");
});

app.get("/addStudent", function(req, res) {
    res.render("addStudent");
});

app.get("/addSchedule", function(req, res) {
   res.render("addSchedule");
});

app.get("/addLibraryDues", function(req, res) {
    res.render("addLibraryDues");
});

app.get("/addIAMarks", function(req, res) {
    res.render("addIAMarks");
});

app.get("/deleteStudent", function(req, res) {
    res.render("deleteStudent");
});

app.listen("3000", () => {
   console.log("Server connected to port 3000");
});