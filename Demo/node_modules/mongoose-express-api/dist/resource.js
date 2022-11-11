var Resource, ResourceInflector;

ResourceInflector = require("./resource_inflector");

Resource = (function() {
  function Resource(model, options) {
    this.model = model;
    this.options = options;
    this.actions = this.options.actions;
    this.inflector = new ResourceInflector(this);
    this.mountedRoutes = [];
  }

  Resource.prototype.getName = function() {
    return this.model.modelName;
  };

  Resource.prototype.getInflector = function() {
    return this.inflector;
  };

  Resource.prototype.getMountedRoutes = function() {
    return this.mountedRoutes;
  };

  Resource.prototype.addMountedRoute = function(route) {
    return this.mountedRoutes.push(route);
  };

  return Resource;

})();

module.exports = Resource;
