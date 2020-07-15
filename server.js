// Import Express and Handlebars dependencies
var express = require("express");
var exphbs = require("express-handlebars");
var noteApi = require("./routes/note-api-routes");

// Define Express and PORT variables
var app = express();
var PORT = process.env.PORT || 3000;

// require models for syncing with Database
var db = require("./models");

// Setup middleware
app.use(express.urlencoded({
  extended: true
}));
app.use(express.json());
app.use("/api", noteApi);

// Define a static directory
app.use(express.static("public"));

// Setup Handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// Import routes
require("./routes/api-routes.js")(app);
require("./routes/view-routes.js")(app);
require("./routes/todo-api-routes")(app);
require("./routes/code-library-topic.js")(app);

// Start up the server
db.sequelize.sync({ force: false }).then(function () {
  app.listen(PORT, function () {
    console.log("App listening at http://localhost:" + PORT);
  });
});