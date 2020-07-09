// Routes
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/addnew", function (req, res) {
    res.render("addnew");
  });

  app.get("/notes", function (req, res) {
    res.render("notes");
  });

  app.get("/todo", function (req, res) {
    res.render("todo");
  });
};
