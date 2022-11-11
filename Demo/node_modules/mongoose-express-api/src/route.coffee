class Route
  constructor: (@path, @action) ->

  getPath: () ->
    @path
  
  getName: () ->
    @action.getName()

  getMethod: () ->
    @action.getMethod()

  getDescription: () ->
    @action.getDescription()


module.exports = Route  
