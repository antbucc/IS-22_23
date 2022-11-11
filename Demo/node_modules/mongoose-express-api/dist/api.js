var Api, DefaultImplementation, DocumentationGenerator, Path, Resource,
  __indexOf = [].indexOf || function(item) { for (var i = 0, l = this.length; i < l; i++) { if (i in this && this[i] === item) return i; } return -1; };

Resource = require("./resource");

DefaultImplementation = require("./impl/default_implementation");

Path = require("path");

DocumentationGenerator = require("./documentation_generator");

Api = (function() {
  function Api(options) {
    if (options == null) {
      options = {};
    }
    this.title = options.title;
    this.description = options.description;
    this.version = options.version || "0.0.0";
    this._resources = {};
    this._impl = new DefaultImplementation();
    this._mountedOn = null;
  }

  Api.prototype.resource = function(model, options) {
    return this._resources[model.modelName] = new Resource(model, options);
  };

  Api.prototype.resources = function(models, options) {
    var actions, definition, name, skip, _results;
    if (options == null) {
      options = {};
    }
    skip = options.skip || [];
    actions = options.actions;
    _results = [];
    for (name in models) {
      definition = models[name];
      if (__indexOf.call(skip, name) < 0) {
        _results.push(this.resource(definition, {
          actions: actions
        }));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  };

  Api.prototype.mount = function(app, mountPoint) {
    var name, resource, _ref;
    if (mountPoint == null) {
      mountPoint = "/";
    }
    _ref = this._resources;
    for (name in _ref) {
      resource = _ref[name];
      this._impl.mount(resource, app, mountPoint);
    }
    this._mountedOn = mountPoint;
    return void 0;
  };

  Api.prototype.mountDocumentation = function(app, mountPoint) {
    var docs, generator, mountPath;
    if (mountPoint == null) {
      mountPoint = "/";
    }
    mountPath = mountPoint.indexOf("/") === 0 ? mountPoint : Path.join(this._mountedOn, mountPoint);
    generator = new DocumentationGenerator(this, app.routes);
    docs = generator.generate();
    app.get(mountPath, function(req, res) {
      res.setHeader("Content-Type", "text/html");
      return res.send(docs);
    });
    return void 0;
  };

  Api.prototype.getImplementation = function() {
    return this._impl;
  };

  Api.prototype.setImplementation = function(impl) {
    return this._impl = impl;
  };

  Api.prototype.getResources = function() {
    return this._resources;
  };

  Api.prototype.getTitle = function() {
    return this.title;
  };

  Api.prototype.getDescription = function() {
    return this.description;
  };

  Api.prototype.getVersion = function() {
    return this.version;
  };

  return Api;

})();

module.exports = Api;
