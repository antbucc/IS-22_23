var Implementation, Path, Route, _,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Path = require("path");

_ = require("lodash");

Route = require("./route");

Implementation = (function() {
  function Implementation() {
    this.actions = {};
    this.responder = null;
    this._use = [];
    this.mapper = null;
  }

  Implementation.prototype.getActions = function() {
    return this.actions;
  };

  Implementation.prototype.getMountedRoutes = function() {};

  Implementation.prototype.putAction = function(name, action) {
    return this.actions[name] = action;
  };

  Implementation.prototype.removeAction = function(name) {
    var deleted;
    deleted = this.actions[name];
    delete this.actions[name];
    return deleted;
  };

  Implementation.prototype.setResponder = function(responder) {
    return this.responder = responder;
  };

  Implementation.prototype.getResponder = function(responder) {
    return this.responder;
  };

  Implementation.prototype.use = function(middlewares, options) {
    if (options == null) {
      options = {};
    }
    return this._use.push({
      middlewares: middlewares,
      condition: options["if"]
    });
  };

  Implementation.prototype.middlewaresFor = function(action) {
    var middlewares, use, _i, _len, _ref;
    middlewares = [];
    _ref = this._use;
    for (_i = 0, _len = _ref.length; _i < _len; _i++) {
      use = _ref[_i];
      if (typeof use.condition !== "function" || use.condition(action)) {
        middlewares = _.union(middlewares, use.middlewares);
      }
    }
    return middlewares;
  };

  Implementation.prototype.mount = function(resource, app, mountPoint) {
    var ActionClass, action, args, method, middlewares, mountedRoute, name, route, _ref, _results;
    if (mountPoint == null) {
      mountPoint = "/";
    }
    _ref = this.actions;
    _results = [];
    for (name in _ref) {
      ActionClass = _ref[name];
      if ((!resource.actions) || __indexOf.call(resource.actions, name) >= 0) {
        action = new ActionClass(resource, this.responder);
        middlewares = this.middlewaresFor(action);
        route = Path.join(mountPoint, resource.inflector.parameterize(), action.getRoute());
        method = action.getMethod();
        args = [route].concat(middlewares);
        args.push(action.invoke);
        app[method].apply(app, args);
        mountedRoute = new Route(route, action);
        resource.addMountedRoute(mountedRoute);
        _results.push(mountedRoute);
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  return Implementation;

})();

module.exports = Implementation;
