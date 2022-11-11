_ = require "lodash"

class Action
  constructor: (@resource, @responder) ->
    @method = "get"
    @route = null
    @name = null
    @description = null

  getName: ->
    @name

  getResource: ->
    @resource

  getMethod: ->
    @method

  getRoute: ->
    @route or ""

  getDescription: ->
    desc = @description or ""

    context =
      resource: @resource.inflector.object()
      resources: @resource.inflector.collection()

    _.template(desc, context, { interpolate: /\{\{([\s\S]+?)\}\}/g })


  invoke: (req, res) =>

module.exports = Action