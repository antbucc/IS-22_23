var JsendResponder, Responder, _ref,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

Responder = require("../responder");

JsendResponder = (function(_super) {
  __extends(JsendResponder, _super);

  function JsendResponder() {
    _ref = JsendResponder.__super__.constructor.apply(this, arguments);
    return _ref;
  }

  JsendResponder.prototype.fail = function(req, res, errors) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.send({
      status: "fail",
      data: errors
    });
  };

  JsendResponder.prototype.success = function(req, res, data) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.send({
      status: "success",
      data: data
    });
  };

  JsendResponder.prototype.error = function(req, res, error) {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    return res.send({
      status: "error",
      error: error
    });
  };

  return JsendResponder;

})(Responder);

module.exports = JsendResponder;
