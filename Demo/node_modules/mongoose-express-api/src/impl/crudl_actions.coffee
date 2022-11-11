Create = require "./actions/create"
Read = require "./actions/read"
Update = require "./actions/update"
Delete = require "./actions/delete"
List = require "./actions/list"

# http://en.wikipedia.org/wiki/Create,_read,_update_and_delete
class CRUDLActions
  constructor: ->
    @create = Create
    @read   = Read
    @update = Update
    @delete = Delete
    @list   = List

module.exports = CRUDLActions