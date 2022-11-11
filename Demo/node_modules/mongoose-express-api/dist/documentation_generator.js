var DocumentationGenerator, _;

_ = require("lodash");

DocumentationGenerator = (function() {
  function DocumentationGenerator(api) {
    this.api = api;
    this.templates = {
      layout: "<!DOCTYPE html>\n<html lang=\"en\">\n  <head>\n    <meta charset=\"utf-8\" />\n    <title><%= title %></title>\n    <meta name=\"description\" content=\"<%= description %>\" />\n    <link href=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css\" rel=\"stylesheet\" />\n    <style>\n    body {\n      padding-top: 40px;\n    }\n    </style>\n    <!--[if lt IE 9]>\n    <script src=\"http://html5shiv.googlecode.com/svn/trunk/html5.js\"></script>\n    <![endif]-->\n  </head>\n  <body>\n    <div class=\"container\">\n    <header class=\"jumbotron\">\n      <h1><%= title %></h1>\n      <p><%= description %></p>\n      <p><i><small>v. <%= version %></small></i></p>\n    </header>\n    <%= content %>\n    </div>\n    <script src=\"//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js\"></script>\n  </body>\n</html>",
      resource: "<section class=\"resource\">\n  <h2 class=\"page-header\"><%= name %></h2>\n  <table class=\"table table-striped\">\n    <thead>\n    <tr>\n      <th>Method</th><th>Route</th><th>Action</th><th>Description</th>\n    </tr>\n    </thead>\n    <tbody>\n      <%= tbody %>\n    </tbody>\n    \n  </table>\n</section>",
      actionRow: "<tr>\n  <td><%= method %></td>\n  <td><%= route %></td>\n  <td><%= action %></td>\n  <td><%= description %></td>\n</tr>"
    };
  }

  DocumentationGenerator.prototype.render = function(template, context) {
    return _.template(this.templates[template], context);
  };

  DocumentationGenerator.prototype.generate = function() {
    var contents,
      _this = this;
    contents = _.map(_.values(this.api.getResources()), function(resource) {
      var rows;
      rows = _.map(resource.getMountedRoutes(), function(route) {
        return _this.render("actionRow", {
          method: route.getMethod(),
          route: route.getPath(),
          action: route.getName(),
          description: route.getDescription()
        });
      });
      return _this.render("resource", {
        name: resource.getName(),
        tbody: rows.join("")
      });
    });
    return this.render("layout", {
      title: this.api.getTitle(),
      description: this.api.getDescription(),
      version: this.api.getVersion(),
      content: contents.join("")
    });
  };

  return DocumentationGenerator;

})();

module.exports = DocumentationGenerator;
