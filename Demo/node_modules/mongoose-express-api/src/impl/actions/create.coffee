Action = require "../../action"

class Create extends Action
  
  constructor: (@resource, @responder) ->
    super
    @method = "post"
    @name = "create"
    @description = "Creates new {{resource}}."

  invoke: (req, res) =>
    objectProperty = @resource.inflector.object()
    object = new @resource.model(req.body[objectProperty])
    object.save (err) =>
      if err
        @responder.fail(req, res, {errors: err})
      else
        data = {}
        data[@resource.inflector.object()] = object
        @responder.success(req, res, data)

module.exports = Create