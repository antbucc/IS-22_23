# Mongoose Express Api

## Flexible automatic API generation for Moongose and Express

### Features

- Unobtrusive mix routes into Express apps.
- Quick setup.
- RESTful ready to use default implementation with `CRUDL` (`create`, `read`, `update`, `destroy` and `list`) actions and [JSend](http://labs.omniti.com/labs/jsend) responses. `list` action supports complex queries through [moongose-api-query](https://github.com/adamjacobbecker/mongoose-api-query). 
- Setup middlewares to secure api and intercept requests.
- Choose which models to map and actions enabled to them.
- Flexible Interface: you can change everything, modifing actions and response formats, or replace the whole implementation to use different protocols or action sets. 
- Automatic documentation generation.

## Installation

```
npm install mongoose-express-api
```

or specify it as a dependency in `package.json`

```
"dependencies": {
  "mongoose-express-api": "*"
}
```

and then run `npm install` in your project root.

## Examples

### Basic usage

``` js
MongooseExpressApi = require("mongoose-express-api");

api = new MongooseExpressApi();
api.resources(mongoose.models);

api.mount(app, "/api");
```

### Filtering models

``` js
api.resources(mongoose.models, { skip: ["Admin"] })
```
  
### Specifying allowed actions

``` js
api.resources(mongoose.models, {actions: ["read", "list"]})
```

### Adding a single model

``` js
api.resource(myModel)
```

### Adding a single model filtering actions

``` js
api.resource(myModel, {actions: ["read", "list"]})
```

### Extending implementation

``` js
impl = api.getImplementation();
impl.setResponder( myResponder );
impl.addAction( "search", searchAction );
```

### Replacing Implementation

``` js
impl = api.setImplementation( myImpl );
```
 
### Securing api and using middlewares

``` js
impl.use(myMiddleware);

impl.use(authMiddleware, {if: function(action){
  return action.method != "get";
}});
```

### Generate Documentation

``` js
api = new MongooseExpressApi({ title: "My API", description: "This API is for ..", version: "1.0.0" });
api.resources(mongoose.models);

api.mount(app, "/api");
api.mountDocumentation(app, "/api/docs");
```
