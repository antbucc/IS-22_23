var Route;

Route = (function() {
  function Route(path, action) {
    this.path = path;
    this.action = action;
  }

  Route.prototype.getPath = function() {
    return this.path;
  };

  Route.prototype.getName = function() {
    return this.action.getName();
  };

  Route.prototype.getMethod = function() {
    return this.action.getMethod();
  };

  Route.prototype.getDescription = function() {
    return this.action.getDescription();
  };

  return Route;

})();

module.exports = Route;
