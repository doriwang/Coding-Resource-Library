// Routes
module.exports = function (app) {
  app.get("/", function (req, res) {
    res.render("index");
  });

  app.get("/addnew", function (req, res) {
    res.render("addnew");
  });
};
