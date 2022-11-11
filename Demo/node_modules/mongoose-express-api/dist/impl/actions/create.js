var Action, Create,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../../action");

Create = (function(_super) {
  __extends(Create, _super);

  function Create(resource, responder) {
    this.resource = resource;
    this.responder = responder;
    this.invoke = __bind(this.invoke, this);
    Create.__super__.constructor.apply(this, arguments);
    this.method = "post";
    this.name = "create";
    this.description = "Creates new {{resource}}.";
  }

  Create.prototype.invoke = function(req, res) {
    var object, objectProperty,
      _this = this;
    objectProperty = this.resource.inflector.object();
    object = new this.resource.model(req.body[objectProperty]);
    return object.save(function(err) {
      var data;
      if (err) {
        return _this.responder.fail(req, res, {
          errors: err
        });
      } else {
        data = {};
        data[_this.resource.inflector.object()] = object;
        return _this.responder.success(req, res, data);
      }
    });
  };

  return Create;

})(Action);

module.exports = Create;
