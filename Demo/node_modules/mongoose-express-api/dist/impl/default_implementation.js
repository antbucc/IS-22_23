var CRUDLActions, DefaultImplementation, Implementation, JsendResponder,
  __hasProp = {}.hasOwnProperty,
  __extends = function(child, parent) { for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; } function ctor() { this.constructor = child; } ctor.prototype = parent.prototype; child.prototype = new ctor(); child.__super__ = parent.prototype; return child; };

CRUDLActions = require("./crudl_actions");

JsendResponder = require("./jsend_responder");

Implementation = require("../implementation");

DefaultImplementation = (function(_super) {
  __extends(DefaultImplementation, _super);

  function DefaultImplementation() {
    DefaultImplementation.__super__.constructor.apply(this, arguments);
    this.actions = new CRUDLActions();
    this.responder = new JsendResponder();
  }

  return DefaultImplementation;

})(Implementation);

module.exports = DefaultImplementation;
