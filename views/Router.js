"use strict";
const express = require("express");
const path = require('path');
const nunjucks = require('nunjucks');
const app = express();

// SETTING VEW ENGINE AND STATIC FOLDERS
const pages = path.join(__dirname, '/pages');
const layouts = path.join(__dirname, '/layouts');
    
console.log(pages, layouts)
nunjucks.configure([pages, layouts], {
      autoescape: true, 
      express: app,
      watch: true
});


app.set('view engine', 'html');
app.set('views', [pages, layouts]);
app.engine('html', nunjucks.render);
app.use(express.static('public'));

app.get("/", (req, res, next) => {
    res.render(`home.html`, {title: 'Trainning Condor labs.io'});
});

module.exports = app;