_ = require "lodash"

class DocumentationGenerator
  constructor: (@api) ->
    @templates =
      layout:
        """
          <!DOCTYPE html>
          <html lang="en">
            <head>
              <meta charset="utf-8" />
              <title><%= title %></title>
              <meta name="description" content="<%= description %>" />
              <link href="//netdna.bootstrapcdn.com/bootstrap/3.0.0/css/bootstrap.min.css" rel="stylesheet" />
              <style>
              body {
                padding-top: 40px;
              }
              </style>
              <!--[if lt IE 9]>
              <script src="http://html5shiv.googlecode.com/svn/trunk/html5.js"></script>
              <![endif]-->
            </head>
            <body>
              <div class="container">
              <header class="jumbotron">
                <h1><%= title %></h1>
                <p><%= description %></p>
                <p><i><small>v. <%= version %></small></i></p>
              </header>
              <%= content %>
              </div>
              <script src="//netdna.bootstrapcdn.com/bootstrap/3.0.0/js/bootstrap.min.js"></script>
            </body>
          </html>
        """
      resource: """
        <section class="resource">
          <h2 class="page-header"><%= name %></h2>
          <table class="table table-striped">
            <thead>
            <tr>
              <th>Method</th><th>Route</th><th>Action</th><th>Description</th>
            </tr>
            </thead>
            <tbody>
              <%= tbody %>
            </tbody>
            
          </table>
        </section>
      """

      actionRow: """
        <tr>
          <td><%= method %></td>
          <td><%= route %></td>
          <td><%= action %></td>
          <td><%= description %></td>
        </tr>
      """



  render: (template, context) ->
    _.template(@templates[template], context)
  
  generate: ->
    contents = _.map _.values(@api.getResources()), (resource) =>
      rows = _.map resource.getMountedRoutes(), (route) =>
        @render "actionRow", 
          method: route.getMethod()
          route: route.getPath()
          action: route.getName()
          description: route.getDescription()
      
      @render("resource", {name: resource.getName(), tbody: rows.join("")})

    @render "layout",
      title: @api.getTitle()
      description: @api.getDescription()
      version: @api.getVersion()
      content: contents.join("")

module.exports = DocumentationGenerator