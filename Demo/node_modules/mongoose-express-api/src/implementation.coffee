Path = require("path")
_ = require("lodash")
Route = require("./route")

class Implementation
  constructor: ->
    @actions = {}
    @responder = null
    @_use = []
    @mapper = null

  getActions: ->
    @actions

  getMountedRoutes: ->

  putAction: (name, action) ->
    @actions[name] = action

  removeAction: (name) ->
    deleted = @actions[name]
    delete @actions[name]
    deleted

  setResponder: (responder) ->
    @responder = responder

  getResponder: (responder) ->
    @responder

  # Sets up one or more middleware to be used.
  # 
  # You can also specify conditions to decide whether to use 
  # a middleware or not depending on the invoked action.
  # 
  # @param middlewares [Array<Functions> or Function] one or more middleware to be used
  # @param options [Object] options to set up middlewares:
  # @option options [Function<Action>] if specify a condition to decide whether to use a middleware or not depending on the invoked action.
  # 
  # @example Using a middleware for any action
  #   impl.use(authMiddleware);
  # 
  # @example Using a middleware only for unsafe HTTP methods
  #   impl.use(authMiddleware, {if: function(action){
  #     return action.method != "get";
  #   }});
  # 
  use: (middlewares, options = {}) ->
    @_use.push
      middlewares: middlewares
      condition: options.if

  # @private
  middlewaresFor: (action) ->
    middlewares = []
    for use in @_use
      if typeof use.condition isnt "function" or use.condition(action)
        middlewares = _.union(middlewares, use.middlewares) 

    middlewares

  mount: (resource, app, mountPoint =  "/") ->
    for name, ActionClass of @actions
      if (not resource.actions) or name in resource.actions
        action = new ActionClass(resource, @responder)
        middlewares = @middlewaresFor(action)
        route = Path.join(mountPoint, resource.inflector.parameterize(), action.getRoute())
        method = action.getMethod()
        # eg. app.get("/resource/:id", m1, m2, m3 .., invoke)
        args = [route].concat(middlewares)
        args.push(action.invoke)
        app[method].apply(app, args)
        mountedRoute = new Route(route, action)

        resource.addMountedRoute(mountedRoute)
        mountedRoute


module.exports = Implementation