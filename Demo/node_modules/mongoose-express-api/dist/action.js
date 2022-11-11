var Action, _,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

_ = require("lodash");

Action = (function() {
  function Action(resource, responder) {
    this.resource = resource;
    this.responder = responder;
    this.invoke = __bind(this.invoke, this);
    this.method = "get";
    this.route = null;
    this.name = null;
    this.description = null;
  }

  Action.prototype.getName = function() {
    return this.name;
  };

  Action.prototype.getResource = function() {
    return this.resource;
  };

  Action.prototype.getMethod = function() {
    return this.method;
  };

  Action.prototype.getRoute = function() {
    return this.route || "";
  };

  Action.prototype.getDescription = function() {
    var context, desc;
    desc = this.description || "";
    context = {
      resource: this.resource.inflector.object(),
      resources: this.resource.inflector.collection()
    };
    return _.template(desc, context, {
      interpolate: /\{\{([\s\S]+?)\}\}/g
    });
  };

  Action.prototype.invoke = function(req, res) {};

  return Action;

})();

module.exports = Action;
