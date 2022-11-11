Resource = require("./resource")
DefaultImplementation = require("./impl/default_implementation")
Path = require("path")
DocumentationGenerator = require("./documentation_generator")

class Api
  constructor: (options = {}) ->
    @title = options.title
    @description = options.description
    @version = options.version or "0.0.0"
    @_resources = {}
    @_impl = new DefaultImplementation()
    @_mountedOn = null

  resource: (model, options) ->
    @_resources[model.modelName] = new Resource(model, options)

  resources: (models, options = {}) ->
    skip = options.skip or []
    actions = options.actions

    for name, definition of models
      unless name in skip
        @resource(definition, {actions: actions})
  
  mount: (app, mountPoint = "/") ->
    
    for name, resource of @_resources
       @_impl.mount(resource, app, mountPoint)

    @_mountedOn = mountPoint
    
    undefined

  mountDocumentation: (app, mountPoint = "/") ->
    mountPath = if mountPoint.indexOf("/") == 0 then mountPoint else Path.join(@_mountedOn, mountPoint) 
    generator = new DocumentationGenerator(@, app.routes)
    docs = generator.generate()

    app.get mountPath, (req,res) ->
      res.setHeader("Content-Type", "text/html");
      res.send(docs)

    undefined

  getImplementation: () ->
    @_impl
  
  setImplementation: (impl) ->
    @_impl = impl

  getResources: () ->
    @_resources

  getTitle: () ->
    @title

  getDescription: () ->
    @description

  getVersion: () ->
    @version

module.exports = Api
      