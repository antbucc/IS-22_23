Action = require "../../action"

class Update extends Action
  
  constructor: (@resource, @responder) ->
    super
    @method = "put"
    @name = "update"
    @description = "Update an instance of {{resource}}."

  invoke: (req, res) =>
    objectProperty = @resource.inflector.object()
    object = new @resource.model(req.body[objectProperty])
    object = object.toObject()
    delete object._id
    @resource.model.update {_id: object.id}, object, (err) =>
      if err
        @responder.fail(req, res, {errors: err})
      else
        data = {}
        object._id = object.id
        data[@resource.inflector.object()] = object
        @responder.success(req, res, data)

module.exports = Update