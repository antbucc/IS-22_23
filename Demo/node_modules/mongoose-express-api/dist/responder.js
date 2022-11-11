var Responder;

Responder = (function() {
  function Responder() {}

  Responder.prototype.success = function(req, res, data) {};

  Responder.prototype.fail = function(req, res, errors) {};

  Responder.prototype.error = function(req, res, error) {};

  return Responder;

})();

module.exports = Responder;
