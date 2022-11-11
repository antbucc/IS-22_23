Action = require "../../action"

class Delete extends Action
  constructor: (@resource, @responder) ->
    super
    @route  = "/:id"
    @method = "delete"
    @name = "delete"
    @description = "Deletes {{resource}}."


  invoke: (req, res) =>
    @resource.model.findById req.params.id, (err, object) =>
      if err
        @responder.fail(req, res, {errors: err})
      else
        object.remove (err) =>
          if err
            @responder.fail(req, res, {errors: err})
          else
            data = {}
            data[@resource.inflector.object()] = object
            @responder.success(req, res, data)

module.exports = Delete


