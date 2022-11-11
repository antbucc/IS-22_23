Action = require "../../action"

class List extends Action

  constructor: (@resource, @responder) ->
    super
    @name = "list"
    @description = "Lists {{resources}} filtering them depending on query string. Request queries are translated to database queries according to `https://github.com/adamjacobbecker/mongoose-api-query/blob/master/readme.md`."

  invoke: (req, res) =>
    @resource.model.apiQuery(req.query).exec (err, objects) =>
      if err
        @responder.fail(req, res, {errors: err})
      else
        data = {}
        data[@resource.inflector.collection()] = objects
        @responder.success(req, res, data)

module.exports = List