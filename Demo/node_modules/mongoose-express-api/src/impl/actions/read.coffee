Action = require "../../action"

class Read extends Action

  constructor: (@resource, @responder) ->
    super
    @route = "/:id"
    @name = "read"
    @description = "Find and return an instance of {{resource}}."

  invoke: (req, res) =>
    @resource.model.findById req.params.id, (err, object) =>
      if err
        @responder.fail(req, res, {errors: err})
      else
        data = {}
        data[@resource.inflector.object()] = object
        @responder.success(req, res, data)

module.exports = Read