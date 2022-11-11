inflection = require "inflection"

class ResourceInflector
  constructor: (@resource) ->
  
  object: ->
    inflection.singularize(inflection.tableize(@resource.getName()))
  
  collection: ->
    inflection.tableize(@resource.getName())

  classify: ->
    inflection.classify(@resource.getName())
  
  parameterize: ->
    inflection.dasherize(inflection.tableize(@resource.getName()))

module.exports = ResourceInflector