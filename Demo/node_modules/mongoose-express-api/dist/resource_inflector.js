var ResourceInflector, inflection;

inflection = require("inflection");

ResourceInflector = (function() {
  function ResourceInflector(resource) {
    this.resource = resource;
  }

  ResourceInflector.prototype.object = function() {
    return inflection.singularize(inflection.tableize(this.resource.getName()));
  };

  ResourceInflector.prototype.collection = function() {
    return inflection.tableize(this.resource.getName());
  };

  ResourceInflector.prototype.classify = function() {
    return inflection.classify(this.resource.getName());
  };

  ResourceInflector.prototype.parameterize = function() {
    return inflection.dasherize(inflection.tableize(this.resource.getName()));
  };

  return ResourceInflector;

})();

module.exports = ResourceInflector;
