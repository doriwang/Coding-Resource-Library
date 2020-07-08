// import dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var noteApi = require("./routes/note-api-routes");

// Requiring our models for syncing
var db = require("./models");

// setup express app
var app = express();
var PORT = process.env.PORT || 8080;

// setup to use handlebars
app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// configure middleware
app.use(express.urlencoded({
    extended: true
}));
app.use(express.json());
app.use("/api", noteApi);

// Static directory
app.use(express.static("public"));

// routes 
// require("./routes/api-routes.js")(app);
require("./routes/view-routes.js")(app);
require("./routes/todo-api-routes")(app);

// Syncing our sequelize models and then starting our Express app
db.sequelize.sync({
    force: true
}).then(function () {
    app.listen(PORT, function () {
        console.log("Server listening on: http://localhost:" + PORT);
    });
});