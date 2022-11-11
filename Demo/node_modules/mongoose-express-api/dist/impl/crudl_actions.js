var CRUDLActions, Create, Delete, List, Read, Update;

Create = require("./actions/create");

Read = require("./actions/read");

Update = require("./actions/update");

Delete = require("./actions/delete");

List = require("./actions/list");

CRUDLActions = (function() {
  function CRUDLActions() {
    this.create = Create;
    this.read = Read;
    this.update = Update;
    this["delete"] = Delete;
    this.list = List;
  }

  return CRUDLActions;

})();

module.exports = CRUDLActions;
