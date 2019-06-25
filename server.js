var express = require("./node_modules/express");
var bodyParser = require("./node_modules/body-parser");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;
//jdjdjdjdjdjd

// For serving of static CSS
app.use(express.static(__dirname + "/app/css"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));
app.use(bodyParser.text());
app.use(bodyParser.json({
    type: "application/vnd.api+json"
}));

// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function () {
    console.log("App listening on PORT: " + PORT);
});

/// blahh lah 