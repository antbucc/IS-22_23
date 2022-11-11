ResourceInflector = require "./resource_inflector"

class Resource
  constructor: (@model, @options) ->
    @actions    = @options.actions
    @inflector = new ResourceInflector(@)
    @mountedRoutes = []

  getName: ->
    @model.modelName

  getInflector: ->
    @inflector

  getMountedRoutes: ->
    @mountedRoutes

  addMountedRoute: (route) ->
    @mountedRoutes.push(route)

module.exports = Resource