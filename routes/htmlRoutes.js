var db = require("../models");

module.exports = function(app) {
  // Load index page
  // @readthis The client (us) sends a request to the server (app underneath) for the base url "/" and renders the index.handlebars. 
  // It passes an object with a message and an object of examples (not functional right now but the message is)
  // So if you look at index.handlebars on row 5 you'll see {{msg}} and here, "Welcome!" is passed.
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  // Render 404 page for any unmatched routes
  // @readthis renders the 404.handlebars for any page that we don't have a url for
  app.get("*", function(req, res) {
    res.render("404");
  });
};
