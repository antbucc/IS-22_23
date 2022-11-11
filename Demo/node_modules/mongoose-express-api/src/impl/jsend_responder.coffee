Responder = require "../responder"

# http://labs.omniti.com/labs/jsend
class JsendResponder extends Responder

  fail: (req, res, errors) ->
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "application/json; charset=utf-8");
    res.send
      status: "fail"
      data: errors

  success: (req, res, data) ->
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json; charset=utf-8")
    res.send
      status: "success"
      data: data

  error:   (req, res, error) ->
    res.setHeader("Access-Control-Allow-Origin", "*")
    res.setHeader("Content-Type", "application/json; charset=utf-8")
    res.send
      status: "error"
      error: error

module.exports = JsendResponder