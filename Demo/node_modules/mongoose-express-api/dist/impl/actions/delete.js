var Action, Delete,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../../action");

Delete = (function(_super) {
  __extends(Delete, _super);

  function Delete(resource, responder) {
    this.resource = resource;
    this.responder = responder;
    this.invoke = __bind(this.invoke, this);
    Delete.__super__.constructor.apply(this, arguments);
    this.route = "/:id";
    this.method = "delete";
    this.name = "delete";
    this.description = "Deletes {{resource}}.";
  }

  Delete.prototype.invoke = function(req, res) {
    var _this = this;
    return this.resource.model.findById(req.params.id, function(err, object) {
      if (err) {
        return _this.responder.fail(req, res, {
          errors: err
        });
      } else {
        return object.remove(function(err) {
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
      }
    });
  };

  return Delete;

})(Action);

module.exports = Delete;
