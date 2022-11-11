var Action, Read,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../../action");

Read = (function(_super) {
  __extends(Read, _super);

  function Read(resource, responder) {
    this.resource = resource;
    this.responder = responder;
    this.invoke = __bind(this.invoke, this);
    Read.__super__.constructor.apply(this, arguments);
    this.route = "/:id";
    this.name = "read";
    this.description = "Find and return an instance of {{resource}}.";
  }

  Read.prototype.invoke = function(req, res) {
    var _this = this;
    return this.resource.model.findById(req.params.id, function(err, object) {
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

  return Read;

})(Action);

module.exports = Read;
