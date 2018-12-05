"use strict";

let express = require("express");
let logger = require("morgan");
let path = require("path");

let requestDebug = require("request-debug");
let requestJs = require("request");

const ENVIRONMENT = process.env.ENV_VARIABLE;

if (ENVIRONMENT !== "production") {
	requestDebug(requestJs);
}

let app = express();

app.set("views", path.join(__dirname, "views"));

app.set("view engine", "ejs");

if (ENVIRONMENT !== "production") {
	app.use(logger("dev"));
}

app.use(express.static(path.join(__dirname, "public")));

// <Routes>

app.get("/", function(request, response) {
	response.render("pages/index");
});

// </Routes>

app.listen(3000, function() {
	console.log("Listening on port " + this.address().port);
});

