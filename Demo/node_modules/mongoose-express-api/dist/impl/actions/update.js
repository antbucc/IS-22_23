var Action, Update,
  __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; },
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Action = require("../../action");

Update = (function(_super) {
  __extends(Update, _super);

  function Update(resource, responder) {
    this.resource = resource;
    this.responder = responder;
    this.invoke = __bind(this.invoke, this);
    Update.__super__.constructor.apply(this, arguments);
    this.method = "put";
    this.name = "update";
    this.description = "Update an instance of {{resource}}.";
  }

  Update.prototype.invoke = function(req, res) {
    var object, objectProperty,
      _this = this;
    objectProperty = this.resource.inflector.object();
    object = new this.resource.model(req.body[objectProperty]);
    object = object.toObject();
    delete object._id;
    return this.resource.model.update({
      _id: object.id
    }, object, function(err) {
      var data;
      if (err) {
        return _this.responder.fail(req, res, {
          errors: err
        });
      } else {
        data = {};
        object._id = object.id;
        data[_this.resource.inflector.object()] = object;
        return _this.responder.success(req, res, data);
      }
    });
  };

  return Update;

})(Action);

module.exports = Update;
