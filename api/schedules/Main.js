"use strict";
const express = require("express");
const Controller = require("./Controller");
const app = express();

app.get("/schedules", Controller.getSchedules);

module.exports = app;
