function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"], {
  /***/
  "./$$_lazy_route_resource lazy recursive":
  /*!******************************************************!*\
    !*** ./$$_lazy_route_resource lazy namespace object ***!
    \******************************************************/

  /*! no static exports found */

  /***/
  function $$_lazy_route_resourceLazyRecursive(module, exports) {
    function webpackEmptyAsyncContext(req) {
      // Here Promise.resolve().then() is used instead of new Promise() to prevent
      // uncaught exception popping up in devtools
      return Promise.resolve().then(function () {
        var e = new Error("Cannot find module '" + req + "'");
        e.code = 'MODULE_NOT_FOUND';
        throw e;
      });
    }

    webpackEmptyAsyncContext.keys = function () {
      return [];
    };

    webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
    module.exports = webpackEmptyAsyncContext;
    webpackEmptyAsyncContext.id = "./$$_lazy_route_resource lazy recursive";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html":
  /*!**************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html ***!
    \**************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppAppComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<router-outlet></router-outlet>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/error/error.component.html":
  /*!*******************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/error/error.component.html ***!
    \*******************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodolistErrorErrorComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container\">\n\n    <div class=\"\" style = \"margin-top:25%;margin-left:10%;\">\n        <h3>Oops!! Some thing Went Wrong , Try Again Later</h3>\n    </div>\n\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/friend/friend.component.html":
  /*!*********************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/friend/friend.component.html ***!
    \*********************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodolistFriendFriendComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n<div class=\"container set\">\n    <div class=\"card\">\n        <div class=\"card-header header rounded-pill\">\n            PEOPLE\n        </div>\n        <div *ngIf=\"loading\">\n            <ngx-spinner type=\"pacman\" size = \"medium\"></ngx-spinner>\n            </div>\n        <div class=\"card-body\">\n            <div class=\"search\">\n                <input id=\"searchbox\" class=\"rounded-pill\" (keyup.enter)=\"search()\" [(ngModel)]=\"searchingValue\" type=\"text\" placeholder=\"search people here...\">\n                <span *ngIf=\"searchingValue!=''\"\n                id=\"clear\" (click)=\"unsearch()\" class=\"fa fa-times-circle\" style=\"color:#24a0ed\"></span>\n\n              </div>\n\n            <div class=\"row cardsbody\" *ngIf=\"!searching\" [@users]>\n                <div class=\" col-lg-4 col-md-5 col-10 cards\"  *ngFor=\"let user of users\">\n                    <div class=\"card icard\" >\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">{{user.userName}}</h5>\n                            <p>{{user.email}}</p>\n                            <div *ngIf = \"!checkRequestSent(user) && !checkFriend(user)\">\n                            <button class=\"btn btn-primary rounded-pill\" (click)=\"sendRequest(user);\">Add Friend</button>\n                            </div>\n                            <div *ngIf = \"checkRequestSent(user) && !checkFriend(user)\">\n                            <button class=\"btn btn-primary rounded-pill disabled \">Request Sent</button>\n                            </div>\n                            <div *ngIf = \"!checkRequestSent(user) && checkFriend(user)\">\n                                <button class=\"btn btn-primary rounded-pill\" (click)=\"unfriend(user)\">unfriend</button>\n                             </div>\n                         </div>\n                    </div>\n                </div>\n\n            </div>\n\n\n            <div class=\"row cardsbody\" >\n                <div class=\" col-lg-4 col-md-5 col-sm-5 col-10 cards\" [@users]  *ngFor=\"let user of searchedUsers\">\n                    <div class=\"card icard\" >\n                        <div class=\"card-body\">\n                            <h5 class=\"card-title\">{{user.userName}}</h5>\n                            <p>{{user.email}}</p>\n                            <div *ngIf = \"!checkRequestSent(user) && !checkFriend(user)\">\n                            <button class=\"btn btn-primary rounded-pill\" (click)=\"sendRequest(user);\">Add Friend</button>\n                            </div>\n                            <div *ngIf = \"checkRequestSent(user) && !checkFriend(user)\">\n                            <button class=\"btn btn-primary disabled rounded-pill\"> Request Sent</button>\n                            </div>\n                            <div *ngIf = \"!checkRequestSent(user) && checkFriend(user)\">\n                                <button class=\"btn btn-primary rounded-pill\" (click)=\"unfriend(user)\">unfriend</button>\n                             </div>\n                         </div>\n                    </div> \n                </div>\n\n            </div>\n\n            \n\n            <div *ngIf = \"searching && searchedUsers.length==0 \" class=\" col-md-8 noFound alert alert-info rounded-pill m-auto text-center\" style=\"width:50%;margin-top:100%\" role=\"alert\">\n                <h3><b>No user Found</b></h3>\n              </div>\n\n\n\n            <div *ngIf = \"!searching\"> \n            <span> <button  class=\"btn btn-primary left \" (click)=\"getPrevPages()\" [disabled]=\"pageValue==0\">prev</button> </span>\n             <span><button  class=\"btn btn-primary right\" (click)=\"getNextPages()\"  [disabled]=\"checkNext()\">next</button></span>\n            </div>\n            <div>\n                \n            </div>\n        </div>\n        <button class=\"btn btn-primary group rounded-pill\" [routerLink]=\"['/friend',userDetails?.userId]\">goback</button>\n    </div>\n    \n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/multi-user/multi-user.component.html":
  /*!*****************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/multi-user/multi-user.component.html ***!
    \*****************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodolistMultiUserMultiUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid d-none d-lg-block  d-xl-block clearfix\">\n  <nav class=\"navbar navbar-expand-lg navbar-light rounded-pill \" style=\"background-color: #e3f2fd;overflow: hidden;\">\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link \" style=\"color: #24a0ed;cursor: pointer;\" routerLink=\"/user\">Home</a>\n        </li>\n      </ul>\n      <h4 style=\"color: #24a0ed;\"><strong>Friend's Todos</strong></h4>\n      <ul class=\"navbar-nav ml-auto\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link \" style=\"color: #24a0ed;cursor: pointer;\" routerLink=\"/list\">People</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div *ngIf=\"loading\">\n    <ngx-spinner type=\"pacman\" size = \"medium\"></ngx-spinner>\n    </div>\n  <div class=\"container set bg-light\">\n    <div class=\"row\">\n      <div class=\"col-md-4 \">\n        <div class=\"people-list\" id=\"people-list\">\n\n          <input type=\"search\" [(ngModel)]=\"userFilter.name\" placeholder=\"search friend here...\"\n            style=\"margin-top: 10px; margin-left:10px;\">\n          <ul>\n            <li class=\"rounded-pill text-center animate\" [@todos] *ngFor=\"let friend of friends | filterBy: userFilter\"\n              (click)=\"loading='false';getTodos(friend);\">{{ friend?.name | titlecase }}</li>\n\n            <!-- in case you want to show empty message -->\n            <h3 *ngIf=\" friends.length==0\" style=\"margin-left: 17%;margin-top: 82%;\">No Friends</h3>\n\n            <li *ngIf=\"(friends | filterBy: userFilter).length === 0 && friends.length!=0\">No matching elements</li>\n          </ul>\n        </div>\n      </div>\n\n      <div class=\"col-md-8 text-center\" style=\"margin:auto\" *ngIf=\"!display\">\n        <h3>Click any user to view their todolists</h3>\n      </div>\n\n      <div class=\"col-md-8\" *ngIf=\"display\">\n        <div class=\"chat\" style=\"border-radius: 20px;\">\n          <div class=\"chat-header clearfix \" style=\"border-radius: 20px;\">\n            <div class=\"chat-about \">\n              <div class=\"chat-with\">todo's of {{currentUserName | titlecase}}</div>\n              <div *ngIf=\"todoCount!=0\" class=\"chat-num-messages\">{{todoCount}} todos</div>\n              <div *ngIf=\"todoCount==0\" class=\"chat-num-messages\">No todos found</div>\n\n            </div>\n            <i class=\"fas fa-undo-alt\" (click)=\"undo()\"></i>\n            <span data-toggle=\"modal\" data-target=\"#exampleModal\"> <i class=\"fas fa-plus-circle\"></i> </span>\n          </div> <!-- end chat-header -->\n\n          <div>\n\n            <div *ngIf=\"currentUserTodos.length==0\" class=\" col-md-8 alert alert-info rounded-pill m-auto text-center\"\n              style=\"width:50%;margin-top:100%\" role=\"alert\">\n              <p><b>No Lists Found</b></p>\n            </div>\n            <table *ngFor=\"let todo of currentUserTodos\" [@todos] class=\"todos\">\n              <tr>\n                <td>\n                  <li class=\"list-group-item py-3 animate\">\n                    <span *ngIf=\"!todo.complete\" class=\"buttonc\" (click)=\"completeFriendTodo(todo)\"><i\n                        class=\"far fa-circle\"></i></span>\n                    <span *ngIf=\"todo.complete\" class=\"buttonc\" (click)=\"recompleteFriendTodo(todo)\"><i\n                        class=\"fas fa-check-circle\"></i></span>\n\n                    {{todo.todoTitle}}\n                    <span class=\"button\" data-toggle=\"modal\" data-target=\"#addItemModal\"\n                      (click)=\"getTodoId(todo.todoId);getTodo(todo)\"><i class=\"fas fa-plus-circle\"></i></span>\n                    <span class=\"button\" (click)=\"deleteFriendTodo(todo)\"><i class=\"fas fa-trash\"></i></span>\n                    <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateTodoModal\"\n                      (click)=\"getTodoId(todo.todoId);getTodo(todo)\"><i class=\"fas fa-pen\"></i></span>\n                  </li>\n                </td>\n              </tr>\n              <tr *ngFor=\"let item of todo?.itemList\">\n                <td>\n                  <li class=\"list-group-item py-2 animate task\">\n                    <span *ngIf=\"!item.itemComplete\" class=\"buttonc\" (click)=\"completeFriendItem(todo,item.itemId)\"><i\n                        class=\"far fa-circle\"></i></span>\n                    <span *ngIf=\"item.itemComplete\" class=\"buttonc\" (click)=\"recompleteFriendItem(todo,item.itemId)\"><i\n                        class=\"fas fa-check-circle\"></i></span>\n                    {{item?.itemName}}\n                    <span class=\"button\" data-toggle=\"modal\" data-target=\"#addSubItemModal\"\n                      (click)=\"getItemId(item.itemId);getTodoId(todo.todoId);getTodo(todo)\"><i\n                        class=\"fas fa-plus-circle\"></i></span>\n                    <span class=\"button\" (click)=\"deleteFriendItem(item.itemId);getTodoId(todo.todoId);getTodo(todo)\"><i\n                        class=\"fas fa-trash\"></i></span>\n                    <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateItemModal\"\n                      (click)=\"getItemId(item.itemId);getTodoId(todo.todoId);getTodo(todo)\"><i\n                        class=\"fas fa-pen\"></i></span>\n                  </li>\n                  <div *ngFor=\"let subItem of item?.subItemList\" class=\"subtask\">\n                    <li class=\"list-group-item py-1 animate subtask\">\n                      <span *ngIf=\"!subItem.subItemComplete\" class=\"buttonc\"\n                        (click)=\"completeFriendSubItem(todo,item.itemId,subItem.subItemId)\"><i\n                          class=\"far fa-circle\"></i></span>\n                      <span *ngIf=\"subItem.subItemComplete\" class=\"buttonc\"\n                        (click)=\"recompleteFriendSubItem(todo,item.itemId,subItem.subItemId)\"><i\n                          class=\"fas fa-check-circle\"></i></span>\n                      {{subItem?.subItemName}}\n                      <span class=\"button\"\n                        (click)=\"deleteFriendSubItem(subItem.subItemId);getTodoId(todo.todoId);getTodo(todo)\">\n                        <i class=\"fas fa-trash\"></i></span>\n                      <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateSubItemModal\"\n                        (click)=\"getItemId(item.itemId); getSubItemId(subItem.subItemId);getTodoId(todo.todoId);getTodo(todo)\"><i\n                          class=\"fas fa-pen\"></i></span>\n                    </li>\n                  </div>\n                </td>\n              </tr>\n            </table>\n          </div> <!-- end chat-history -->\n\n\n        </div> <!-- end chat -->\n      </div>\n    </div>\n\n  </div>\n\n</div> <!-- end container -->\n\n\n<!-- code for mobile view-->\n\n<div class=\"d-lg-none\">\n  <nav class=\"navbar navbar-expand-lg navbar-light  \" style=\"background-color: #e3f2fd;overflow: hidden;\">\n    <h4 class=\"navbar-brand\" style=\"color: #24a0ed;\"><strong>Friend's Todos</strong></h4>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n      aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n      <span class=\"navbar-toggler-icon\"></span>\n    </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n      <ul class=\"navbar-nav mr-auto\">\n        <li class=\"nav-item \">\n          <a class=\"nav-link \" style=\"color: #24a0ed;cursor: pointer;\" routerLink=\"/user\">Home</a>\n        </li>\n        <li class=\"nav-item \">\n          <a class=\"nav-link \" style=\"color: #24a0ed;cursor: pointer;\" routerLink=\"/list\">People</a>\n        </li>\n      </ul>\n    </div>\n  </nav>\n  <div *ngIf=\"loading\">\n    <ngx-spinner type=\"pacman\" size = \"medium\"></ngx-spinner>\n    </div>\n  <div class=\"people-list\" id=\"people-list\" *ngIf=\"mdisplay\">\n    <input type=\"search\" [(ngModel)]=\"userFilter.name\" placeholder=\"search friend here...\"\n      style=\"margin-top: 10px; margin-left:8%;\">\n    <ul>\n      <li class=\"rounded-pill text-center animate\" style=\"margin-left: 4%;\" [@todos]\n        *ngFor=\"let friend of friends | filterBy: userFilter\" (click)=\"loading='false';getTodos(friend)\">{{ friend?.name | titlecase }}\n      </li>\n      <h3 *ngIf=\" friends.length==0\" style=\"margin-left: 35%;margin-top: 20%;\">No Friends</h3>\n\n      <!-- in case you want to show empty message -->\n      <li *ngIf=\"(friends | filterBy: userFilter).length === 0 && friends.length!=0\">No matching elements</li>\n    </ul>\n  </div>\n  <div *ngIf=\"!mdisplay\" class=\"container set\">\n      <div class=\"chat\" style=\"border-radius: 20px; margin-top: 5%;\">\n        <div class=\"chat-header clearfix \" style=\"border-radius: 20px;\">\n          <div>\n            <i class=\"fas fa-arrow-left\" (click)=\"mdisplay = true\"></i>\n          </div>\n          <div class=\"chat-about \" style =\"margin-left: 3%;\">\n            <div class=\"chat-with\">todo's of {{currentUserName | titlecase}}</div>\n            <div *ngIf=\"todoCount!=0\" class=\"chat-num-messages\">{{todoCount}} todos</div>\n            <div *ngIf=\"todoCount==0\" class=\"chat-num-messages\">No todos found</div>\n\n          </div>\n          <i class=\"fas fa-undo-alt\" (click)=\"undo()\"></i>\n          <span data-toggle=\"modal\" data-target=\"#exampleModal\"> <i class=\"fas fa-plus-circle\"></i> </span>\n        </div> <!-- end chat-header -->\n\n        <div>\n\n          <div *ngIf=\"currentUserTodos.length==0\" class=\" col-md-8 alert alert-info rounded-pill m-auto text-center\"\n            style=\"width:50%;margin-top:100%\" role=\"alert\">\n            <p><b>No Lists Found</b></p>\n          </div>\n          <table *ngFor=\"let todo of currentUserTodos\" class=\"todos\" [@todos]>\n            <tr>\n              <td>\n                <li class=\"list-group-item py-3 animate\">\n                  <span *ngIf=\"!todo.complete\" class=\"buttonc\" (click)=\"completeFriendTodo(todo)\"><i\n                      class=\"far fa-circle\"></i></span>\n                  <span *ngIf=\"todo.complete\" class=\"buttonc\" (click)=\"recompleteFriendTodo(todo)\"><i\n                      class=\"fas fa-check-circle\"></i></span>\n\n                  {{todo.todoTitle}}\n                  <span class=\"button\" data-toggle=\"modal\" data-target=\"#addItemModal\"\n                    (click)=\"getTodoId(todo.todoId);getTodo(todo)\"><i class=\"fas fa-plus-circle\"></i></span>\n                  <span class=\"button\" (click)=\"deleteFriendTodo(todo)\"><i class=\"fas fa-trash\"></i></span>\n                  <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateTodoModal\"\n                    (click)=\"getTodoId(todo.todoId);getTodo(todo);saveTodo(todo)\"><i class=\"fas fa-pen\"></i></span>\n                </li>\n              </td>\n            </tr>\n            <tr *ngFor=\"let item of todo?.itemList\">\n              <td>\n                <li class=\"list-group-item py-2 animate task\">\n                  <span *ngIf=\"!item.itemComplete\" class=\"buttonc\" (click)=\"completeFriendItem(todo,item.itemId)\"><i\n                      class=\"far fa-circle\"></i></span>\n                  <span *ngIf=\"item.itemComplete\" class=\"buttonc\" (click)=\"recompleteFriendItem(todo,item.itemId)\"><i\n                      class=\"fas fa-check-circle\"></i></span>\n                  {{item?.itemName}}\n                  <span class=\"button\" data-toggle=\"modal\" data-target=\"#addSubItemModal\"\n                    (click)=\"getItemId(item.itemId);getTodoId(todo.todoId);getTodo(todo)\"><i\n                      class=\"fas fa-plus-circle\"></i></span>\n                  <span class=\"button\" (click)=\"deleteFriendItem(item.itemId);getTodoId(todo.todoId);getTodo(todo)\"><i\n                      class=\"fas fa-trash\"></i></span>\n                  <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateItemModal\"\n                    (click)=\"getItemId(item.itemId);getTodoId(todo.todoId);getTodo(todo)\"><i\n                      class=\"fas fa-pen\"></i></span>\n                </li>\n                <div *ngFor=\"let subItem of item?.subItemList\" class=\"subtask\">\n                  <li class=\"list-group-item py-1 animate subtask\">\n                    <span *ngIf=\"!subItem.subItemComplete\" class=\"buttonc\"\n                      (click)=\"completeFriendSubItem(todo,item.itemId,subItem.subItemId)\"><i\n                        class=\"far fa-circle\"></i></span>\n                    <span *ngIf=\"subItem.subItemComplete\" class=\"buttonc\"\n                      (click)=\"recompleteFriendSubItem(todo,item.itemId,subItem.subItemId)\"><i\n                        class=\"fas fa-check-circle\"></i></span>\n                    {{subItem?.subItemName}}\n                    <span class=\"button\"\n                      (click)=\"deleteFriendSubItem(subItem.subItemId);getTodoId(todo.todoId);getTodo(todo)\">\n                      <i class=\"fas fa-trash\"></i></span>\n                    <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateSubItemModal\"\n                      (click)=\"getItemId(item.itemId); getSubItemId(subItem.subItemId);getTodoId(todo.todoId);getTodo(todo)\"><i\n                        class=\"fas fa-pen\"></i></span>\n                  </li>\n                </div>\n              </td>\n            </tr>\n          </table>\n        </div> <!-- end chat-history -->\n\n\n      </div> <!-- end chat -->\n    \n  </div>\n\n</div>\n\n\n<!--modal to create todo -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\"> create ToDo</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #todo=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">TODO Title :</label>\n            <input type=\"text\" class=\"form-control\" #tname name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"createFriendTodo(tname.value,todo)\">create\n            todo</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n<!--modal to update todo-->\n<div class=\"modal fade\" id=\"updateTodoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit ToDo</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #todou=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">TODO Title :</label>\n            <input type=\"text\" class=\"form-control\" #name name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"updateFriendTodo(name.value,todou)\">Edit\n            todo</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n<!--modal to add item-->\n<div class=\"modal fade\" id=\"addItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Task</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #item=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">Task Name:</label>\n            <input type=\"text\" class=\"form-control\" #taskee name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"addFriendItem(taskee.value,item)\">Add\n            Item</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n<!--modal to update item-->\n<div class=\"modal fade\" id=\"updateItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Task</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #itemu=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">Task Name:</label>\n            <input type=\"text\" class=\"form-control\" #task name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"updateFriendItem(task.value,itemu)\">Edit\n            Task</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n<!--modal to add subitem -->\n<div class=\"modal fade\" id=\"addSubItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add SubTask</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #subItem=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">SubTask Name:</label>\n            <input type=\"text\" class=\"form-control\" #subtasko name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"addFriendSubItem(subtasko.value,subItem)\">Add\n            Subtask</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n\n<!--modal to update subItem-->\n<div class=\"modal fade\" id=\"updateSubItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit SubTask</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #subItemu=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">SubTask Name:</label>\n            <input type=\"text\" class=\"form-control\" #subtask name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"updateFriendSubItem(subtask.value,subItemu)\">Edit\n            Subtask</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/single-user/single-user.component.html":
  /*!*******************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/single-user/single-user.component.html ***!
    \*******************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppTodolistSingleUserSingleUserComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<br><br>\n<div class=\"container set bg-light\">\n\n  <div class=\"card w-100 text-center\">\n    <div class=\"card-header\" style=\"background-color: #d8e9ed;\">\n      <div class=\"row\">\n        <div class=\"col-md-3\">\n        </div>\n        <div class=\"col-md-6\">\n          <h4 style=\"color: #189bba;\" >Todo Management</h4>\n        </div>\n      </div>\n    </div>\n\n\n    <div class=\"card-body lists\" id=\"cardbody\">\n      <ng-sidebar-container style=\"height:100vh\">\n        <ng-sidebar #sidebar [(opened)]=\"_opened\" mode=\"over\" >\n          <div>\n            <ul class=\"list-group list-group-flush \">\n              <button *ngIf = \"!friendRequests\" class=\"list-group-item list-group-item-dark\" data-toggle=\"modal\"\n                data-target=\"#exampleModal\" (click)=\"sidebar.close()\">create todo</button>\n                <li *ngIf = \"friendRequests\" class=\"list-group-item list-group-item-dark\" (click)=\"dispalyTodos();sidebar.close()\">todolists</li>\n               \n              <li class=\"list-group-item list-group-item-dark\" [routerLink] = \"['/friend',userId]\">friends</li>\n              <li class=\"list-group-item list-group-item-dark\" (click)=\"getRequests();sidebar.close();'loading=true'\">Friend Requests</li>\n              <li class=\"list-group-item list-group-item-dark\" (click)=\"logout()\">logout</li>\n              <li class=\"list-group-item list-group-item-dark\"><a (click)=\"sidebar.close()\">close</a></li>\n            </ul>\n          </div>\n        </ng-sidebar>\n        <div ng-sidebar-content>\n          <div *ngIf = \"!friendRequests \">\n          <div class='parent flex-parent'>\n            <div class='child flex-child'>\n              <a (click)=\"_toggleSidebar()\">\n                <span style=\"font-size: 2em; color: #189bba; \">\n                  <i class=\"fas fa-bars\"></i>\n               </span> </a>\n            </div>\n            <div class='child flex-child '>\n              <div class=\"heading\">\n              <h3 style= \"color:#44c2db\">TODO Lists</h3>\n              </div>\n            </div>\n             \n          </div>\n          <hr>\n          <div *ngIf=\"loading\">\n            <ngx-spinner type=\"pacman\" size = \"medium\"></ngx-spinner>\n            </div>\n          <div *ngIf = \"todos.length==0\" class=\"alert alert-info rounded-pill m-auto text-center\" style=\"width:50% \" role=\"alert\">\n            <p><b>No Lists Found</b></p>\n          </div>\n          <table *ngFor=\"let todo of todos\" [@todos] class=\"todos \">\n            <tr>\n              <td >\n              <li class=\"list-group-item py-3 animate\">\n                <span *ngIf = \"!todo.complete\" class=\"buttonc\" (click)=\"completeTodo(todo.todoId)\" ><i class=\"far fa-circle\"></i></span>\n                <span *ngIf = \"todo.complete\" class=\"buttonc\" (click)=\"recompleteTodo(todo.todoId)\" ><i class=\"fas fa-check-circle\"></i></span>\n\n                {{todo.todoTitle}}\n                <span class=\"button\" data-toggle=\"modal\" data-target=\"#addItemModal\"(click) =\"getTodoId(todo.todoId)\" ><i class=\"fas fa-plus-circle\"></i></span>\n                <span class=\"button\" (click)=\"deleteTodo(todo.todoId)\"><i class=\"fas fa-trash\"></i></span>\n                <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateTodoModal\" (click)=\"getTodoId(todo.todoId)\"><i class=\"fas fa-pen\"></i></span>\n              </li>\n              </td>\n            </tr>\n            <tr *ngFor=\"let item of todo?.itemList\" >\n              <td >\n              <li class=\"list-group-item py-2 task animate\">\n                <span *ngIf = \"!item.itemComplete\" class=\"buttonc\" (click)=\"completeItem(item.itemId)\"><i class=\"far fa-circle\"></i></span>\n                <span *ngIf = \"item.itemComplete\" class=\"buttonc\" (click)=\"recompleteItem(todo.todoId,item.itemId)\"><i class=\"fas fa-check-circle\"></i></span>\n\n                {{item?.itemName}}\n                <span class=\"button\" data-toggle=\"modal\" data-target=\"#addSubItemModal\" (click) = \"getItemId(item.itemId)\" ><i class=\"fas fa-plus-circle\"></i></span>\n                <span class=\"button\" (click)=\"deleteItem(item.itemId)\"><i class=\"fas fa-trash\"></i></span>\n                <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateItemModal\" (click) = \"getItemId(item.itemId)\"><i class=\"fas fa-pen\" ></i></span>\n              </li>\n              <div *ngFor = \"let subItem of item?.subItemList\" class=\"subtask\" >\n                <li class=\"list-group-item py-1 subtask animate\" >\n                  <span *ngIf = \"!subItem.subItemComplete\" class=\"buttonc\" (click)=\"completeSubItem(todo.todoId,item.itemId,subItem.subItemId)\"><i class=\"far fa-circle\"></i></span>\n                  <span *ngIf = \"subItem.subItemComplete\" class=\"buttonc\" (click)=\"recompleteSubItem(todo.todoId,item.itemId,subItem.subItemId)\"><i class=\"fas fa-check-circle\"></i></span>\n\n                  {{subItem?.subItemName}}\n                  <span class=\"button\" (click)=\"deleteSubItem(subItem.subItemId)\"><i class=\"fas fa-trash\"></i></span>\n                  <span class=\"button\" data-toggle=\"modal\" data-target=\"#updateSubItemModal\" (click) = \"getItemId(item.itemId); getSubItemId(subItem.subItemId); getTodoId(todo.todoId) \"><i class=\"fas fa-pen\"></i></span>\n                </li>\n              </div>\n              </td>\n            </tr>\n          </table>\n        </div>\n        <div *ngIf = \"friendRequests\">\n          \n          <div class='parent flex-parent'>\n            <div class='child flex-child'>\n              <a (click)=\"_toggleSidebar()\">\n                <span style=\"font-size: 2em; color:blue ;\">\n                  <i class=\"fas fa-bars\"></i>\n               </span> </a>\n            </div>\n            <div class='child flex-child '>\n              <div class=\"heading\">\n              <h3 style= \"color:#44c2db\">friend Requests</h3>\n              </div>\n            </div>\n          </div>\n          <hr>\n          <div *ngIf = \"requests.length==0\" class=\"alert alert-info rounded-pill m-auto text-center\" style=\"width:50% \" role=\"alert\">\n            <p><b>No Friend Requests Found</b></p>\n          </div>\n          <div class=\"row\">\n          <div class=\" col-md-5 col-sm-5 col-10 cards\" [@todos] *ngFor=\"let request of requests\">\n            <div class=\"card icard name-color\" >\n                <div class=\"card-body\">\n                    <h5 class=\"card-title\">{{request.senderName}}</h5>\n                    \n                    \n                    <button class=\"btn acc-rej accept-reject\" (click) = \"acceptRequest(request)\" >Accept</button>\n                    \n                   \n                    <button class=\"btn acc-rej accept-reject\" (click)=\"rejectRequest(request)\">reject</button>\n                    \n                 </div>\n            </div>\n        </div>\n        </div>\n        </div>\n        </div>\n      </ng-sidebar-container>\n\n\n\n    </div>\n  </div>\n</div>\n\n<br><br>\n\n<!--modal to create todo -->\n<div class=\"modal fade\" id=\"exampleModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">  create ToDo</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #todo=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">TODO Title :</label>\n            <input type=\"text\" class=\"form-control\" #tname name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"createTodo(tname.value,todo)\">create\n            todo</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n\n<!--modal to update todo-->\n<div class=\"modal fade\" id=\"updateTodoModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit ToDo</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #todou=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">TODO Title :</label>\n            <input type=\"text\" class=\"form-control\" #name name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"updateTodo(name.value,todou)\">Edit\n            todo</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n<!--modal to add subitem -->\n<div class=\"modal fade\" id=\"addSubItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add SubTask</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #subItem=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">SubTask Name:</label>\n            <input type=\"text\" class=\"form-control\" #subtasko name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"addSubItem(subtasko.value,subItem)\">Add\n            Subtask</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n<!--modal to add item-->\n<div class=\"modal fade\" id=\"addItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Add Task</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #item=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">Task Name:</label>\n            <input type=\"text\" class=\"form-control\" #taskee name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"addItem(taskee.value,item)\">Add\n            Item</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n<!--modal to update item-->\n<div class=\"modal fade\" id=\"updateItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit Task</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #itemu=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">Task Name:</label>\n            <input type=\"text\" class=\"form-control\" #task name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"updateItem(task.value,itemu)\">Edit\n            Task</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n<!--modal to update subItem-->\n<div class=\"modal fade\" id=\"updateSubItemModal\" tabindex=\"-1\" role=\"dialog\" aria-labelledby=\"exampleModalLabel\"\n  aria-hidden=\"true\">\n  <div class=\"modal-dialog\" role=\"document\">\n    <div class=\"modal-content\">\n      <div class=\"modal-header\">\n        <h5 class=\"modal-title\" id=\"exampleModalLabel\">Edit SubTask</h5>\n        <button type=\"button\" class=\"close\" data-dismiss=\"modal\" aria-label=\"Close\">\n          <span aria-hidden=\"true\">&times;</span>\n        </button>\n      </div>\n      <form #subItemu=\"ngForm\">\n        <div class=\"modal-body\">\n\n          <div class=\"form-group\">\n            <label for=\"groupName\" class=\"col-form-label\">SubTask Name:</label>\n            <input type=\"text\" class=\"form-control\" #subtask name=\"title\" ngModel>\n          </div>\n\n        </div>\n        <div class=\"modal-footer\">\n          <button type=\"button\" class=\"btn btn-secondary\" data-dismiss=\"modal\">Close</button>\n          <button type=\"submit\" class=\"btn btn-primary\" data-dismiss=\"modal\"\n            (click)=\"updateSubItem(subtask.value,subItemu)\">Edit\n            Subtask</button>\n        </div>\n      </form>\n    </div>\n\n  </div>\n</div>\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html":
  /*!***********************************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html ***!
    \***********************************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserForgotPasswordForgotPasswordComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\" back\">\n  <br>\n  <br><br>\n  <br>\n  <div class=\"container bg-light set\">\n    <div class=\"row\">\n     <div class=\"alert alert-info rounded-pill m-auto\" role=\"alert\">\n        <p>Please check your registered email for your recovery key.</p>\n      </div> \n    </div>\n    <div class=\"row\">\n      <div class=\" d-none d-sm-block col-sm-6 col-md-6 col-lg-6 col-xl-6 \">\n        <img src=\"/assets/forgot.jpg\">\n      </div>\n      <div class=\"col-12 col-sm-6 col-md-6 col-lg-6 col-xl-6 \">\n        <br><br>\n        <div class=\"row\">\n          <div class=\"col-10\">\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <i class=\"fa fa-key icon\"></i>\n                </span>\n              </div>\n              <input type=\"text\" [(ngModel)]=\"rpassword\" class=\"form-control\" placeholder=\"enter recovery password\"\n                required autofocus>\n            </div>\n          </div>\n          <div class=\"col-10\">\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <i class=\"fa fa-key icon\"></i>\n                </span>\n              </div>\n              <input type=\"password\" [(ngModel)]=\"npassword\" class=\" form-control\" placeholder=\"enter new password \"\n                required>\n            </div>\n          </div>\n          <div class=\"col-10\">\n            <div class=\"input-group mb-3\">\n              <div class=\"input-group-prepend\">\n                <span class=\"input-group-text\">\n                  <i class=\"fa fa-key icon\"></i>\n                </span>\n              </div>\n              <input type=\"password\" [(ngModel)]=\"cpassword\" class=\" form-control\" placeholder=\"re-enter password \"\n                required>\n            </div>\n          </div>\n        </div>\n        <br>\n        <div class=\"col-xl-12 text-center\">\n          <button type=\"button\" (click)=\"ResetPassword()\" class=\" btn btn-success\">Submit</button>\n        </div>\n        <div class=\"col-12 text-center\">\n          <button type=\"button\" style=\"margin: auto;\" class=\"btn btn-link rounded-pill dec animate\" [routerLink]=\"['/login']\"><b>Back\n              to Login</b>\n          </button>\n        </div>\n        <br>\n\n      </div>\n    </div>\n\n  </div>\n</div>";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html":
  /*!***************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html ***!
    \***************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserLoginLoginComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<div class=\"container-fluid\">\n<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <h5 class=\"navbar-brand m-auto\">Todoist</h5>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\"\n    aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link active pointer ml-3\" (click)=\"goToSignUp()\">Sign-Up</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n<br><br><br>\n\n<div class=\"row p-0 m-0 container set m-auto\">\n\n \n\n  <div class=\" d-none d-sm-block col-sm-6 col-md-6 col-lg-6 col-xl-6 \" >\n    <img src=\"/assets/todo.jpg\">\n  </div>\n\n   <div class = \"col-8 col-sm-5 col-md-5 col-lg-5 col-xl-5 m-auto\">\n\n    <h2 class=\"form-signin-heading\">Please sign in</h2>\n\n    <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n    <input type=\"email\" id=\"inputEmail\" class=\"form-control bordere\" [(ngModel)]=\"email\" placeholder=\"Email address\" required autofocus>\n\n    <br>\n\n    <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n    <input type=\"password\" id=\"inputPassword\" class=\"form-control bordere \" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n\n    <br>\n\n    <button class=\"btn btn-lg btn-primary btn-block sign animate dec\" type=\"button\" (click)=\"signinFunction()\">Sign in</button>\n    <a class=\"text-muted forgot  button\" (click)=\"resetPassword()\">forgot password ?</a>\n\n    </div>\n\n  </div>\n\n  </div>\n\n \n\n\n";
    /***/
  },

  /***/
  "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html":
  /*!*****************************************************************************************!*\
    !*** ./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html ***!
    \*****************************************************************************************/

  /*! exports provided: default */

  /***/
  function node_modulesRawLoaderDistCjsJsSrcAppUserSignupSignupComponentHtml(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "<nav class=\"navbar navbar-expand-md navbar-dark bg-dark\">\n\n  <h5 class=\"navbar-brand m-auto\">Todoist</h5>\n\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\"\n    aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n\n    <span class=\"navbar-toggler-icon\"></span>\n\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n\n    <ul class=\"navbar-nav mr-auto\">\n\n      <li class=\"nav-item\">\n\n        <a class=\"nav-link ml-3 active\" (click)=\"goToSignIn()\">Sign-In</a>\n\n      </li>\n\n    </ul>\n\n  </div>\n\n</nav>\n\n<br><br><br><br>\n<div class=\"container set\">\n\n<div class=\"row p-0 m-0\">\n\n  <div class=\" d-none d-sm-block col-sm-4 col-md-4 col-lg-4 col-xl-4 \" >\n    <img src=\"./assets/signup.jpg\">\n  </div>\n\n\n  <div class=\"col-7 col-sm-5 col-md-5 col-lg-5 col-xl-5 m-auto\">\n\n    <h2 class=\"form-signin-heading\">Sign Up</h2>\n\n    <br>\n\n    <form #signupform=\"ngForm\" (ngSubmit)=\"signupform.reset()\">\n\n  \n      <span>FirstName: </span>\n\n      <label for=\"inputFirstName\" class=\"sr-only\">FirstName</label>\n\n      <input type=\"text\" name=\"fname\" #name=\"ngModel\" class=\"form-control bordere\"\n        [class.is-invalid]=\"name.invalid && name.touched\" [(ngModel)]=\"firstName\" placeholder=\"FirstName\" required\n        autofocus>\n      <small class=\"text-danger\" [class.d-none]=\"name.valid || name.untouched\">First Name is Required</small>\n\n      <br>\n\n      <span>LastName: </span>\n\n      <label for=\"inputLastName\" class=\"sr-only\">LastName</label>\n\n      <input type=\"text\" name=\"inputLastName\" #lname=\"ngModel\" class=\"form-control bordere\"\n        [class.is-invalid]=\"lname.invalid && lname.touched\" [(ngModel)]=\"lastName\" placeholder=\"LastName\" required>\n      <small class=\"text-danger\" [class.d-none]=\"lname.valid || lname.untouched\">Last Name is Required</small>\n\n\n      <br>\n\n      <span>Country: </span>\n\n      <label for=\"inputCountry\" class=\"sr-only\">Country: </label>\n      <select [(ngModel)]=\"country\" name=\"country\" class=\"form-control bordere\" #inputCountry=\"ngModel\" (click)=\"onChangeOfCountry()\"\n        required [class.is-invalid]=\"inputCountry.invalid && inputCountry.touched\">\n        <option *ngFor=\"let country of countries\" [value]=\"country.code\">{{country.name}}</option>\n      </select>\n      <small class=\"text-danger\" [class.d-none]=\"inputCountry.valid || inputCountry.untouched\">choose one country</small>\n\n\n      <br>\n      <span>Mobile: </span>\n\n      <label for=\"inputMobile\" class=\"sr-only\">Mobile</label>\n\n\n      <input type=\"tel\" name=\"inputMobile\" #contact=\"ngModel\" pattern=\"^\\d{10}$\" class=\"form-control bordere\"\n        [class.is-invalid]=\"contact.invalid && contact.touched\" [(ngModel)]=\"mobile\" placeholder=\"Mobile\" required>\n      <small class=\"text-danger\" [class.d-none]=\"contact.valid || contact.untouched\">Mobilenumber is required and it\n        should contain 10 digits</small>\n\n\n      <br>\n\n      <span>Email: </span>\n\n      <label for=\"inputEmail\" class=\"sr-only\">Email address</label>\n\n      <input type=\"email\" name=\"inputEmail\" #mail=\"ngModel\" class=\"form-control bordere\" [(ngModel)]=\"email\"\n        [class.is-invalid]=\"mail.invalid && mail.touched\" placeholder=\"Email address\" required>\n      <small class=\"text-danger\" [class.d-none]=\"mail.valid || mail.untouched\">email is Required</small>\n\n\n\n      <br>\n\n      <span>Password: </span>\n\n      <label for=\"inputPassword\" class=\"sr-only\">Password</label>\n\n\n      \n      <input type=\"password\" name=\"inputPassword\" #pword=\"ngModel\" [class.is-invalid]=\"pword.invalid && pword.touched\"\n        class=\"form-control bordere \" [(ngModel)]=\"password\" placeholder=\"Password\" required>\n        \n      <small class=\"text-danger\" [class.d-none]=\"pword.valid || pword.untouched\">password is Required</small>\n\n\n      <br>\n\n      <button class=\"btn btn-lg btn-primary btn-block sign\" [disabled]=\"signupform.form.invalid\" type=\"submit\" (click)=\"signupFunction()\">Sign Up</button>\n    </form>\n  </div>\n\n  \n</div>\n</div>\n<br><br><br><br>";
    /***/
  },

  /***/
  "./node_modules/tslib/tslib.es6.js":
  /*!*****************************************!*\
    !*** ./node_modules/tslib/tslib.es6.js ***!
    \*****************************************/

  /*! exports provided: __extends, __assign, __rest, __decorate, __param, __metadata, __awaiter, __generator, __exportStar, __values, __read, __spread, __spreadArrays, __await, __asyncGenerator, __asyncDelegator, __asyncValues, __makeTemplateObject, __importStar, __importDefault */

  /***/
  function node_modulesTslibTslibEs6Js(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__extends", function () {
      return __extends;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__assign", function () {
      return _assign;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__rest", function () {
      return __rest;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__decorate", function () {
      return __decorate;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__param", function () {
      return __param;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__metadata", function () {
      return __metadata;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__awaiter", function () {
      return __awaiter;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__generator", function () {
      return __generator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__exportStar", function () {
      return __exportStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__values", function () {
      return __values;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__read", function () {
      return __read;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spread", function () {
      return __spread;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__spreadArrays", function () {
      return __spreadArrays;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__await", function () {
      return __await;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncGenerator", function () {
      return __asyncGenerator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncDelegator", function () {
      return __asyncDelegator;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__asyncValues", function () {
      return __asyncValues;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__makeTemplateObject", function () {
      return __makeTemplateObject;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importStar", function () {
      return __importStar;
    });
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "__importDefault", function () {
      return __importDefault;
    });
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */

    /* global Reflect, Promise */


    var _extendStatics = function extendStatics(d, b) {
      _extendStatics = Object.setPrototypeOf || {
        __proto__: []
      } instanceof Array && function (d, b) {
        d.__proto__ = b;
      } || function (d, b) {
        for (var p in b) {
          if (b.hasOwnProperty(p)) d[p] = b[p];
        }
      };

      return _extendStatics(d, b);
    };

    function __extends(d, b) {
      _extendStatics(d, b);

      function __() {
        this.constructor = d;
      }

      d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    var _assign = function __assign() {
      _assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
          s = arguments[i];

          for (var p in s) {
            if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
        }

        return t;
      };

      return _assign.apply(this, arguments);
    };

    function __rest(s, e) {
      var t = {};

      for (var p in s) {
        if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0) t[p] = s[p];
      }

      if (s != null && typeof Object.getOwnPropertySymbols === "function") for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
        if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i])) t[p[i]] = s[p[i]];
      }
      return t;
    }

    function __decorate(decorators, target, key, desc) {
      var c = arguments.length,
          r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc,
          d;
      if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);else for (var i = decorators.length - 1; i >= 0; i--) {
        if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
      }
      return c > 3 && r && Object.defineProperty(target, key, r), r;
    }

    function __param(paramIndex, decorator) {
      return function (target, key) {
        decorator(target, key, paramIndex);
      };
    }

    function __metadata(metadataKey, metadataValue) {
      if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(metadataKey, metadataValue);
    }

    function __awaiter(thisArg, _arguments, P, generator) {
      return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) {
          try {
            step(generator.next(value));
          } catch (e) {
            reject(e);
          }
        }

        function rejected(value) {
          try {
            step(generator["throw"](value));
          } catch (e) {
            reject(e);
          }
        }

        function step(result) {
          result.done ? resolve(result.value) : new P(function (resolve) {
            resolve(result.value);
          }).then(fulfilled, rejected);
        }

        step((generator = generator.apply(thisArg, _arguments || [])).next());
      });
    }

    function __generator(thisArg, body) {
      var _ = {
        label: 0,
        sent: function sent() {
          if (t[0] & 1) throw t[1];
          return t[1];
        },
        trys: [],
        ops: []
      },
          f,
          y,
          t,
          g;
      return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
      }, typeof Symbol === "function" && (g[Symbol.iterator] = function () {
        return this;
      }), g;

      function verb(n) {
        return function (v) {
          return step([n, v]);
        };
      }

      function step(op) {
        if (f) throw new TypeError("Generator is already executing.");

        while (_) {
          try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];

            switch (op[0]) {
              case 0:
              case 1:
                t = op;
                break;

              case 4:
                _.label++;
                return {
                  value: op[1],
                  done: false
                };

              case 5:
                _.label++;
                y = op[1];
                op = [0];
                continue;

              case 7:
                op = _.ops.pop();

                _.trys.pop();

                continue;

              default:
                if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                  _ = 0;
                  continue;
                }

                if (op[0] === 3 && (!t || op[1] > t[0] && op[1] < t[3])) {
                  _.label = op[1];
                  break;
                }

                if (op[0] === 6 && _.label < t[1]) {
                  _.label = t[1];
                  t = op;
                  break;
                }

                if (t && _.label < t[2]) {
                  _.label = t[2];

                  _.ops.push(op);

                  break;
                }

                if (t[2]) _.ops.pop();

                _.trys.pop();

                continue;
            }

            op = body.call(thisArg, _);
          } catch (e) {
            op = [6, e];
            y = 0;
          } finally {
            f = t = 0;
          }
        }

        if (op[0] & 5) throw op[1];
        return {
          value: op[0] ? op[1] : void 0,
          done: true
        };
      }
    }

    function __exportStar(m, exports) {
      for (var p in m) {
        if (!exports.hasOwnProperty(p)) exports[p] = m[p];
      }
    }

    function __values(o) {
      var m = typeof Symbol === "function" && o[Symbol.iterator],
          i = 0;
      if (m) return m.call(o);
      return {
        next: function next() {
          if (o && i >= o.length) o = void 0;
          return {
            value: o && o[i++],
            done: !o
          };
        }
      };
    }

    function __read(o, n) {
      var m = typeof Symbol === "function" && o[Symbol.iterator];
      if (!m) return o;
      var i = m.call(o),
          r,
          ar = [],
          e;

      try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) {
          ar.push(r.value);
        }
      } catch (error) {
        e = {
          error: error
        };
      } finally {
        try {
          if (r && !r.done && (m = i["return"])) m.call(i);
        } finally {
          if (e) throw e.error;
        }
      }

      return ar;
    }

    function __spread() {
      for (var ar = [], i = 0; i < arguments.length; i++) {
        ar = ar.concat(__read(arguments[i]));
      }

      return ar;
    }

    function __spreadArrays() {
      for (var s = 0, i = 0, il = arguments.length; i < il; i++) {
        s += arguments[i].length;
      }

      for (var r = Array(s), k = 0, i = 0; i < il; i++) {
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++) {
          r[k] = a[j];
        }
      }

      return r;
    }

    ;

    function __await(v) {
      return this instanceof __await ? (this.v = v, this) : new __await(v);
    }

    function __asyncGenerator(thisArg, _arguments, generator) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var g = generator.apply(thisArg, _arguments || []),
          i,
          q = [];
      return i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i;

      function verb(n) {
        if (g[n]) i[n] = function (v) {
          return new Promise(function (a, b) {
            q.push([n, v, a, b]) > 1 || resume(n, v);
          });
        };
      }

      function resume(n, v) {
        try {
          step(g[n](v));
        } catch (e) {
          settle(q[0][3], e);
        }
      }

      function step(r) {
        r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r);
      }

      function fulfill(value) {
        resume("next", value);
      }

      function reject(value) {
        resume("throw", value);
      }

      function settle(f, v) {
        if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]);
      }
    }

    function __asyncDelegator(o) {
      var i, p;
      return i = {}, verb("next"), verb("throw", function (e) {
        throw e;
      }), verb("return"), i[Symbol.iterator] = function () {
        return this;
      }, i;

      function verb(n, f) {
        i[n] = o[n] ? function (v) {
          return (p = !p) ? {
            value: __await(o[n](v)),
            done: n === "return"
          } : f ? f(v) : v;
        } : f;
      }
    }

    function __asyncValues(o) {
      if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
      var m = o[Symbol.asyncIterator],
          i;
      return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () {
        return this;
      }, i);

      function verb(n) {
        i[n] = o[n] && function (v) {
          return new Promise(function (resolve, reject) {
            v = o[n](v), settle(resolve, reject, v.done, v.value);
          });
        };
      }

      function settle(resolve, reject, d, v) {
        Promise.resolve(v).then(function (v) {
          resolve({
            value: v,
            done: d
          });
        }, reject);
      }
    }

    function __makeTemplateObject(cooked, raw) {
      if (Object.defineProperty) {
        Object.defineProperty(cooked, "raw", {
          value: raw
        });
      } else {
        cooked.raw = raw;
      }

      return cooked;
    }

    ;

    function __importStar(mod) {
      if (mod && mod.__esModule) return mod;
      var result = {};
      if (mod != null) for (var k in mod) {
        if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
      }
      result.default = mod;
      return result;
    }

    function __importDefault(mod) {
      return mod && mod.__esModule ? mod : {
        default: mod
      };
    }
    /***/

  },

  /***/
  "./src/app/app-routing.module.ts":
  /*!***************************************!*\
    !*** ./src/app/app-routing.module.ts ***!
    \***************************************/

  /*! exports provided: AppRoutingModule */

  /***/
  function srcAppAppRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppRoutingModule", function () {
      return AppRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./user/login/login.component */
    "./src/app/user/login/login.component.ts");

    var routes = [{
      path: 'login',
      component: _user_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
      pathMatch: 'full'
    }, {
      path: '',
      redirectTo: 'login',
      pathMatch: 'full'
    }, {
      path: '*',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var AppRoutingModule = function AppRoutingModule() {
      _classCallCheck(this, AppRoutingModule);
    };

    AppRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forRoot(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], AppRoutingModule);
    /***/
  },

  /***/
  "./src/app/app-service.service.ts":
  /*!****************************************!*\
    !*** ./src/app/app-service.service.ts ***!
    \****************************************/

  /*! exports provided: AppServiceService */

  /***/
  function srcAppAppServiceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppServiceService", function () {
      return AppServiceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__);

    var AppServiceService =
    /*#__PURE__*/
    function () {
      function AppServiceService(http) {
        _classCallCheck(this, AppServiceService);

        this.http = http;
        this.url = "/api";
      }

      _createClass(AppServiceService, [{
        key: "signUp",
        value: function signUp(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('firstName', data.firstName).set('lastName', data.lastName).set('email', data.email).set('mobileNumber', data.mobileNumber).set('password', data.password);
          return this.http.post("".concat(this.url, "/signup"), params);
        }
      }, {
        key: "getCountryNames",
        value: function getCountryNames() {
          return this.http.get('../assets/CountryList.json');
        }
      }, {
        key: "getCountryNumbers",
        value: function getCountryNumbers() {
          return this.http.get('../assets/CountryCodes.json');
        }
      }, {
        key: "getAllUsers",
        value: function getAllUsers(pageValue, limit) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('pageValue', pageValue).set('limit', limit).set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken'));
          return this.http.post(this.url + '/all', params);
        }
      }, {
        key: "getUser",
        value: function getUser() {
          return this.http.get(this.url + '/user/' + ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'));
        }
      }, {
        key: "login",
        value: function login(data) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', data.email).set('password', data.password);
          return this.http.post(this.url + '/login', params);
        }
      }, {
        key: "logout",
        value: function logout() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken')).set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'));
          return this.http.post("".concat(this.url, "/out"), params);
        } // end logout function

      }, {
        key: "forgotPassword",
        value: function forgotPassword(email) {
          console.log('in app service0', email);
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('email', email);
          return this.http.post(this.url + '/resetpassword', params);
        }
      }, {
        key: "resetPassword",
        value: function resetPassword(rpassword, newpassword) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('recoveryPassword', rpassword).set('password', newpassword);
          return this.http.post(this.url + '/updatepassword', params);
        }
      }, {
        key: "getTodos",
        value: function getTodos(id) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken')).set('userId', id);
          return this.http.post(this.url + '/gettodos', params);
        }
      }, {
        key: "getCompleteTodos",
        value: function getCompleteTodos(id) {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken')).set('userId', id);
          return this.http.post(this.url + '/getctodos', params);
        }
      }, {
        key: "getFriendRequests",
        value: function getFriendRequests() {
          var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpParams"]().set('authToken', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('AuthToken')).set('userId', ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_3__["Cookie"].get('userId'));
          return this.http.post(this.url + '/getrequests', params);
        }
      }, {
        key: "getUserInfo",
        value: function getUserInfo() {
          return JSON.parse(localStorage.getItem('userInfo'));
        }
      }, {
        key: "setUserInfo",
        value: function setUserInfo(data) {
          localStorage.setItem('userInfo', JSON.stringify(data));
        }
      }]);

      return AppServiceService;
    }();

    AppServiceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClient"]
      }];
    };

    AppServiceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], AppServiceService);
    /***/
  },

  /***/
  "./src/app/app.component.css":
  /*!***********************************!*\
    !*** ./src/app/app.component.css ***!
    \***********************************/

  /*! exports provided: default */

  /***/
  function srcAppAppComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIuLi9hcHAuY29tcG9uZW50LmNzcyJ9 */";
    /***/
  },

  /***/
  "./src/app/app.component.ts":
  /*!**********************************!*\
    !*** ./src/app/app.component.ts ***!
    \**********************************/

  /*! exports provided: AppComponent */

  /***/
  function srcAppAppComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppComponent", function () {
      return AppComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var AppComponent = function AppComponent() {
      _classCallCheck(this, AppComponent);

      this.title = 'chat-app';
    };

    AppComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-root',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./app.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/app.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./app.component.css */
      "./src/app/app.component.css")).default]
    })], AppComponent);
    /***/
  },

  /***/
  "./src/app/app.module.ts":
  /*!*******************************!*\
    !*** ./src/app/app.module.ts ***!
    \*******************************/

  /*! exports provided: AppModule */

  /***/
  function srcAppAppModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "AppModule", function () {
      return AppModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/platform-browser */
    "./node_modules/@angular/platform-browser/fesm2015/platform-browser.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/lib/index.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ngx-filter-pipe */
    "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
    /* harmony import */


    var _app_routing_module__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./app-routing.module */
    "./src/app/app-routing.module.ts");
    /* harmony import */


    var _app_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./app.component */
    "./src/app/app.component.ts");
    /* harmony import */


    var _user_user_module__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./user/user.module */
    "./src/app/user/user.module.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! ./todolist/todolist.module */
    "./src/app/todolist/todolist.module.ts"); //import { AngularFontAwesomeModule } from 'angular-font-awesome';
    // import { FontAwesomeModule } from '@fortawesome/angular-fontawesome'


    var AppModule = function AppModule() {
      _classCallCheck(this, AppModule);
    };

    AppModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_2__["NgModule"])({
      declarations: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]],
      imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_1__["BrowserModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_3__["BrowserAnimationsModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_6__["FilterPipeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"], /// AngularFontAwesomeModule,
      //FontAwesomeModule,
      ngx_toastr__WEBPACK_IMPORTED_MODULE_10__["ToastrModule"].forRoot(), ng_sidebar__WEBPACK_IMPORTED_MODULE_4__["SidebarModule"].forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_7__["AppRoutingModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_11__["HttpClientModule"], _user_user_module__WEBPACK_IMPORTED_MODULE_9__["UserModule"], _todolist_todolist_module__WEBPACK_IMPORTED_MODULE_12__["TodolistModule"]],
      providers: [],
      bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_8__["AppComponent"]]
    })], AppModule);
    /***/
  },

  /***/
  "./src/app/socketservice.service.ts":
  /*!******************************************!*\
    !*** ./src/app/socketservice.service.ts ***!
    \******************************************/

  /*! exports provided: SocketserviceService */

  /***/
  function srcAppSocketserviceServiceTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SocketserviceService", function () {
      return SocketserviceService;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! socket.io-client */
    "./node_modules/socket.io-client/lib/index.js");
    /* harmony import */


    var socket_io_client__WEBPACK_IMPORTED_MODULE_2___default =
    /*#__PURE__*/
    __webpack_require__.n(socket_io_client__WEBPACK_IMPORTED_MODULE_2__);
    /* harmony import */


    var _angular_common_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/common/http */
    "./node_modules/@angular/common/fesm2015/http.js");
    /* harmony import */


    var rxjs__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! rxjs */
    "./node_modules/rxjs/_esm2015/index.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);

    var SocketserviceService = function SocketserviceService(http) {
      var _this = this;

      _classCallCheck(this, SocketserviceService);

      this.http = http; //events to be listened

      this.verifyUser = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('verify', function (data) {
            observer.next(data);
          });
        });
      }; //end verify user event 


      this.getUsersResponse = function () {
        return new Promise(function (resolve, reject) {
          _this.socket.on('get-users-response', function (data) {
            resolve(data);
          });
        });
      };

      this.getUpdate = function () {
        return new Promise(function (resolve, reject) {
          _this.socket.on('get-update', function (data) {
            resolve(data);
          });
        });
      }; // end  getupdate


      this.getFriendUpdate = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('get-friend-update', function (data) {
            observer.next(data);
          });
        });
      }; // end getFriendUpdate


      this.fGetUpdate = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('f-get-update', function (data) {
            observer.next(data);
          });
        });
      }; // end fGetUpdate


      this.getFriendCreateTodo = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('friend-create-todo', function (data) {
            observer.next(data);
          });
        });
      }; // end getFriendCreateTodo


      this.fCreateTodo = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('fcreate-todo', function (data) {
            observer.next(data);
          });
        });
      }; //end fCreateTodo


      this.getFriendDeleteTodo = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('friend-delete-todo', function (data) {
            observer.next(data);
          });
        });
      }; // end getFriendDeleteTodo


      this.fDeleteTodo = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('f-delete-todo', function (data) {
            observer.next(data);
          });
        });
      }; // end fDeleteTodo


      this.requestSent = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on("sent-request", function (data) {
            if (data.recieverId == ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')) observer.next(data);
          });
        });
      }; // end requestSent


      this.sendRequestResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('send-request-response', function (data) {
            observer.next(data);
          });
        });
      }; // end sendRequestResponse


      this.rejectRequestResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('reject-request-response', function (data) {
            observer.next(data);
          });
        });
      }; // end rejectRequestResponse


      this.unfriendResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('unfriend-response', function (data) {
            observer.next(data);
          });
        });
      }; //end unfriendResponse


      this.unfriendAck = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('unfriend-ack', function (data) {
            if (data.userId == ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')) observer.next(data);
          });
        });
      }; //end unfriendAck


      this.acceptedRequest = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on("accepted-request", function (data) {
            if (data.senderId == ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')) observer.next(data);
          });
        });
      }; // end accptedrequest


      this.rejectedRequest = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on("rejected-request", function (data) {
            if (data.senderId == ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')) observer.next(data);
          });
        });
      };

      this.acceptRequestResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('accept-request-response', function (data) {
            observer.next(data);
          });
        });
      }; // end sendRequestResponse


      this.undoResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('undo-response', function (data) {
            observer.next(data);
          });
        });
      }; // end undoResponse


      this.undoIResponse = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('undo-i-response', function (data) {
            observer.next(data);
          });
        });
      }; // end undoResponse


      this.searchedResult = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('searched-result', function (data) {
            observer.next(data);
          });
        });
      }; // end searchedResult 


      this.deleteTodoResponse = function () {
        return new Promise(function (resolve, reject) {
          _this.socket.on('delete-todoList-response', function (data) {
            resolve(data);
          });
        });
      }; //end addItemresponse


      this.errOccured = function () {
        return rxjs__WEBPACK_IMPORTED_MODULE_4__["Observable"].create(function (observer) {
          _this.socket.on('error-message', function (data) {
            observer.next(data);
          });
        });
      }; // end err occured event 
      //events to be emitted


      this.setuser = function (authToken) {
        _this.socket.emit('set-user', authToken);
      }; //end setuser


      this.exitSocket = function () {
        _this.socket.disconnect();
      }; // end exit socket


      this.createList = function (data) {
        _this.socket.emit('create-todo', data);
      }; //end createList


      this.createFriendList = function (data) {
        console.log('createFriendList  is called');

        _this.socket.emit('create-friend-todo', data);
      }; //end createFriendList


      this.addItem = function (data) {
        _this.socket.emit('add-item', data);
      }; //end addItem


      this.addFriendItem = function (data) {
        _this.socket.emit('add-friend-item', data);
      }; //end addFriendItem


      this.addSubItem = function (data) {
        _this.socket.emit('add-sub-item', data);
      }; //end addSubItem


      this.addFriendSubItem = function (data) {
        _this.socket.emit('add-friend-sub-item', data);
      }; //end addFriendSubItem


      this.updateTodo = function (data) {
        _this.socket.emit('update-todo', data);
      }; //end updateTodo


      this.updateFriendTodo = function (data) {
        _this.socket.emit('update-friend-todo', data);
      }; //end updateFriendTodo


      this.updateItem = function (data) {
        _this.socket.emit('update-item', data);
      }; //end updateItem


      this.updateFriendItem = function (data) {
        _this.socket.emit('update-friend-item', data);
      }; //end updateFriendItem


      this.updateSubItem = function (data) {
        _this.socket.emit('update-sub-item', data);
      }; //end updateSubItem


      this.updateFriendSubItem = function (data) {
        _this.socket.emit('update-friend-sub-item', data);
      }; //end updateFriendSubItem


      this.deleteTodo = function (data) {
        _this.socket.emit('delete-todoList', data);
      }; //end deleteTodo


      this.deleteFriendTodo = function (data) {
        _this.socket.emit('delete-friend-todo', data);
      }; //end deleteFriendTodo


      this.deleteItem = function (data) {
        _this.socket.emit('delete-item', data);
      }; //end deleteItem


      this.deleteFriendItem = function (data) {
        _this.socket.emit('delete-friend-item', data);
      }; //end deleteFriendItem


      this.deleteSubItem = function (data) {
        _this.socket.emit('delete-sub-item', data);
      }; //end deleteSubItem


      this.deleteFriendSubItem = function (data) {
        _this.socket.emit('delete-friend-sub-item', data);
      }; //end deleteFriendSubItem


      this.completeItem = function (data) {
        _this.socket.emit('complete-item', data);
      }; //completeItem


      this.completeFriendItem = function (data) {
        _this.socket.emit('complete-friend-item', data);
      }; //completeFriendItem


      this.recompleteItem = function (data) {
        _this.socket.emit('recomplete-item', data);
      }; //recompleteItem


      this.recompleteFriendItem = function (data) {
        _this.socket.emit('recomplete-friend-item', data);
      }; //recompleteFriendItem


      this.completeTodo = function (data) {
        _this.socket.emit('complete-todo', data);
      }; //completeTodo


      this.completeFriendTodo = function (data) {
        _this.socket.emit('complete-friend-todo', data);
      }; //completeFriendTodo


      this.recompleteTodo = function (data) {
        _this.socket.emit('recomplete-todo', data);
      }; //recompleteTodo


      this.recompleteFriendTodo = function (data) {
        _this.socket.emit('recomplete-friend-todo', data);
      }; //recompleteFriendTodo


      this.completeSubItem = function (data) {
        _this.socket.emit('complete-sub-item', data);
      }; //completeSubItem


      this.completeFriendSubItem = function (data) {
        _this.socket.emit('complete-friend-sub-item', data);
      }; //completeFriendSubItem


      this.recompleteSubItem = function (data) {
        _this.socket.emit('recomplete-sub-item', data);
      }; //recompleteSubItem


      this.recompleteFriendSubItem = function (data) {
        _this.socket.emit('recomplete-friend-sub-item', data);
      }; //recompleteSubItem


      this.sendRequest = function (data) {
        _this.socket.emit('send-request', data);
      }; //end sendRequest


      this.acceptRequest = function (data) {
        console.log('accept request is emitted');

        _this.socket.emit('accept-request', data);
      }; //end acceptRequest


      this.getusers = function (data) {
        _this.socket.emit('get-users', data);
      }; //end getUsers


      this.rejectRequest = function (data) {
        _this.socket.emit('reject-request', data);
      }; //end rejectRequest


      this.unfriend = function (data) {
        _this.socket.emit('unfriend', data);
      }; //end unfriend


      this.undo = function (userId) {
        var data = {
          userId: userId
        };
        console.log('in undo socket service');

        _this.socket.emit('undo', data);
      }; //end undo


      this.searchPeople = function (name) {
        _this.socket.emit('search-user', name);
      }; //end search people


      this.socket = socket_io_client__WEBPACK_IMPORTED_MODULE_2__('http://ec2-18-219-5-23.us-east-2.compute.amazonaws.com:3000');
    };

    SocketserviceService.ctorParameters = function () {
      return [{
        type: _angular_common_http__WEBPACK_IMPORTED_MODULE_3__["HttpClient"]
      }];
    };

    SocketserviceService = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Injectable"])({
      providedIn: 'root'
    })], SocketserviceService);
    /***/
  },

  /***/
  "./src/app/todolist/error/error.component.css":
  /*!****************************************************!*\
    !*** ./src/app/todolist/error/error.component.css ***!
    \****************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodolistErrorErrorComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJlcnJvci9lcnJvci5jb21wb25lbnQuY3NzIn0= */";
    /***/
  },

  /***/
  "./src/app/todolist/error/error.component.ts":
  /*!***************************************************!*\
    !*** ./src/app/todolist/error/error.component.ts ***!
    \***************************************************/

  /*! exports provided: ErrorComponent */

  /***/
  function srcAppTodolistErrorErrorComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ErrorComponent", function () {
      return ErrorComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");

    var ErrorComponent =
    /*#__PURE__*/
    function () {
      function ErrorComponent() {
        _classCallCheck(this, ErrorComponent);
      }

      _createClass(ErrorComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }]);

      return ErrorComponent;
    }();

    ErrorComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-error',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./error.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/error/error.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./error.component.css */
      "./src/app/todolist/error/error.component.css")).default]
    })], ErrorComponent);
    /***/
  },

  /***/
  "./src/app/todolist/friend/friend.component.css":
  /*!******************************************************!*\
    !*** ./src/app/todolist/friend/friend.component.css ***!
    \******************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodolistFriendFriendComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".left{\r\n    float: left;\r\n    margin-left: 25%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.right{\r\n    float:right;\r\n    margin-right: 25%;\r\n    margin-top: 2%;\r\n}\r\n\r\n.cards{\r\n    padding:5px;\r\n    margin:auto;\r\n    \r\n}\r\n\r\n.header{\r\n    text-align: center;\r\n    background-color: #e3f2fd;\r\n    color:#24a0ed;\r\n    font-weight: 600;\r\n    font-size: xx-large;\r\n}\r\n\r\nbutton:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: all !important;\r\n  }\r\n\r\n.clear{\r\n    height:36px; \r\n    margin-right: 30px;\r\n    margin-top: 1px;\r\n    margin-bottom:2px;\r\n   border-top-right-radius: 5px;\r\n   border-bottom-left-radius: 5px;\r\n   background-color: #33FFF6;\r\n}\r\n\r\n.search{\r\n    margin:auto;\r\n    width:50%;\r\n    padding-bottom: 2%;\r\n    \r\n}\r\n\r\n.pagination{\r\n    margin-top:2%\r\n}\r\n\r\n.group{\r\n    width:25%;\r\n    display:block;\r\n    margin:auto;\r\n    margin-bottom: 10%;\r\n}\r\n\r\ninput {\r\n  border-radius: 10px;\r\n  border:none;\r\n  padding: 14px;\r\n  width: 100%;\r\n  font-size: 14px;\r\n  box-shadow: 0px 2px 12px -2px #24a0ed;\r\n  \r\n}\r\n\r\n#clear {\r\n    cursor: pointer;\r\n    margin: auto -23px;\r\n  }\r\n\r\n.icard{\r\n    background: #e3f2fd;\r\n    border-radius: 15px;\r\n    margin-top: 9px;\r\n    margin-bottom: 9px;\r\n    color: #24a0ed;\r\n    padding-top: 5px;\r\n    padding-bottom: 5px;\r\n    }\r\n\r\n.noFound{\r\n      text-align: center;\r\n      margin:auto;\r\n      font-weight: 800;\r\n      font-style: oblique;\r\n      font-family: 'Times New Roman', Times, serif;\r\n  }\r\n\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus,\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n\r\n.set{\r\n   \r\n    border-radius:15px;\r\n    margin-top:1%;\r\n    margin-bottom:1%;\r\n    box-shadow: 0px 2px 20px 1px rgba(0,0,0,0.75);\r\n     \r\n  \r\n  }\r\n\r\n.container{\r\n      position: relative;\r\n      height:70%;\r\n      width:85%;\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImZyaWVuZC9mcmllbmQuY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLFdBQVc7SUFDWCxnQkFBZ0I7SUFDaEIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxpQkFBaUI7SUFDakIsY0FBYztBQUNsQjs7QUFFQTtJQUNJLFdBQVc7SUFDWCxXQUFXOztBQUVmOztBQUVBO0lBQ0ksa0JBQWtCO0lBQ2xCLHlCQUF5QjtJQUN6QixhQUFhO0lBQ2IsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtBQUN2Qjs7QUFFQTtJQUNJLG1CQUFtQjtJQUNuQiw4QkFBOEI7RUFDaEM7O0FBRUY7SUFDSSxXQUFXO0lBQ1gsa0JBQWtCO0lBQ2xCLGVBQWU7SUFDZixpQkFBaUI7R0FDbEIsNEJBQTRCO0dBQzVCLDhCQUE4QjtHQUM5Qix5QkFBeUI7QUFDNUI7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsU0FBUztJQUNULGtCQUFrQjs7QUFFdEI7O0FBRUE7SUFDSTtBQUNKOztBQUVBO0lBQ0ksU0FBUztJQUNULGFBQWE7SUFDYixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVDO0VBQ0MsbUJBQW1CO0VBQ25CLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLGVBQWU7RUFHZixxQ0FBcUM7O0FBRXZDOztBQUVBO0lBQ0ksZUFBZTtJQUNmLGtCQUFrQjtFQUNwQjs7QUFFQTtJQUNFLG1CQUFtQjtJQUNuQixtQkFBbUI7SUFDbkIsZUFBZTtJQUNmLGtCQUFrQjtJQUNsQixjQUFjO0lBQ2QsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQjs7QUFFRjtNQUNJLGtCQUFrQjtNQUNsQixXQUFXO01BQ1gsZ0JBQWdCO01BQ2hCLG1CQUFtQjtNQUNuQiw0Q0FBNEM7RUFDaEQ7O0FBR0Y7Ozs7SUFJSSxhQUFhO0FBQ2pCOztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixhQUFhO0lBQ2IsZ0JBQWdCO0lBR2hCLDZDQUE2Qzs7O0VBRy9DOztBQUVBO01BQ0ksa0JBQWtCO01BQ2xCLFVBQVU7TUFDVixTQUFTO0VBQ2IiLCJmaWxlIjoiZnJpZW5kL2ZyaWVuZC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiLmxlZnR7XHJcbiAgICBmbG9hdDogbGVmdDtcclxuICAgIG1hcmdpbi1sZWZ0OiAyNSU7XHJcbiAgICBtYXJnaW4tdG9wOiAyJTtcclxufVxyXG5cclxuLnJpZ2h0e1xyXG4gICAgZmxvYXQ6cmlnaHQ7XHJcbiAgICBtYXJnaW4tcmlnaHQ6IDI1JTtcclxuICAgIG1hcmdpbi10b3A6IDIlO1xyXG59XHJcblxyXG4uY2FyZHN7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbi5oZWFkZXJ7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xyXG4gICAgY29sb3I6IzI0YTBlZDtcclxuICAgIGZvbnQtd2VpZ2h0OiA2MDA7XHJcbiAgICBmb250LXNpemU6IHh4LWxhcmdlO1xyXG59XHJcblxyXG5idXR0b246ZGlzYWJsZWQge1xyXG4gICAgY3Vyc29yOiBub3QtYWxsb3dlZDtcclxuICAgIHBvaW50ZXItZXZlbnRzOiBhbGwgIWltcG9ydGFudDtcclxuICB9XHJcblxyXG4uY2xlYXJ7XHJcbiAgICBoZWlnaHQ6MzZweDsgXHJcbiAgICBtYXJnaW4tcmlnaHQ6IDMwcHg7XHJcbiAgICBtYXJnaW4tdG9wOiAxcHg7XHJcbiAgICBtYXJnaW4tYm90dG9tOjJweDtcclxuICAgYm9yZGVyLXRvcC1yaWdodC1yYWRpdXM6IDVweDtcclxuICAgYm9yZGVyLWJvdHRvbS1sZWZ0LXJhZGl1czogNXB4O1xyXG4gICBiYWNrZ3JvdW5kLWNvbG9yOiAjMzNGRkY2O1xyXG59XHJcblxyXG4uc2VhcmNoe1xyXG4gICAgbWFyZ2luOmF1dG87XHJcbiAgICB3aWR0aDo1MCU7XHJcbiAgICBwYWRkaW5nLWJvdHRvbTogMiU7XHJcbiAgICBcclxufVxyXG5cclxuLnBhZ2luYXRpb257XHJcbiAgICBtYXJnaW4tdG9wOjIlXHJcbn1cclxuXHJcbi5ncm91cHtcclxuICAgIHdpZHRoOjI1JTtcclxuICAgIGRpc3BsYXk6YmxvY2s7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDEwJTtcclxufVxyXG5cclxuIGlucHV0IHtcclxuICBib3JkZXItcmFkaXVzOiAxMHB4O1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgd2lkdGg6IDEwMCU7XHJcbiAgZm9udC1zaXplOiAxNHB4O1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IC0ycHggIzI0YTBlZDtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMTJweCAtMnB4ICMyNGEwZWQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IC0ycHggIzI0YTBlZDtcclxuICBcclxufVxyXG5cclxuI2NsZWFyIHtcclxuICAgIGN1cnNvcjogcG9pbnRlcjtcclxuICAgIG1hcmdpbjogYXV0byAtMjNweDtcclxuICB9XHJcblxyXG4gIC5pY2FyZHtcclxuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XHJcbiAgICBib3JkZXItcmFkaXVzOiAxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDogOXB4O1xyXG4gICAgbWFyZ2luLWJvdHRvbTogOXB4O1xyXG4gICAgY29sb3I6ICMyNGEwZWQ7XHJcbiAgICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gICAgcGFkZGluZy1ib3R0b206IDVweDtcclxuICAgIH1cclxuXHJcbiAgLm5vRm91bmR7XHJcbiAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcclxuICAgICAgbWFyZ2luOmF1dG87XHJcbiAgICAgIGZvbnQtd2VpZ2h0OiA4MDA7XHJcbiAgICAgIGZvbnQtc3R5bGU6IG9ibGlxdWU7XHJcbiAgICAgIGZvbnQtZmFtaWx5OiAnVGltZXMgTmV3IFJvbWFuJywgVGltZXMsIHNlcmlmO1xyXG4gIH1cclxuXHJcblxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXR7XHJcbiAgIFxyXG4gICAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gICAgbWFyZ2luLXRvcDoxJTtcclxuICAgIG1hcmdpbi1ib3R0b206MSU7XHJcbiAgICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMjBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gICAgIFxyXG4gIFxyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lcntcclxuICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gICAgICBoZWlnaHQ6NzAlO1xyXG4gICAgICB3aWR0aDo4NSU7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todolist/friend/friend.component.ts":
  /*!*****************************************************!*\
    !*** ./src/app/todolist/friend/friend.component.ts ***!
    \*****************************************************/

  /*! exports provided: FriendComponent */

  /***/
  function srcAppTodolistFriendFriendComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "FriendComponent", function () {
      return FriendComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__);
    /* harmony import */


    var src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/socketservice.service */
    "./src/app/socketservice.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var FriendComponent =
    /*#__PURE__*/
    function () {
      function FriendComponent(AppService, toastr, router, socketService, spinner) {
        var _this2 = this;

        _classCallCheck(this, FriendComponent);

        this.AppService = AppService;
        this.toastr = toastr;
        this.router = router;
        this.socketService = socketService;
        this.spinner = spinner;
        this.users = [];
        this.friendRequests = []; // public displayedUsers = [];

        this.searchedUsers = [];
        this.loading = true;
        this.searchingValue = '';
        this.pageValue = 0;
        this.limit = 8;
        this.searching = false;

        this.check = function () {
          if (!_this2.AppService.getUserInfo()) {
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('AuthToken');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userId');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('userName');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].delete('email');
            localStorage.clear();

            _this2.router.navigate(['/login']);
          }
        };

        this.isLoggedOut = function () {
          setInterval(function () {
            _this2.check();
          }, 500);
        }; // public getDisplayedUsers = ()=>{
        //   console.log(this.users[0].userId)
        //   console.log('userdetails userId',Cookie.get('userId'));
        //   for(let i=0; i<this.users.length;i++) {
        //     console.log(this.users[i].userId)
        //    let user:User = this.users[i] ;
        //     if( Cookie.get('userId') != user.userId)
        //     {
        //       this.displayedUsers.push(this.users[i]);
        //     }
        //   }
        //   console.log('after splicing',this.displayedUsers);
        // }


        this.checkRequestSent = function (user) {
          if (_this2.userDetails && _this2.userDetails.friendList && _this2.userDetails.friendList.findIndex(function (friend) {
            return friend.id === user.userId && friend.active === false;
          }) == -1) return false;
          return true;
        };

        this.checkFriend = function (user) {
          if (_this2.userDetails && _this2.userDetails.friendList && _this2.userDetails.friendList.findIndex(function (friend) {
            return friend.id === user.userId && friend.active === true;
          }) == -1) return false;
          return true;
        };

        this.getUser = function () {
          _this2.AppService.getUser().subscribe(function (data) {
            _this2.userDetails = data.data;
            console.log('user details', _this2.userDetails);
          }, function (err) {
            //this.toastr.error('error occured');
            _this2.router.navigate(['/error']);
          });
        };

        this.getUsers = function (pageValue, limit) {
          var data = {
            pageValue: pageValue,
            limit: limit
          };

          _this2.socketService.getusers(data);

          _this2.socketService.getUsersResponse().then(function (data) {
            console.log('getuser responses is called ');

            if (data.status == 200) {
              _this2.loading = false;
              _this2.users = data.data.users;
              _this2.Usercount = data.data.userCount;
              console.log('usercount', _this2.Usercount);

              _this2.users.splice(_this2.users.findIndex(function (user) {
                return user.userId === ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId');
              }), 1);
            } else {
              _this2.toastr.error(data.message);
            }
          });
        }; // public getUsers = (pageValue, limit) => {
        //   this.AppService.getAllUsers(pageValue, limit).subscribe(
        //     (data) => {
        //       if (data.status == 200) {
        //         this.loading = false;
        //         this.users = data.data.users;
        //         console.log('all users',this.users);
        //         this.users.splice(this.users.findIndex(user => user.userId === Cookie.get('userId')), 1)
        //         console.log('after splicing',this.users);
        //         this.Usercount = data.data.userCount;
        //        }
        //        else if(data.status==300){
        //         this.toastr.error('unauthorized access');
        //         this.router.navigate(['/login']);
        //        }
        //        else
        //       {
        //         this.toastr.error(data.message);
        //       }
        //     },
        //     (err) => {
        //       console.log(err);
        //       this.toastr.error('some error occured');
        //     });
        // }//end getUsers


        this.sendRequest = function (user) {
          var data = {
            senderId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'),
            senderName: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userName'),
            recieverId: user.userId,
            recieverName: user.userName
          };
          console.log('send request', user);

          _this2.socketService.sendRequest(data);

          _this2.sendSub = _this2.socketService.sendRequestResponse().subscribe(function (data) {
            _this2.userDetails = data;
            console.log(data);
          });
        };

        this.errOccured = function () {
          _this2.err = _this2.socketService.errOccured().subscribe(function (data) {
            _this2.toastr.warning(data.message);

            console.log(data.data);
          });
        };

        this.acceptedRequest = function () {
          _this2.accept = _this2.socketService.acceptedRequest().subscribe(function (data) {
            console.log(data);

            var i = _this2.userDetails.friendList.findIndex(function (user) {
              return user.id == data.recieverId;
            });

            _this2.userDetails.friendList[i].active = true;
            console.log(_this2.userDetails);
          });
        };

        this.rejectedRequest = function () {
          _this2.reject = _this2.socketService.rejectedRequest().subscribe(function (data) {
            console.log(data);

            var i = _this2.userDetails.friendList.findIndex(function (user) {
              return user.id == data.recieverId;
            });

            _this2.userDetails.friendList.splice(i, 1);
          });
        };

        this.unfriend = function (user) {
          var data = {
            userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId'),
            friendId: user.userId
          };

          _this2.socketService.unfriend(data);

          _this2.unfriendSub = _this2.socketService.unfriendResponse().subscribe(function (data) {
            _this2.userDetails = data;
            console.log('unfriend response', data);
          });
        };

        this.unfriendAck = function () {
          _this2.unfriendAckSub = _this2.socketService.unfriendAck().subscribe(function (data) {
            console.log('unfriendAck', data);
            _this2.userDetails = data;
          });
        };

        this.search = function () {
          console.log('in search', _this2.searchingValue);
          _this2.searching = true; //this.searchingValue = this.searchInput.nativeElement.value + data.key;

          _this2.socketService.searchPeople(_this2.searchingValue);

          _this2.searchResult();
        }; //end search


        this.searchResult = function () {
          _this2.socketService.searchedResult().subscribe(function (data) {
            _this2.searchedUsers = data.filter(function (user) {
              return user.userId != ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_6__["Cookie"].get('userId');
            });
            console.log(_this2.searchedUsers);
          });
        }; //end searchresult


        this.unsearch = function () {
          _this2.searchingValue = '';
          _this2.searchedUsers = [];
          _this2.searching = false;
        }; //end unsearch


        this.getNextPages = function () {
          _this2.pageValue++;

          _this2.getUsers(_this2.pageValue, _this2.limit);
        }; //end getnextpages


        this.getPrevPages = function () {
          _this2.pageValue--;

          _this2.getUsers(_this2.pageValue, _this2.limit);
        }; //end getprevpages


        this.checkNext = function () {
          if ((_this2.pageValue + 1) * _this2.limit >= _this2.Usercount) {
            return true;
          } else return false;
        }; //end checknext

      }

      _createClass(FriendComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedOut();
          this.spinner.show();
          this.getUsers(this.pageValue, this.limit);
          this.getUser();
          this.acceptedRequest();
          this.rejectedRequest();
          this.errOccured();
          this.unfriendAck();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.accept) this.accept.unsubscribe();
          if (this.reject) this.reject.unsubscribe();
          if (this.unfriendSub) this.unfriendSub.unsubscribe();
          if (this.unfriendAckSub) this.unfriendAckSub.unsubscribe();
          if (this.sendSub) this.sendSub.unsubscribe();
          if (this.err) this.err.unsubscribe();
        }
      }]);

      return FriendComponent;
    }();

    FriendComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_5__["Router"]
      }, {
        type: src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_7__["SocketserviceService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }];
    };

    FriendComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-friend',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./friend.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/friend/friend.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('users', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(600)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'translateX(100px)',
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./friend.component.css */
      "./src/app/todolist/friend/friend.component.css")).default]
    })], FriendComponent);
    /***/
  },

  /***/
  "./src/app/todolist/multi-user/multi-user.component.css":
  /*!**************************************************************!*\
    !*** ./src/app/todolist/multi-user/multi-user.component.css ***!
    \**************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodolistMultiUserMultiUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "@import url(https://fonts.googleapis.com/css?family=Lato:400,700);\r\n*, *:before, *:after {\r\n  box-sizing: border-box;\r\n}\r\nbody {\r\n  background: #C5DDEB;\r\n  font: 14px/20px \"Lato\", Arial, sans-serif;\r\n  padding: 40px 0;\r\n  color: white;\r\n}\r\n.container-fluid{\r\n \r\n  /* background: #444753;  */\r\n  border-radius: 5px;\r\n}\r\n.people-list {\r\n  width: 90%;\r\n  float: left;\r\n  height: 100vh;\r\n  margin:auto;\r\n  overflow-y: scroll;\r\n}\r\n.people-list .search {\r\n  padding: 20px;\r\n  \r\n\r\n}\r\n.people-list input {\r\n  border-radius: 25px;\r\n  border:none;\r\n  /* border: solid 2px #434651; */\r\n  padding: 14px;\r\n  /* color: white; */\r\n  /* background:aquamarine; */\r\n  width: 90%;\r\n  margin-bottom:5%;\r\n  box-shadow: 0px 2px 12px -2px #24a0ed;\r\n  font-size: 14px;\r\n}\r\n.people-list .fa-search {\r\n  position: relative;\r\n  left: -25px;\r\n}\r\n.people-list ul {\r\n  padding: 20px;\r\n  height: 95vh;\r\n  list-style-type:none;\r\n  /* margin-left: 10%; */\r\n  \r\n}\r\n.people-list ul li {\r\n  padding-bottom: 10px;\r\n  padding-top:10px;\r\n margin:auto;\r\n margin-top:5%;\r\n  margin-bottom:5%;\r\n  background-color: #e3f2fd;\r\n  border:none;\r\n  width:100%;\r\n  height:10%;\r\n  border-radius: 10%;\r\n  cursor: pointer;\r\n  box-shadow: 0px 2px 12px -2px #24a0ed;\r\n}\r\n.people-list img {\r\n  float: left;\r\n}\r\n.people-list .about {\r\n  float: left;\r\n  margin-top: 8px;\r\n  \r\n}\r\n.people-list .about {\r\n  padding-left: 8px;\r\n}\r\n.people-list .status {\r\n  color: #92959E;\r\n}\r\n/* .people-list .input{\r\n    background-color: white;\r\n} */\r\n.chat {\r\n  width: 100%;\r\n  height: 100vh;\r\n  float: left;\r\n  background: #F2F5F8;\r\n  margin:auto;\r\n  border-top-right-radius: 5px;\r\n  border-bottom-right-radius: 5px;\r\n  color: #434651;\r\n  overflow-y: scroll;\r\n}\r\n.chat .chat-header {\r\n  padding: 20px;\r\n  border-bottom: 2px solid white;\r\n}\r\n.chat .chat-header img {\r\n  float: left;\r\n}\r\n.chat .chat-header .chat-about {\r\n  float: left;\r\n  padding-left: 10px;\r\n  margin-top: 6px;\r\n}\r\n.chat .chat-header .chat-with {\r\n  font-weight: bold;\r\n  font-size: 16px;\r\n  color:#24a0ed;\r\n}\r\n.chat .chat-header .chat-num-messages {\r\n  color: #24a0ed;\r\n}\r\n.chat .chat-header .fa-undo-alt {\r\n  float: right;\r\n  font-size: 20px;\r\n  margin-top: 12px;\r\n  margin-left:5%;\r\n  /* margin-left:10%; */\r\n  cursor: pointer;\r\n  color:#24a0ed;\r\n}\r\n.chat .chat-header .fa-arrow-left {\r\n  float: left;\r\n  font-size: 20px;\r\n  margin-top: 12px;\r\n  margin-left:5%;\r\n  /* margin-left:10%; */\r\n  cursor: pointer;\r\n  color:#24a0ed;\r\n}\r\n.chat .chat-header .fa-plus-circle{\r\n  float: right;\r\n  font-size: 20px;\r\n  margin-top: 12px;\r\n  margin-left: 5%;\r\n  cursor: pointer; \r\n  color:#24a0ed;\r\n}\r\n.todos{\r\n  width : 75%;\r\n  height:40%;\r\n  margin:auto;\r\n  margin-bottom: 5px;\r\n}\r\n.todos li{\r\n  /* border:2px solid; */\r\n  border-radius: 20px;\r\n  background: #e3f2fd;\r\n  color:#24a0ed;\r\n}\r\n.buttons{\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n.button{\r\n  margin:5px;;\r\n  float: right;\r\n  cursor: pointer;\r\n}\r\n.buttonc{\r\n  float:left;\r\n  cursor: pointer;\r\n}\r\n.task{\r\n  margin-left:5%;\r\n  margin-top:5px;\r\n}\r\n.subtask{\r\n  margin-left:5%;\r\n  margin-top: 5px;\r\n}\r\n.online, .offline, .me {\r\n  margin-right: 3px;\r\n  font-size: 10px;\r\n}\r\n.online {\r\n  color: #86BB71;\r\n}\r\n.offline {\r\n  color: #E38968;\r\n}\r\n.me {\r\n  color: #94C2ED;\r\n}\r\n.align-left {\r\n  text-align: left;\r\n}\r\n.align-right {\r\n  text-align: right;\r\n}\r\n.float-right {\r\n  float: right;\r\n}\r\n.clearfix:after {\r\n  visibility: hidden;\r\n  display: block;\r\n  font-size: 0;\r\n  content: \" \";\r\n  clear: both;\r\n  height: 0;\r\n}\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus,\r\nbutton:focus {\r\n    outline: none;\r\n}\r\n.set{\r\n   \r\n  border-radius:15px;\r\n  margin-top:auto;\r\n  margin-bottom: auto;\r\n  box-shadow: 0px 2px 20px 1px rgba(0,0,0,0.75);\r\n   \r\n\r\n}\r\n.container {\r\n  position: relative;\r\n \r\n  \r\n}\r\n.animate{\r\n  -webkit-transition: all 0.2s ease-in-out;\r\n  transition: all 0.2s ease-in-out;\r\n}\r\n.animate:hover{\r\n  -webkit-transform: scale(1.04);\r\n          transform: scale(1.04);\r\n  \r\n}\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm11bHRpLXVzZXIvbXVsdGktdXNlci5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLGlFQUFpRTtBQUNqRTtFQUNFLHNCQUFzQjtBQUN4QjtBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLHlDQUF5QztFQUN6QyxlQUFlO0VBQ2YsWUFBWTtBQUNkO0FBRUE7O0VBRUUsMEJBQTBCO0VBQzFCLGtCQUFrQjtBQUNwQjtBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLGtCQUFrQjtBQUNwQjtBQUNBO0VBQ0UsYUFBYTs7O0FBR2Y7QUFDQTtFQUNFLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsK0JBQStCO0VBQy9CLGFBQWE7RUFDYixrQkFBa0I7RUFDbEIsMkJBQTJCO0VBQzNCLFVBQVU7RUFDVixnQkFBZ0I7RUFHaEIscUNBQXFDO0VBQ3JDLGVBQWU7QUFDakI7QUFDQTtFQUNFLGtCQUFrQjtFQUNsQixXQUFXO0FBQ2I7QUFDQTtFQUNFLGFBQWE7RUFDYixZQUFZO0VBQ1osb0JBQW9CO0VBQ3BCLHNCQUFzQjs7QUFFeEI7QUFDQTtFQUNFLG9CQUFvQjtFQUNwQixnQkFBZ0I7Q0FDakIsV0FBVztDQUNYLGFBQWE7RUFDWixnQkFBZ0I7RUFDaEIseUJBQXlCO0VBQ3pCLFdBQVc7RUFDWCxVQUFVO0VBQ1YsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixlQUFlO0VBR2YscUNBQXFDO0FBQ3ZDO0FBRUE7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxlQUFlOztBQUVqQjtBQUNBO0VBQ0UsaUJBQWlCO0FBQ25CO0FBQ0E7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7O0dBRUc7QUFFSDtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2IsV0FBVztFQUNYLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsNEJBQTRCO0VBQzVCLCtCQUErQjtFQUMvQixjQUFjO0VBQ2Qsa0JBQWtCO0FBQ3BCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsOEJBQThCO0FBQ2hDO0FBQ0E7RUFDRSxXQUFXO0FBQ2I7QUFDQTtFQUNFLFdBQVc7RUFDWCxrQkFBa0I7RUFDbEIsZUFBZTtBQUNqQjtBQUNBO0VBQ0UsaUJBQWlCO0VBQ2pCLGVBQWU7RUFDZixhQUFhO0FBQ2Y7QUFDQTtFQUNFLGNBQWM7QUFDaEI7QUFDQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBO0VBQ0UsV0FBVztFQUNYLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLHFCQUFxQjtFQUNyQixlQUFlO0VBQ2YsYUFBYTtBQUNmO0FBR0E7RUFDRSxZQUFZO0VBQ1osZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixlQUFlO0VBQ2YsZUFBZTtFQUNmLGFBQWE7QUFDZjtBQUVBO0VBQ0UsV0FBVztFQUNYLFVBQVU7RUFDVixXQUFXO0VBQ1gsa0JBQWtCO0FBQ3BCO0FBRUE7RUFDRSxzQkFBc0I7RUFDdEIsbUJBQW1CO0VBQ25CLG1CQUFtQjtFQUNuQixhQUFhO0FBQ2Y7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxVQUFVO0VBQ1YsWUFBWTtFQUNaLGVBQWU7QUFDakI7QUFFQTtFQUNFLFVBQVU7RUFDVixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0VBQ2QsY0FBYztBQUNoQjtBQUNBO0VBQ0UsY0FBYztFQUNkLGVBQWU7QUFDakI7QUFHQTtFQUNFLGlCQUFpQjtFQUNqQixlQUFlO0FBQ2pCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxjQUFjO0FBQ2hCO0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7QUFFQTtFQUNFLGlCQUFpQjtBQUNuQjtBQUVBO0VBQ0UsWUFBWTtBQUNkO0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsY0FBYztFQUNkLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLFNBQVM7QUFDWDtBQUVBOzs7O0lBSUksYUFBYTtBQUNqQjtBQUVBOztFQUVFLGtCQUFrQjtFQUNsQixlQUFlO0VBQ2YsbUJBQW1CO0VBR25CLDZDQUE2Qzs7O0FBRy9DO0FBRUE7RUFDRSxrQkFBa0I7OztBQUdwQjtBQUVBO0VBQ0Usd0NBQWdDO0VBQWhDLGdDQUFnQztBQUNsQztBQUNBO0VBQ0UsOEJBQXNCO1VBQXRCLHNCQUFzQjs7QUFFeEIiLCJmaWxlIjoibXVsdGktdXNlci9tdWx0aS11c2VyLmNvbXBvbmVudC5jc3MiLCJzb3VyY2VzQ29udGVudCI6WyJAaW1wb3J0IHVybChodHRwczovL2ZvbnRzLmdvb2dsZWFwaXMuY29tL2Nzcz9mYW1pbHk9TGF0bzo0MDAsNzAwKTtcclxuKiwgKjpiZWZvcmUsICo6YWZ0ZXIge1xyXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XHJcbn1cclxuXHJcbmJvZHkge1xyXG4gIGJhY2tncm91bmQ6ICNDNURERUI7XHJcbiAgZm9udDogMTRweC8yMHB4IFwiTGF0b1wiLCBBcmlhbCwgc2Fucy1zZXJpZjtcclxuICBwYWRkaW5nOiA0MHB4IDA7XHJcbiAgY29sb3I6IHdoaXRlO1xyXG59XHJcblxyXG4uY29udGFpbmVyLWZsdWlke1xyXG4gXHJcbiAgLyogYmFja2dyb3VuZDogIzQ0NDc1MzsgICovXHJcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xyXG59XHJcblxyXG4ucGVvcGxlLWxpc3Qge1xyXG4gIHdpZHRoOiA5MCU7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgaGVpZ2h0OiAxMDB2aDtcclxuICBtYXJnaW46YXV0bztcclxuICBvdmVyZmxvdy15OiBzY3JvbGw7XHJcbn1cclxuLnBlb3BsZS1saXN0IC5zZWFyY2gge1xyXG4gIHBhZGRpbmc6IDIwcHg7XHJcbiAgXHJcblxyXG59XHJcbi5wZW9wbGUtbGlzdCBpbnB1dCB7XHJcbiAgYm9yZGVyLXJhZGl1czogMjVweDtcclxuICBib3JkZXI6bm9uZTtcclxuICAvKiBib3JkZXI6IHNvbGlkIDJweCAjNDM0NjUxOyAqL1xyXG4gIHBhZGRpbmc6IDE0cHg7XHJcbiAgLyogY29sb3I6IHdoaXRlOyAqL1xyXG4gIC8qIGJhY2tncm91bmQ6YXF1YW1hcmluZTsgKi9cclxuICB3aWR0aDogOTAlO1xyXG4gIG1hcmdpbi1ib3R0b206NSU7XHJcbiAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDEycHggLTJweCAjMjRhMGVkO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IC0ycHggIzI0YTBlZDtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDEycHggLTJweCAjMjRhMGVkO1xyXG4gIGZvbnQtc2l6ZTogMTRweDtcclxufVxyXG4ucGVvcGxlLWxpc3QgLmZhLXNlYXJjaCB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gIGxlZnQ6IC0yNXB4O1xyXG59XHJcbi5wZW9wbGUtbGlzdCB1bCB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBoZWlnaHQ6IDk1dmg7XHJcbiAgbGlzdC1zdHlsZS10eXBlOm5vbmU7XHJcbiAgLyogbWFyZ2luLWxlZnQ6IDEwJTsgKi9cclxuICBcclxufVxyXG4ucGVvcGxlLWxpc3QgdWwgbGkge1xyXG4gIHBhZGRpbmctYm90dG9tOiAxMHB4O1xyXG4gIHBhZGRpbmctdG9wOjEwcHg7XHJcbiBtYXJnaW46YXV0bztcclxuIG1hcmdpbi10b3A6NSU7XHJcbiAgbWFyZ2luLWJvdHRvbTo1JTtcclxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZTNmMmZkO1xyXG4gIGJvcmRlcjpub25lO1xyXG4gIHdpZHRoOjEwMCU7XHJcbiAgaGVpZ2h0OjEwJTtcclxuICBib3JkZXItcmFkaXVzOiAxMCU7XHJcbiAgY3Vyc29yOiBwb2ludGVyO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IC0ycHggIzI0YTBlZDtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMTJweCAtMnB4ICMyNGEwZWQ7XHJcbiAgYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IC0ycHggIzI0YTBlZDtcclxufVxyXG4gXHJcbi5wZW9wbGUtbGlzdCBpbWcge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG59XHJcbi5wZW9wbGUtbGlzdCAuYWJvdXQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIG1hcmdpbi10b3A6IDhweDtcclxuICBcclxufVxyXG4ucGVvcGxlLWxpc3QgLmFib3V0IHtcclxuICBwYWRkaW5nLWxlZnQ6IDhweDtcclxufVxyXG4ucGVvcGxlLWxpc3QgLnN0YXR1cyB7XHJcbiAgY29sb3I6ICM5Mjk1OUU7XHJcbn1cclxuXHJcbi8qIC5wZW9wbGUtbGlzdCAuaW5wdXR7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiB3aGl0ZTtcclxufSAqL1xyXG5cclxuLmNoYXQge1xyXG4gIHdpZHRoOiAxMDAlO1xyXG4gIGhlaWdodDogMTAwdmg7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbiAgYmFja2dyb3VuZDogI0YyRjVGODtcclxuICBtYXJnaW46YXV0bztcclxuICBib3JkZXItdG9wLXJpZ2h0LXJhZGl1czogNXB4O1xyXG4gIGJvcmRlci1ib3R0b20tcmlnaHQtcmFkaXVzOiA1cHg7XHJcbiAgY29sb3I6ICM0MzQ2NTE7XHJcbiAgb3ZlcmZsb3cteTogc2Nyb2xsO1xyXG59XHJcbi5jaGF0IC5jaGF0LWhlYWRlciB7XHJcbiAgcGFkZGluZzogMjBweDtcclxuICBib3JkZXItYm90dG9tOiAycHggc29saWQgd2hpdGU7XHJcbn1cclxuLmNoYXQgLmNoYXQtaGVhZGVyIGltZyB7XHJcbiAgZmxvYXQ6IGxlZnQ7XHJcbn1cclxuLmNoYXQgLmNoYXQtaGVhZGVyIC5jaGF0LWFib3V0IHtcclxuICBmbG9hdDogbGVmdDtcclxuICBwYWRkaW5nLWxlZnQ6IDEwcHg7XHJcbiAgbWFyZ2luLXRvcDogNnB4O1xyXG59XHJcbi5jaGF0IC5jaGF0LWhlYWRlciAuY2hhdC13aXRoIHtcclxuICBmb250LXdlaWdodDogYm9sZDtcclxuICBmb250LXNpemU6IDE2cHg7XHJcbiAgY29sb3I6IzI0YTBlZDtcclxufVxyXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmNoYXQtbnVtLW1lc3NhZ2VzIHtcclxuICBjb2xvcjogIzI0YTBlZDtcclxufVxyXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmZhLXVuZG8tYWx0IHtcclxuICBmbG9hdDogcmlnaHQ7XHJcbiAgZm9udC1zaXplOiAyMHB4O1xyXG4gIG1hcmdpbi10b3A6IDEycHg7XHJcbiAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgLyogbWFyZ2luLWxlZnQ6MTAlOyAqL1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBjb2xvcjojMjRhMGVkO1xyXG59XHJcblxyXG4uY2hhdCAuY2hhdC1oZWFkZXIgLmZhLWFycm93LWxlZnQge1xyXG4gIGZsb2F0OiBsZWZ0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OjUlO1xyXG4gIC8qIG1hcmdpbi1sZWZ0OjEwJTsgKi9cclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbiAgY29sb3I6IzI0YTBlZDtcclxufVxyXG5cclxuXHJcbi5jaGF0IC5jaGF0LWhlYWRlciAuZmEtcGx1cy1jaXJjbGV7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGZvbnQtc2l6ZTogMjBweDtcclxuICBtYXJnaW4tdG9wOiAxMnB4O1xyXG4gIG1hcmdpbi1sZWZ0OiA1JTtcclxuICBjdXJzb3I6IHBvaW50ZXI7IFxyXG4gIGNvbG9yOiMyNGEwZWQ7XHJcbn1cclxuXHJcbi50b2Rvc3tcclxuICB3aWR0aCA6IDc1JTtcclxuICBoZWlnaHQ6NDAlO1xyXG4gIG1hcmdpbjphdXRvO1xyXG4gIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRvZG9zIGxpe1xyXG4gIC8qIGJvcmRlcjoycHggc29saWQ7ICovXHJcbiAgYm9yZGVyLXJhZGl1czogMjBweDtcclxuICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xyXG4gIGNvbG9yOiMyNGEwZWQ7XHJcbn1cclxuXHJcbi5idXR0b25ze1xyXG4gIGZsb2F0OiByaWdodDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgbWFyZ2luOjVweDs7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxufVxyXG5cclxuLmJ1dHRvbmN7XHJcbiAgZmxvYXQ6bGVmdDtcclxuICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNre1xyXG4gIG1hcmdpbi1sZWZ0OjUlO1xyXG4gIG1hcmdpbi10b3A6NXB4O1xyXG59XHJcbi5zdWJ0YXNre1xyXG4gIG1hcmdpbi1sZWZ0OjUlO1xyXG4gIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuXHJcbi5vbmxpbmUsIC5vZmZsaW5lLCAubWUge1xyXG4gIG1hcmdpbi1yaWdodDogM3B4O1xyXG4gIGZvbnQtc2l6ZTogMTBweDtcclxufVxyXG5cclxuLm9ubGluZSB7XHJcbiAgY29sb3I6ICM4NkJCNzE7XHJcbn1cclxuXHJcbi5vZmZsaW5lIHtcclxuICBjb2xvcjogI0UzODk2ODtcclxufVxyXG5cclxuLm1lIHtcclxuICBjb2xvcjogIzk0QzJFRDtcclxufVxyXG5cclxuLmFsaWduLWxlZnQge1xyXG4gIHRleHQtYWxpZ246IGxlZnQ7XHJcbn1cclxuXHJcbi5hbGlnbi1yaWdodCB7XHJcbiAgdGV4dC1hbGlnbjogcmlnaHQ7XHJcbn1cclxuXHJcbi5mbG9hdC1yaWdodCB7XHJcbiAgZmxvYXQ6IHJpZ2h0O1xyXG59XHJcblxyXG4uY2xlYXJmaXg6YWZ0ZXIge1xyXG4gIHZpc2liaWxpdHk6IGhpZGRlbjtcclxuICBkaXNwbGF5OiBibG9jaztcclxuICBmb250LXNpemU6IDA7XHJcbiAgY29udGVudDogXCIgXCI7XHJcbiAgY2xlYXI6IGJvdGg7XHJcbiAgaGVpZ2h0OiAwO1xyXG59XHJcblxyXG5pbnB1dDpmb2N1cyxcclxuc2VsZWN0OmZvY3VzLFxyXG50ZXh0YXJlYTpmb2N1cyxcclxuYnV0dG9uOmZvY3VzIHtcclxuICAgIG91dGxpbmU6IG5vbmU7XHJcbn1cclxuXHJcbi5zZXR7XHJcbiAgIFxyXG4gIGJvcmRlci1yYWRpdXM6MTVweDtcclxuICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgbWFyZ2luLWJvdHRvbTogYXV0bztcclxuICAtd2Via2l0LWJveC1zaGFkb3c6IDBweCAycHggMjBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMjBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICBib3gtc2hhZG93OiAwcHggMnB4IDIwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgIFxyXG5cclxufVxyXG5cclxuLmNvbnRhaW5lciB7XHJcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xyXG4gXHJcbiAgXHJcbn1cclxuXHJcbi5hbmltYXRle1xyXG4gIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG59XHJcbi5hbmltYXRlOmhvdmVye1xyXG4gIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XHJcbiAgXHJcbn1cclxuIl19 */";
    /***/
  },

  /***/
  "./src/app/todolist/multi-user/multi-user.component.ts":
  /*!*************************************************************!*\
    !*** ./src/app/todolist/multi-user/multi-user.component.ts ***!
    \*************************************************************/

  /*! exports provided: MultiUserComponent */

  /***/
  function srcAppTodolistMultiUserMultiUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "MultiUserComponent", function () {
      return MultiUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! src/app/socketservice.service */
    "./src/app/socketservice.service.ts");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var MultiUserComponent =
    /*#__PURE__*/
    function () {
      function MultiUserComponent(AppService, toastr, router, SocketService, spinner) {
        var _this3 = this;

        _classCallCheck(this, MultiUserComponent);

        this.AppService = AppService;
        this.toastr = toastr;
        this.router = router;
        this.SocketService = SocketService;
        this.spinner = spinner;
        this.loading = false;
        this.friends = [];
        this.currentUserTodos = [];
        this.userFilter = {
          name: ''
        };
        this.display = false;
        this.mdisplay = true;

        this.check = function () {
          if (!_this3.AppService.getUserInfo()) {
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('AuthToken');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userId');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userName');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('email');
            localStorage.clear();

            _this3.router.navigate(['/login']);
          }
        };

        this.isLoggedOut = function () {
          setInterval(function () {
            _this3.check();
          }, 500);
        };

        this.undo = function () {
          console.log('in undo');

          _this3.SocketService.undo(_this3.currentUserId);
        };

        this.undoResponse = function () {
          _this3.undos = _this3.SocketService.undoResponse().subscribe(function (data) {
            console.log('undo response', data);

            if (data.userId == _this3.currentUserId) {
              if (data.created == true && data.deleted == false) {
                var index = _this3.currentUserTodos.findIndex(function (todo) {
                  return todo.todoId === data.todoId;
                });

                _this3.currentUserTodos.splice(index, 1);
              }

              if (data.created == false && data.deleted == false) {
                var _index = _this3.currentUserTodos.findIndex(function (todo) {
                  return todo.todoId === data.todoId;
                });

                _this3.currentUserTodos[_index] = data.todo;
              }

              if (data.created == false && data.deleted == true) {
                _this3.currentUserTodos.push(data.todo);
              }
            }
          });
        };

        this.getTodoId = function (todoId) {
          _this3.todoId = todoId;
        };

        this.getTodo = function (todo) {
          _this3.currentTodo = todo;
          console.log('current todo', _this3.currentTodo);
        };

        this.getItemId = function (itemId) {
          _this3.itemId = itemId;
        };

        this.getSubItemId = function (subItemId) {
          _this3.subItemId = subItemId;
        };

        this.checkStatus = function () {
          if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('AuthToken') === undefined || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('AuthToken') === '' || ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('AuthToken') === null) {
            _this3.router.navigate(['/']);

            return false;
          } else {
            return true;
          }
        }; // end checkStatus


        this.verifyUserConfirmation = function () {
          console.log('verify user confirmation is called');

          _this3.SocketService.verifyUser().subscribe(function (data) {});
        }; //end verifyUserConfirmation


        this.setUser = function () {
          console.log('currentUserId', _this3.currentUserId);

          _this3.SocketService.setuser(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('AuthToken'));
        }; //end setUser


        this.getUser = function () {
          _this3.AppService.getUser().subscribe(function (data) {
            _this3.userDetails = data.data;
            _this3.friends = _this3.userDetails.friendList.filter(function (user) {
              return user.active == true;
            });
            console.log('friends', _this3.friends);
            console.log('user details', _this3.userDetails);
          }, function (err) {
            //this.toastr.error('some error occured');
            _this3.router.navigate(['/error']);
          });
        };

        this.getTodos = function (friend) {
          _this3.display = true;
          _this3.mdisplay = false;
          console.log('mdisplay', _this3.mdisplay);
          _this3.currentUserName = friend.name;
          _this3.currentUserId = friend.id;

          _this3.AppService.getTodos(friend.id).subscribe(function (data) {
            _this3.loading = false;
            console.log('get todos is called');

            if (data.status == 200) {
              _this3.currentUserTodos = data.data;
              _this3.todoCount = _this3.currentUserTodos.length;
              console.log(_this3.currentUserTodos);
            } else if (data.status == 404) {
              _this3.toastr.warning('no lists found');

              _this3.currentUserTodos = [];
              _this3.todoCount = 0;
            }
          }, function (err) {
            _this3.currentUserTodos = []; //this.toastr.error('some error occured');

            _this3.router.navigate(['/error']);
          });
        };

        this.createFriendTodo = function (todoName, form) {
          if (todoName == '' || todoName == undefined || todoName == null) {
            _this3.toastr.warning('enter todo Title ');
          } else {
            var todoDetail = {
              todoTitle: todoName,
              userId: _this3.currentUserId,
              userName: _this3.currentUserName,
              otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
            };
            console.log('in createFriendTodo ');

            _this3.SocketService.createFriendList(todoDetail);

            form.reset();
          }
        };

        this.deleteFriendTodo = function (todo) {
          var todoDetail = {
            todoId: todo.todoId,
            todo: todo,
            userId: _this3.currentUserId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };
          console.log('deleteFriendTodo ', todoDetail);

          _this3.SocketService.deleteFriendTodo(todoDetail);
        };

        this.updateFriendTodo = function (todoName, form) {
          if (todoName == '' || todoName == undefined || todoName == null) {
            _this3.toastr.warning('enter todo Title ');
          } else {
            var todoDetail = {
              todoId: _this3.todoId,
              todo: _this3.currentTodo,
              userId: _this3.currentUserId,
              todoTitle: todoName,
              userName: _this3.currentUserName,
              otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
            };

            _this3.SocketService.updateFriendTodo(todoDetail);

            form.reset();
          }
        };

        this.addFriendItem = function (taskName, form) {
          if (taskName == '' || taskName == undefined || taskName == null) {
            _this3.toastr.warning('enter Task Title ');
          } else {
            var itemDetail = {
              todoId: _this3.todoId,
              itemName: taskName,
              todo: _this3.currentTodo,
              userId: _this3.currentUserId,
              userName: _this3.currentUserName,
              otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
            };

            _this3.SocketService.addFriendItem(itemDetail);

            form.reset();
          }
        };

        this.deleteFriendItem = function (itemId) {
          var data = {
            itemId: itemId,
            todoId: _this3.todoId,
            todo: _this3.currentTodo,
            userId: _this3.currentUserId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };

          _this3.SocketService.deleteFriendItem(data);
        };

        this.updateFriendItem = function (taskName, form) {
          if (taskName == '' || taskName == undefined || taskName == null) {
            _this3.toastr.warning('enter Task Title ');
          } else {
            var data = {
              itemName: taskName,
              itemId: _this3.itemId,
              todoId: _this3.todoId,
              todo: _this3.currentTodo,
              userId: _this3.currentUserId,
              userName: _this3.currentUserName,
              otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
            };

            _this3.SocketService.updateFriendItem(data);

            form.reset();
          }
        };

        this.addFriendSubItem = function (subtaskName, form) {
          if (subtaskName == '' || subtaskName == undefined || subtaskName == null) {
            _this3.toastr.warning('enter Task Title ');
          } else {
            var subItemDetail = {
              itemId: _this3.itemId,
              subTaskName: subtaskName,
              todoId: _this3.todoId,
              todo: _this3.currentTodo,
              userId: _this3.currentUserId,
              userName: _this3.currentUserName,
              otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
            };

            _this3.SocketService.addFriendSubItem(subItemDetail);

            form.reset();
          }
        };

        this.updateFriendSubItem = function (subtaskName, form) {
          if (subtaskName == '' || subtaskName == undefined || subtaskName == null) {
            _this3.toastr.warning('enter Task Title ');
          } else {
            var data = {
              subItemName: subtaskName,
              itemId: _this3.itemId,
              subItemId: _this3.subItemId,
              todoId: _this3.todoId,
              todo: _this3.currentTodo,
              userId: _this3.currentUserId,
              userName: _this3.currentUserName,
              otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
            };

            _this3.SocketService.updateFriendSubItem(data);

            form.reset();
          }
        };

        this.deleteFriendSubItem = function (subItemId) {
          var data = {
            subItemId: subItemId,
            todoId: _this3.todoId,
            todo: _this3.currentTodo,
            userId: _this3.currentUserId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };

          _this3.SocketService.deleteFriendSubItem(data);
        };

        this.completeFriendTodo = function (todo) {
          var data = {
            todoId: todo.todoId,
            todo: todo,
            userId: _this3.currentUserId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };

          _this3.SocketService.completeFriendTodo(data);
        };

        this.recompleteFriendTodo = function (todo) {
          var data = {
            todoId: todo.todoId,
            todo: todo,
            userId: _this3.currentUserId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };

          _this3.SocketService.recompleteFriendTodo(data);
        };

        this.completeFriendItem = function (todo, itemId) {
          var data = {
            todoId: todo.todoId,
            todo: todo,
            userId: _this3.currentUserId,
            itemId: itemId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };

          _this3.SocketService.completeFriendItem(data);
        };

        this.recompleteFriendItem = function (todo, itemId) {
          var data = {
            todoId: todo.todoId,
            todo: todo,
            userId: _this3.currentUserId,
            itemId: itemId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };

          _this3.SocketService.recompleteFriendItem(data);
        };

        this.completeFriendSubItem = function (todo, itemId, subItemId) {
          var data = {
            itemId: itemId,
            subItemId: subItemId,
            todoId: todo.todoId,
            todo: todo,
            userId: _this3.currentUserId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };
          console.log('complete sub item', data);

          _this3.SocketService.completeFriendSubItem(data);
        };

        this.recompleteFriendSubItem = function (todo, itemId, subItemId) {
          var data = {
            itemId: itemId,
            subItemId: subItemId,
            todoId: todo.todoId,
            todo: todo,
            userId: _this3.currentUserId,
            userName: _this3.currentUserName,
            otherUser: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userName')
          };
          console.log('complete sub item', data);

          _this3.SocketService.recompleteFriendSubItem(data);
        };

        this.createFriendTodoResponse = function () {
          _this3.create = _this3.SocketService.getFriendCreateTodo().subscribe(function (data) {
            console.log('createFriendTodoResponse', data);
            console.log(_this3.currentUserId, data.todo.userId);

            if (_this3.currentUserId == data.todo.userId) {
              console.log('before assigning', data, _this3.currentUserTodos);

              _this3.currentUserTodos.push(data.todo);

              console.log('lists', _this3.currentUserTodos);
            }

            _this3.toastr.info(data.msg);
          });
        };

        this.getFriendUpdate = function () {
          _this3.update = _this3.SocketService.getFriendUpdate().subscribe(function (data) {
            console.log('getFriendTodoResponse', data);
            console.log(_this3.currentUserId, data.todo.userId);

            if (_this3.currentUserId == data.todo.userId) {
              var index = _this3.currentUserTodos.findIndex(function (todo) {
                return todo.todoId == data.todo.todoId;
              });

              _this3.currentUserTodos[index] = data.todo;
            }

            _this3.toastr.info(data.msg);
          });
        };

        this.deleteFriendTodoResponse = function () {
          _this3.delete = _this3.SocketService.getFriendDeleteTodo().subscribe(function (data) {
            console.log('getFriendDeleteTodoResponse', data);
            console.log(_this3.currentUserId, data.todo.userId);

            if (_this3.currentUserId == data.todo.userId) {
              var index = _this3.currentUserTodos.findIndex(function (todo) {
                return todo.todoId == data.todo.todoId;
              });

              _this3.currentUserTodos.splice(index, 1);
            }

            _this3.toastr.info(data.msg);
          });
        };

        this.errOccured = function () {
          _this3.err = _this3.SocketService.errOccured().subscribe(function (data) {
            _this3.toastr.warning(data.message);

            console.log(data.data);
          });
        };
      }

      _createClass(MultiUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedOut();
          this.spinner.show();
          this.checkStatus();
          this.verifyUserConfirmation();
          this.setUser();
          this.getUser();
          this.createFriendTodoResponse();
          this.getFriendUpdate();
          this.deleteFriendTodoResponse();
          this.undoResponse();
          this.errOccured();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.create) this.create.unsubscribe();
          if (this.update) this.update.unsubscribe();
          if (this.delete) this.delete.unsubscribe();
          if (this.undos) this.undos.unsubscribe();
          if (this.err) this.err.unsubscribe();
        }
      }, {
        key: "onKeydownHandler",
        value: function onKeydownHandler(event) {
          this.SocketService.undo(this.currentUserId);
          event.preventDefault();
        }
      }]);

      return MultiUserComponent;
    }();

    MultiUserComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_6__["Router"]
      }, {
        type: src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_7__["SocketserviceService"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }];
    };

    tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["HostListener"])('document:keydown.control.z', ['$event'])], MultiUserComponent.prototype, "onKeydownHandler", null);
    MultiUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-multi-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./multi-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/multi-user/multi-user.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('todos', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(600)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'translateX(100px)',
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./multi-user.component.css */
      "./src/app/todolist/multi-user/multi-user.component.css")).default]
    })], MultiUserComponent);
    /***/
  },

  /***/
  "./src/app/todolist/single-user/single-user.component.css":
  /*!****************************************************************!*\
    !*** ./src/app/todolist/single-user/single-user.component.css ***!
    \****************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppTodolistSingleUserSingleUserComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".menu{\r\n    height:100vh;\r\n    background-color: black;\r\n   \r\n   \r\n}\r\n\r\n\r\n\r\n.cards{\r\n    padding:5px;\r\n    margin:auto;\r\n    \r\n}\r\n\r\n\r\n\r\n.accept-reject{\r\n    margin : 10px;\r\n}\r\n\r\n\r\n\r\n.flex-parent {\r\n    display: -webkit-box;\r\n    display: flex;\r\n  }\r\n\r\n\r\n\r\n.flex-child {\r\n   margin-right: auto;\r\n  -webkit-box-ordinal-group: 3;\r\n          order: 2;\r\n  }\r\n\r\n\r\n\r\n.heading{\r\n    text-align:center;\r\n    margin-top: 10px; \r\n    margin-bottom: 10px;\r\n    font-weight: bold;\r\n    text-shadow: 2px 2px 5px #4f9d9e;\r\n}\r\n\r\n\r\n\r\n.todos{\r\n    width : 75%;\r\n    height:40%;\r\n    margin:auto;\r\n    margin-bottom: 5px;\r\n}\r\n\r\n\r\n\r\n.todos li{\r\n    /* border:2px solid; */\r\n    border-radius: 20px;\r\n    background: #e3f2fd;\r\n    color:#24a0ed;\r\n}\r\n\r\n\r\n\r\n.fas{\r\n    color:#24588c\r\n}\r\n\r\n\r\n\r\n.fa-check-circle\r\n{\r\n    color:#24a0ed;\r\n}\r\n\r\n\r\n\r\n.buttons{\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.button{\r\n  \r\n    margin:5px;\r\n    float: right;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.buttonc{\r\n    float:left;\r\n    cursor: pointer;\r\n}\r\n\r\n\r\n\r\n.task{\r\n    margin-left:5%;\r\n    margin-top: 5px;\r\n}\r\n\r\n\r\n\r\n.subtask{\r\n    margin-left:5%;\r\n    margin-top: 5px;\r\n}\r\n\r\n\r\n\r\n.set{\r\n   \r\n    border-radius:15px;\r\n    margin-top:auto;\r\n    margin-bottom: auto;\r\n    box-shadow: 0px 2px 20px 1px rgba(0,0,0,0.75);\r\n     \r\n  \r\n  }\r\n\r\n\r\n\r\n.name-color{\r\n    box-shadow: 0px 2px 12px -2px #24a0ed;\r\n  }\r\n\r\n\r\n\r\n.icard{\r\n  background: #e3f2fd;\r\n  border-radius: 15px;\r\n  margin-top: 9px;\r\n  margin-bottom: 9px;\r\n  color: #24a0ed;\r\n  padding-top: 5px;\r\n  padding-bottom: 5px;\r\n  }\r\n\r\n\r\n\r\n.acc-rej{\r\n    background: #e3f2fd;\r\n    border:2px solid #24a0ed; \r\n    border-radius: 15px;\r\n    color:#44c2db;\r\n  }\r\n\r\n\r\n\r\n.acc-rej:hover{\r\n    background: #24a0ed ;\r\n  }\r\n\r\n\r\n\r\n.container {\r\n    position: relative;\r\n   \r\n    \r\n  }\r\n\r\n\r\n\r\n.animate{\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n  }\r\n\r\n\r\n\r\n.animate:hover{\r\n    -webkit-transform: scale(1.04);\r\n            transform: scale(1.04);\r\n    \r\n  }\r\n\r\n\r\n\r\n#cardbody::-webkit-scrollbar {\r\n    width: 0.3em;\r\n  }\r\n\r\n\r\n\r\n#cardbody::-webkit-scrollbar-track {\r\n    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);\r\n  }\r\n\r\n\r\n\r\n#cardbody::-webkit-scrollbar-thumb {\r\n    background-color: #0377fc;\r\n    outline: 1px solid slategrey;\r\n  }\r\n\r\n\r\n\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNpbmdsZS11c2VyL3NpbmdsZS11c2VyLmNvbXBvbmVudC5jc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7SUFDSSxZQUFZO0lBQ1osdUJBQXVCOzs7QUFHM0I7Ozs7QUFJQTtJQUNJLFdBQVc7SUFDWCxXQUFXOztBQUVmOzs7O0FBRUE7SUFDSSxhQUFhO0FBQ2pCOzs7O0FBRUE7SUFDSSxvQkFBYTtJQUFiLGFBQWE7RUFDZjs7OztBQUVBO0dBQ0Msa0JBQWtCO0VBQ25CLDRCQUFRO1VBQVIsUUFBUTtFQUNSOzs7O0FBRUE7SUFDRSxpQkFBaUI7SUFDakIsZ0JBQWdCO0lBQ2hCLG1CQUFtQjtJQUNuQixpQkFBaUI7SUFDakIsZ0NBQWdDO0FBQ3BDOzs7O0FBRUE7SUFDSSxXQUFXO0lBQ1gsVUFBVTtJQUNWLFdBQVc7SUFDWCxrQkFBa0I7QUFDdEI7Ozs7QUFFQTtJQUNJLHNCQUFzQjtJQUN0QixtQkFBbUI7SUFDbkIsbUJBQW1CO0lBQ25CLGFBQWE7QUFDakI7Ozs7QUFFQTtJQUNJO0FBQ0o7Ozs7QUFFQTs7SUFFSSxhQUFhO0FBQ2pCOzs7O0FBR0E7SUFDSSxZQUFZO0lBQ1osZUFBZTtBQUNuQjs7OztBQUVBOztJQUVJLFVBQVU7SUFDVixZQUFZO0lBQ1osZUFBZTtBQUNuQjs7OztBQUVBO0lBQ0ksVUFBVTtJQUNWLGVBQWU7QUFDbkI7Ozs7QUFFQTtJQUNJLGNBQWM7SUFDZCxlQUFlO0FBQ25COzs7O0FBQ0E7SUFDSSxjQUFjO0lBQ2QsZUFBZTtBQUNuQjs7OztBQUVBOztJQUVJLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBR25CLDZDQUE2Qzs7O0VBRy9DOzs7O0FBRUE7SUFHRSxxQ0FBcUM7RUFDdkM7Ozs7QUFFQTtFQUNBLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGtCQUFrQjtFQUNsQixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQjs7OztBQUVBO0lBQ0UsbUJBQW1CO0lBQ25CLHdCQUF3QjtJQUN4QixtQkFBbUI7SUFDbkIsYUFBYTtFQUNmOzs7O0FBRUE7SUFDRSxvQkFBb0I7RUFDdEI7Ozs7QUFFQTtJQUNFLGtCQUFrQjs7O0VBR3BCOzs7O0FBRUE7SUFDRSx3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0VBQ2xDOzs7O0FBQ0E7SUFDRSw4QkFBc0I7WUFBdEIsc0JBQXNCOztFQUV4Qjs7OztBQUVBO0lBQ0UsWUFBWTtFQUNkOzs7O0FBRUE7SUFDRSw0Q0FBNEM7RUFDOUM7Ozs7QUFFQTtJQUNFLHlCQUF5QjtJQUN6Qiw0QkFBNEI7RUFDOUIiLCJmaWxlIjoic2luZ2xlLXVzZXIvc2luZ2xlLXVzZXIuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5tZW51e1xyXG4gICAgaGVpZ2h0OjEwMHZoO1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogYmxhY2s7XHJcbiAgIFxyXG4gICBcclxufVxyXG5cclxuXHJcblxyXG4uY2FyZHN7XHJcbiAgICBwYWRkaW5nOjVweDtcclxuICAgIG1hcmdpbjphdXRvO1xyXG4gICAgXHJcbn1cclxuXHJcbi5hY2NlcHQtcmVqZWN0e1xyXG4gICAgbWFyZ2luIDogMTBweDtcclxufVxyXG5cclxuLmZsZXgtcGFyZW50IHtcclxuICAgIGRpc3BsYXk6IGZsZXg7XHJcbiAgfVxyXG5cclxuICAuZmxleC1jaGlsZCB7XHJcbiAgIG1hcmdpbi1yaWdodDogYXV0bztcclxuICBvcmRlcjogMjtcclxuICB9XHJcblxyXG4gIC5oZWFkaW5ne1xyXG4gICAgdGV4dC1hbGlnbjpjZW50ZXI7XHJcbiAgICBtYXJnaW4tdG9wOiAxMHB4OyBcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICBmb250LXdlaWdodDogYm9sZDtcclxuICAgIHRleHQtc2hhZG93OiAycHggMnB4IDVweCAjNGY5ZDllO1xyXG59XHJcblxyXG4udG9kb3N7XHJcbiAgICB3aWR0aCA6IDc1JTtcclxuICAgIGhlaWdodDo0MCU7XHJcbiAgICBtYXJnaW46YXV0bztcclxuICAgIG1hcmdpbi1ib3R0b206IDVweDtcclxufVxyXG5cclxuLnRvZG9zIGxpe1xyXG4gICAgLyogYm9yZGVyOjJweCBzb2xpZDsgKi9cclxuICAgIGJvcmRlci1yYWRpdXM6IDIwcHg7XHJcbiAgICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xyXG4gICAgY29sb3I6IzI0YTBlZDtcclxufVxyXG5cclxuLmZhc3tcclxuICAgIGNvbG9yOiMyNDU4OGNcclxufVxyXG5cclxuLmZhLWNoZWNrLWNpcmNsZVxyXG57XHJcbiAgICBjb2xvcjojMjRhMGVkO1xyXG59XHJcblxyXG5cclxuLmJ1dHRvbnN7XHJcbiAgICBmbG9hdDogcmlnaHQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi5idXR0b257XHJcbiAgXHJcbiAgICBtYXJnaW46NXB4O1xyXG4gICAgZmxvYXQ6IHJpZ2h0O1xyXG4gICAgY3Vyc29yOiBwb2ludGVyO1xyXG59XHJcblxyXG4uYnV0dG9uY3tcclxuICAgIGZsb2F0OmxlZnQ7XHJcbiAgICBjdXJzb3I6IHBvaW50ZXI7XHJcbn1cclxuXHJcbi50YXNre1xyXG4gICAgbWFyZ2luLWxlZnQ6NSU7XHJcbiAgICBtYXJnaW4tdG9wOiA1cHg7XHJcbn1cclxuLnN1YnRhc2t7XHJcbiAgICBtYXJnaW4tbGVmdDo1JTtcclxuICAgIG1hcmdpbi10b3A6IDVweDtcclxufVxyXG5cclxuLnNldHtcclxuICAgXHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDIwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMjBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMjBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICBcclxuICBcclxuICB9XHJcblxyXG4gIC5uYW1lLWNvbG9ye1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDEycHggLTJweCAjMjRhMGVkO1xyXG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMnB4IDEycHggLTJweCAjMjRhMGVkO1xyXG4gICAgYm94LXNoYWRvdzogMHB4IDJweCAxMnB4IC0ycHggIzI0YTBlZDtcclxuICB9XHJcblxyXG4gIC5pY2FyZHtcclxuICBiYWNrZ3JvdW5kOiAjZTNmMmZkO1xyXG4gIGJvcmRlci1yYWRpdXM6IDE1cHg7XHJcbiAgbWFyZ2luLXRvcDogOXB4O1xyXG4gIG1hcmdpbi1ib3R0b206IDlweDtcclxuICBjb2xvcjogIzI0YTBlZDtcclxuICBwYWRkaW5nLXRvcDogNXB4O1xyXG4gIHBhZGRpbmctYm90dG9tOiA1cHg7XHJcbiAgfVxyXG5cclxuICAuYWNjLXJlantcclxuICAgIGJhY2tncm91bmQ6ICNlM2YyZmQ7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkICMyNGEwZWQ7IFxyXG4gICAgYm9yZGVyLXJhZGl1czogMTVweDtcclxuICAgIGNvbG9yOiM0NGMyZGI7XHJcbiAgfVxyXG5cclxuICAuYWNjLXJlajpob3ZlcntcclxuICAgIGJhY2tncm91bmQ6ICMyNGEwZWQgO1xyXG4gIH1cclxuXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIFxyXG4gICAgXHJcbiAgfVxyXG5cclxuICAuYW5pbWF0ZXtcclxuICAgIHRyYW5zaXRpb246IGFsbCAwLjJzIGVhc2UtaW4tb3V0O1xyXG4gIH1cclxuICAuYW5pbWF0ZTpob3ZlcntcclxuICAgIHRyYW5zZm9ybTogc2NhbGUoMS4wNCk7XHJcbiAgICBcclxuICB9XHJcblxyXG4gICNjYXJkYm9keTo6LXdlYmtpdC1zY3JvbGxiYXIge1xyXG4gICAgd2lkdGg6IDAuM2VtO1xyXG4gIH1cclxuICAgXHJcbiAgI2NhcmRib2R5Ojotd2Via2l0LXNjcm9sbGJhci10cmFjayB7XHJcbiAgICBib3gtc2hhZG93OiBpbnNldCAwIDAgNnB4IHJnYmEoMCwgMCwgMCwgMC4zKTtcclxuICB9XHJcbiAgIFxyXG4gICNjYXJkYm9keTo6LXdlYmtpdC1zY3JvbGxiYXItdGh1bWIge1xyXG4gICAgYmFja2dyb3VuZC1jb2xvcjogIzAzNzdmYztcclxuICAgIG91dGxpbmU6IDFweCBzb2xpZCBzbGF0ZWdyZXk7XHJcbiAgfVxyXG5cclxuXHJcbiJdfQ== */";
    /***/
  },

  /***/
  "./src/app/todolist/single-user/single-user.component.ts":
  /*!***************************************************************!*\
    !*** ./src/app/todolist/single-user/single-user.component.ts ***!
    \***************************************************************/

  /*! exports provided: SingleUserComponent */

  /***/
  function srcAppTodolistSingleUserSingleUserComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SingleUserComponent", function () {
      return SingleUserComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__);
    /* harmony import */


    var src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! src/app/socketservice.service */
    "./src/app/socketservice.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _angular_animations__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! @angular/animations */
    "./node_modules/@angular/animations/fesm2015/animations.js");

    var SingleUserComponent =
    /*#__PURE__*/
    function () {
      function SingleUserComponent(appService, toastr, socketService, router, spinner) {
        var _this4 = this;

        _classCallCheck(this, SingleUserComponent);

        this.appService = appService;
        this.toastr = toastr;
        this.socketService = socketService;
        this.router = router;
        this.spinner = spinner;
        this.todos = [];
        this.ctodos = [];
        this.friendRequests = false;
        this.requests = [];
        this.reqopen = false;
        this._opened = false;
        this.loading = true;

        this.check = function () {
          if (!_this4.appService.getUserInfo()) {
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('AuthToken');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userId');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userName');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('email');
            ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].deleteAll();
            localStorage.clear();

            _this4.router.navigate(['/login']);
          }
        };

        this.isLoggedOut = function () {
          setInterval(function () {
            _this4.check();
          }, 500);
        };

        this.getTodo = function (todo) {
          _this4.currentTodo = todo;
          console.log('current todo', _this4.currentTodo);
        };

        this.dispalyTodos = function () {
          _this4.friendRequests = false;
        };

        this.getTodoId = function (todoId) {
          _this4.todoId = todoId;
        };

        this.getItemId = function (itemId) {
          _this4.itemId = itemId;
        };

        this.getSubItemId = function (subItemId) {
          _this4.subItemId = subItemId;
        };

        this.undoIResponse = function () {
          _this4.undo = _this4.socketService.undoIResponse().subscribe(function (data) {
            console.log('undo response', data);

            if (data.userId == ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')) {
              if (data.created == true && data.deleted == false) {
                var index = _this4.todos.findIndex(function (todo) {
                  return todo.todoId === data.todoId;
                });

                _this4.todos.splice(index, 1);
              }

              if (data.created == false && data.deleted == false) {
                var _index2 = _this4.todos.findIndex(function (todo) {
                  return todo.todoId === data.todoId;
                });

                _this4.todos[_index2] = data.todo;
              }

              if (data.created == false && data.deleted == true) {
                _this4.todos.push(data.todo);
              }
            }
          });
        };

        this.getTodos = function (id) {
          _this4.appService.getTodos(id).subscribe(function (data) {
            _this4.loading = false;
            console.log('get todos is called', data);

            if (data.status == 200) {
              _this4.todos = data.data;
              console.log(_this4.todos);
            } else if (data.status == 404) {
              _this4.toastr.warning('no lists found');
            }
          }, function (err) {
            //this.toastr.error('some error occured');
            _this4.router.navigate(['/error']);
          });
        };

        this.sentRequest = function () {
          _this4.senreq = _this4.socketService.requestSent().subscribe(function (data) {
            console.log('request Sent', data);

            _this4.requests.push(data);
          });
        };

        this.getRequests = function () {
          _this4.appService.getFriendRequests().subscribe(function (data) {
            _this4.loading = false;
            _this4.friendRequests = true;

            if (data.status == 200) {
              _this4.requests = data.data;
              console.log('friend requests', data);
            }
          }, function (err) {
            // this.toastr.error("error occured");
            _this4.router.navigate(['/error']);
          });
        };

        this.acceptRequest = function (requestData) {
          console.log(requestData);

          _this4.socketService.acceptRequest(requestData); // this.socketService.acceptRequestResponse().subscribe(
          //   (data)=>{
          //     console.log(data);
          //     this.requests.splice(this.requests.findIndex(request => request.senderId === data.userId), 1);
          //   }
          // )

        };

        this.acceptRequestResponse = function () {
          _this4.accept = _this4.socketService.acceptRequestResponse().subscribe(function (data) {
            console.log(data);

            _this4.requests.splice(_this4.requests.findIndex(function (request) {
              return request.senderId === data.userId;
            }), 1);
          });
        };

        this.rejectRequest = function (requestData) {
          console.log('requestData is called');

          _this4.socketService.rejectRequest(requestData);

          _this4.reject = _this4.socketService.rejectRequestResponse().subscribe(function (data) {
            console.log('reject request', data);

            _this4.requests.splice(_this4.requests.findIndex(function (request) {
              return request.receiverId === data.receiverId;
            }), 1);
          });
        };

        this.createTodo = function (todoItem, form) {
          if (todoItem == '' || todoItem == undefined || todoItem == null) {
            _this4.toastr.warning('enter the todo title');
          } else {
            var todoDetail = {
              todoTitle: todoItem,
              userId: ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId')
            };

            _this4.socketService.createList(todoDetail);

            _this4.socketService.getUpdate().then(function (data) {
              console.log('before assigning', data, _this4.todos);

              _this4.todos.push(data);

              console.log('lists', _this4.todos);
              form.reset();
            });
          }
        };

        this.addItem = function (itemName, form) {
          if (itemName == '' || itemName == undefined || itemName == null) {
            _this4.toastr.warning('enter task name');
          } else {
            var itemDetail = {
              todoId: _this4.todoId,
              itemName: itemName
            };
            console.log('itemdetail', itemDetail);

            _this4.socketService.addItem(itemDetail);

            _this4.socketService.getUpdate().then(function (data) {
              var index = _this4.todos.findIndex(function (todo) {
                return todo.todoId == data.todoId;
              });

              _this4.todos[index] = data;
              console.log('lists', _this4.todos);
              form.reset();
            });
          }
        };

        this.addSubItem = function (subItem, form) {
          if (subItem == '' || subItem == undefined || subItem == null) {
            _this4.toastr.warning('enter subItem Name');
          } else {
            var subItemDetail = {
              itemId: _this4.itemId,
              subTaskName: subItem
            };
            console.log('subItemdetail', subItemDetail);

            _this4.socketService.addSubItem(subItemDetail);

            _this4.socketService.getUpdate().then(function (data) {
              console.log('add sub item', data);

              var index = _this4.todos.findIndex(function (todo) {
                return todo.todoId === data.todoId;
              });

              _this4.todos[index] = data; // this.todos = [];
              // this.getTodos(this.userId);

              form.reset();
            });
          }
        };

        this.deleteSubItem = function (subItemId) {
          var data = {
            subItemId: subItemId
          };

          _this4.socketService.deleteSubItem(data);

          _this4.socketService.getUpdate().then(function (data) {
            console.log('delete sub item', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos[index] = data; // this.todos = [];
            //   this.getTodos(this.userId);
          });
        };

        this.deleteItem = function (itemId) {
          var data = {
            itemId: itemId
          };

          _this4.socketService.deleteItem(data);

          _this4.socketService.getUpdate().then(function (data) {
            console.log('delete item', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos[index] = data; // this.todos = [];
            //   this.getTodos(this.userId);
          });
        };

        this.deleteTodo = function (todoId) {
          var data = {
            todoId: todoId
          };

          _this4.socketService.deleteTodo(data);

          _this4.socketService.deleteTodoResponse().then(function (data) {
            console.log('delete todo ', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos.splice(index, 1); // this.todos = [];
            //   this.getTodos(this.userId);

          });
        };

        this.updateTodo = function (todoTitle, form) {
          if (todoTitle == '' || todoTitle == undefined || todoTitle == null) {
            _this4.toastr.warning('enter todo title');
          } else {
            var data = {
              todoTitle: todoTitle,
              todoId: _this4.todoId
            };

            _this4.socketService.updateTodo(data);

            _this4.socketService.getUpdate().then(function (data) {
              console.log('update todo', data);

              var index = _this4.todos.findIndex(function (todo) {
                return todo.todoId === data.todoId;
              });

              _this4.todos[index] = data; // this.todos = [];
              // this.getTodos(this.userId);

              form.reset();
            });
          }
        };

        this.updateItem = function (itemName, form) {
          if (itemName == '' || itemName == undefined || itemName == null) {
            _this4.toastr.warning('enter task name');
          } else {
            var data = {
              itemName: itemName,
              itemId: _this4.itemId
            };

            _this4.socketService.updateItem(data);

            _this4.socketService.getUpdate().then(function (data) {
              console.log('update item', data);

              var index = _this4.todos.findIndex(function (todo) {
                return todo.todoId === data.todoId;
              });

              _this4.todos[index] = data; // this.todos = [];
              // this.getTodos(this.userId);

              form.reset();
            });
          }
        };

        this.updateSubItem = function (subItemName, form) {
          if (subItemName == '' || subItemName == undefined || subItemName == null) {
            _this4.toastr.warning('enter subItem Name');
          } else {
            var data = {
              subItemName: subItemName,
              itemId: _this4.itemId,
              subItemId: _this4.subItemId,
              todoId: _this4.todoId
            };
            console.log('updateSubItem', data);

            _this4.socketService.updateSubItem(data);

            _this4.socketService.getUpdate().then(function (data) {
              console.log("update subitem ", data);

              var index = _this4.todos.findIndex(function (todo) {
                return todo.todoId === data.todoId;
              });

              _this4.todos[index] = data; // this.todos = [];
              // this.getTodos(this.userId);

              form.reset();
            });
          }
        };

        this.completeTodo = function (todoId) {
          var data = {
            todoId: todoId
          };

          _this4.socketService.completeTodo(data);

          _this4.socketService.getUpdate().then(function (data) {
            console.log('update item', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos[index] = data;
          });
        };

        this.recompleteTodo = function (todoId) {
          var data = {
            todoId: todoId
          };

          _this4.socketService.recompleteTodo(data);

          _this4.socketService.getUpdate().then(function (data) {
            console.log('update item', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos[index] = data;
          });
        };

        this.completeItem = function (itemId) {
          var data = {
            itemId: itemId
          };

          _this4.socketService.completeItem(data);

          _this4.socketService.getUpdate().then(function (data) {
            console.log('update item', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos[index] = data;
          });
        };

        this.recompleteItem = function (todoId, itemId) {
          var data = {
            todoId: todoId,
            itemId: itemId
          };

          _this4.socketService.recompleteItem(data);

          _this4.socketService.getUpdate().then(function (data) {
            console.log('update item', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos[index] = data;
          });
        };

        this.completeSubItem = function (todoId, itemId, subItemId) {
          var data = {
            itemId: itemId,
            subItemId: subItemId,
            todoId: todoId
          };
          console.log('complete sub item', data);

          _this4.socketService.completeSubItem(data);

          _this4.socketService.getUpdate().then(function (data) {
            console.log('update item', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos[index] = data;
          });
        };

        this.recompleteSubItem = function (todoId, itemId, subItemId) {
          var data = {
            itemId: itemId,
            subItemId: subItemId,
            todoId: todoId
          };
          console.log('recomplete sub item', data);

          _this4.socketService.recompleteSubItem(data);

          _this4.socketService.getUpdate().then(function (data) {
            console.log('update item', data);

            var index = _this4.todos.findIndex(function (todo) {
              return todo.todoId === data.todoId;
            });

            _this4.todos[index] = data;
          });
        };

        this.fCreateTodoResponse = function () {
          _this4.create = _this4.socketService.fCreateTodo().subscribe(function (data) {
            console.log('fCreateTodoResponse', data);
            console.log(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'), data.userId);

            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId') == data.userId) {
              console.log('before assigning', data, _this4.todos);

              _this4.todos.push(data);

              console.log('lists', _this4.todos);
            }
          });
        };

        this.fGetUpdate = function () {
          _this4.update = _this4.socketService.fGetUpdate().subscribe(function (data) {
            console.log('getFriendTodoResponse', data);
            console.log(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'), data.userId);

            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId') == data.userId) {
              var index = _this4.todos.findIndex(function (todo) {
                return todo.todoId == data.todoId;
              });

              _this4.todos[index] = data;
            }
          });
        };

        this.fDeleteTodo = function () {
          _this4.delete = _this4.socketService.fDeleteTodo().subscribe(function (data) {
            console.log('getFriendDeleteTodoResponse', data);
            console.log(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId'), data.userId);

            if (ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId') == data.userId) {
              var index = _this4.todos.findIndex(function (todo) {
                return todo.todoId == data.todoId;
              });

              _this4.todos.splice(index, 1);
            }
          });
        };

        this.errOccured = function () {
          _this4.err = _this4.socketService.errOccured().subscribe(function (data) {
            _this4.toastr.warning(data.message);

            console.log(data.data);
          });
        };

        this.logout = function () {
          _this4.appService.logout().subscribe(function (apiResponse) {
            if (apiResponse.status === 200) {
              console.log("logout called");
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('AuthToken');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userId');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('userName');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].delete('email');
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].deleteAll();
              localStorage.clear(); //  this.socketService.exitSocket();

              _this4.router.navigate(['/login']);
            } else {
              _this4.toastr.error(apiResponse.message);
            } // end condition

          }, function (err) {
            _this4.toastr.error('some error occured', err);
          });
        }; // end logout

      }

      _createClass(SingleUserComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLoggedOut();
          this.spinner.show();
          this.userId = ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_5__["Cookie"].get('userId');
          this.getTodos(this.userId);
          this.friendRequests = false;
          this.sentRequest();
          this.fCreateTodoResponse();
          this.fDeleteTodo();
          this.fGetUpdate();
          this.undoIResponse();
          this.errOccured();
          this.acceptRequestResponse();
        }
      }, {
        key: "ngOnDestroy",
        value: function ngOnDestroy() {
          if (this.senreq) this.senreq.unsubscribe();
          if (this.create) this.create.unsubscribe();
          if (this.update) this.update.unsubscribe();
          if (this.delete) this.delete.unsubscribe();
          if (this.undo) this.undo.unsubscribe();
          if (this.accept) this.accept.unsubscribe();
          if (this.err) this.err.unsubscribe();
          if (this.reject) this.reject.unsubscribe();
        }
      }, {
        key: "_toggleSidebar",
        value: function _toggleSidebar() {
          this._opened = !this._opened;
        }
      }]);

      return SingleUserComponent;
    }();

    SingleUserComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_3__["ToastrService"]
      }, {
        type: src_app_socketservice_service__WEBPACK_IMPORTED_MODULE_6__["SocketserviceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_7__["Router"]
      }, {
        type: ngx_spinner__WEBPACK_IMPORTED_MODULE_4__["NgxSpinnerService"]
      }];
    };

    SingleUserComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-single-user',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./single-user.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/todolist/single-user/single-user.component.html")).default,
      animations: [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["trigger"])('todos', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('void => *', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        opacity: 0,
        transform: 'translateX(-100px)'
      }), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(600)]), Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["transition"])('* => void', [Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["animate"])(600, Object(_angular_animations__WEBPACK_IMPORTED_MODULE_8__["style"])({
        transform: 'translateX(100px)',
        opacity: 0
      }))])])],
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./single-user.component.css */
      "./src/app/todolist/single-user/single-user.component.css")).default]
    })], SingleUserComponent);
    /***/
  },

  /***/
  "./src/app/todolist/todolist-routing.module.ts":
  /*!*****************************************************!*\
    !*** ./src/app/todolist/todolist-routing.module.ts ***!
    \*****************************************************/

  /*! exports provided: TodoListRoutingModule */

  /***/
  function srcAppTodolistTodolistRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodoListRoutingModule", function () {
      return TodoListRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./multi-user/multi-user.component */
    "./src/app/todolist/multi-user/multi-user.component.ts");
    /* harmony import */


    var _friend_friend_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./friend/friend.component */
    "./src/app/todolist/friend/friend.component.ts");
    /* harmony import */


    var _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ./single-user/single-user.component */
    "./src/app/todolist/single-user/single-user.component.ts");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/todolist/error/error.component.ts");

    var routes = [{
      path: 'friend/:id',
      component: _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_3__["MultiUserComponent"],
      pathMatch: 'full'
    }, {
      path: 'list',
      component: _friend_friend_component__WEBPACK_IMPORTED_MODULE_4__["FriendComponent"],
      pathMatch: 'full'
    }, {
      path: 'user',
      component: _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_5__["SingleUserComponent"],
      pathMatch: 'full'
    }, {
      path: 'error',
      component: _error_error_component__WEBPACK_IMPORTED_MODULE_6__["ErrorComponent"],
      pathMatch: 'full'
    }, {
      path: '*',
      redirectTo: 'login',
      pathMatch: 'full'
    }];

    var TodoListRoutingModule = function TodoListRoutingModule() {
      _classCallCheck(this, TodoListRoutingModule);
    };

    TodoListRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], TodoListRoutingModule);
    /***/
  },

  /***/
  "./src/app/todolist/todolist.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/todolist/todolist.module.ts ***!
    \*********************************************/

  /*! exports provided: TodolistModule */

  /***/
  function srcAppTodolistTodolistModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "TodolistModule", function () {
      return TodolistModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ng-sidebar */
    "./node_modules/ng-sidebar/lib/index.js");
    /* harmony import */


    var ng_sidebar__WEBPACK_IMPORTED_MODULE_3___default =
    /*#__PURE__*/
    __webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_3__);
    /* harmony import */


    var ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-filter-pipe */
    "./node_modules/ngx-filter-pipe/esm2015/ngx-filter-pipe.js");
    /* harmony import */


    var ngx_spinner__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-spinner */
    "./node_modules/ngx-spinner/fesm2015/ngx-spinner.js");
    /* harmony import */


    var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! @angular/platform-browser/animations */
    "./node_modules/@angular/platform-browser/fesm2015/animations.js");
    /* harmony import */


    var angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! angular-font-awesome */
    "./node_modules/angular-font-awesome/dist/angular-font-awesome.js");
    /* harmony import */


    var _single_user_single_user_component__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ./single-user/single-user.component */
    "./src/app/todolist/single-user/single-user.component.ts");
    /* harmony import */


    var _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
    /*! ./multi-user/multi-user.component */
    "./src/app/todolist/multi-user/multi-user.component.ts");
    /* harmony import */


    var _friend_friend_component__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
    /*! ./friend/friend.component */
    "./src/app/todolist/friend/friend.component.ts");
    /* harmony import */


    var _todolist_routing_module__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
    /*! ./todolist-routing.module */
    "./src/app/todolist/todolist-routing.module.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _error_error_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
    /*! ./error/error.component */
    "./src/app/todolist/error/error.component.ts");

    var TodolistModule = function TodolistModule() {
      _classCallCheck(this, TodolistModule);
    };

    TodolistModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_single_user_single_user_component__WEBPACK_IMPORTED_MODULE_8__["SingleUserComponent"], _multi_user_multi_user_component__WEBPACK_IMPORTED_MODULE_9__["MultiUserComponent"], _friend_friend_component__WEBPACK_IMPORTED_MODULE_10__["FriendComponent"], _error_error_component__WEBPACK_IMPORTED_MODULE_13__["ErrorComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_12__["FormsModule"], ngx_filter_pipe__WEBPACK_IMPORTED_MODULE_4__["FilterPipeModule"], ngx_spinner__WEBPACK_IMPORTED_MODULE_5__["NgxSpinnerModule"], _todolist_routing_module__WEBPACK_IMPORTED_MODULE_11__["TodoListRoutingModule"], _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_6__["BrowserAnimationsModule"], angular_font_awesome__WEBPACK_IMPORTED_MODULE_7__["AngularFontAwesomeModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_3__["SidebarModule"].forRoot()]
    })], TodolistModule);
    /***/
  },

  /***/
  "./src/app/user/forgot-password/forgot-password.component.css":
  /*!********************************************************************!*\
    !*** ./src/app/user/forgot-password/forgot-password.component.css ***!
    \********************************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserForgotPasswordForgotPasswordComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "\r\n\r\n.email{\r\n    margin-right: auto;\r\n    margin-left:auto;\r\n    margin-top: 5%;\r\n    display:block;\r\n    width:100%;\r\n}\r\n\r\n.reset {\r\n    text-align: center;\r\n    \r\n}\r\n\r\n.buttons{\r\n display:inline;\r\n padding-top: 5%;\r\n}\r\n\r\n.end{\r\n    margin:4px;\r\n}\r\n\r\n.forgot{\r\n    border: 2px solid black;\r\n    border-radius:5px;\r\n   padding-left:5%;\r\n   padding-right:5%;\r\n   padding-top:7%;\r\n   padding-bottom:10%\r\n\r\n    \r\n}\r\n\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus,\r\nbutton:focus {\r\n    outline: none;\r\n    box-shadow:none !important;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #24a0ed;\r\n    opacity: .5; /* Firefox */\r\n  }\r\n\r\n::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #24a0ed;\r\n    opacity: .5; /* Firefox */\r\n  }\r\n\r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #24a0ed;\r\n    opacity: .5; /* Firefox */\r\n  }\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #24a0ed;\r\n    opacity: .5; /* Firefox */\r\n  }\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color: #24a0ed;\r\n  }\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n    color: #24a0ed;\r\n  }\r\n\r\n.animate{\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n  }\r\n\r\n.animate:hover{\r\n    -webkit-transform: translateY(-1px);\r\n            transform: translateY(-1px);\r\n    \r\n  }\r\n\r\n.dec{\r\n    text-decoration: none;\r\n    color: #24a0ed;\r\n  }\r\n\r\n.dec:hover{\r\n    color: green;\r\n  }\r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VzZXIvZm9yZ290LXBhc3N3b3JkL2ZvcmdvdC1wYXNzd29yZC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBRUE7SUFDSSxrQkFBa0I7SUFDbEIsZ0JBQWdCO0lBQ2hCLGNBQWM7SUFDZCxhQUFhO0lBQ2IsVUFBVTtBQUNkOztBQUVBO0lBQ0ksa0JBQWtCOztBQUV0Qjs7QUFFQTtDQUNDLGNBQWM7Q0FDZCxlQUFlO0FBQ2hCOztBQUVBO0lBQ0ksVUFBVTtBQUNkOztBQUVBO0lBQ0ksdUJBQXVCO0lBQ3ZCLGlCQUFpQjtHQUNsQixlQUFlO0dBQ2YsZ0JBQWdCO0dBQ2hCLGNBQWM7R0FDZDs7O0FBR0g7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBLDhCQUFnQix5Q0FBeUM7SUFDckQsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0VBQzNCOztBQUhGLHFCQUFnQix5Q0FBeUM7SUFDckQsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0VBQzNCOztBQUhGLDBCQUFnQix5Q0FBeUM7SUFDckQsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0VBQzNCOztBQUhGLGdCQUFnQix5Q0FBeUM7SUFDckQsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0VBQzNCOztBQUVBLHlCQUF5Qiw0QkFBNEI7SUFDbkQsY0FBYztFQUNoQjs7QUFFQSwwQkFBMEIsbUJBQW1CO0lBQzNDLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSx3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0VBQ2xDOztBQUNBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjs7RUFFN0I7O0FBQ0E7SUFDRSxxQkFBcUI7SUFDckIsY0FBYztFQUNoQjs7QUFDQTtJQUNFLFlBQVk7RUFDZCIsImZpbGUiOiIuLi91c2VyL2ZvcmdvdC1wYXNzd29yZC9mb3Jnb3QtcGFzc3dvcmQuY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIlxyXG5cclxuLmVtYWlse1xyXG4gICAgbWFyZ2luLXJpZ2h0OiBhdXRvO1xyXG4gICAgbWFyZ2luLWxlZnQ6YXV0bztcclxuICAgIG1hcmdpbi10b3A6IDUlO1xyXG4gICAgZGlzcGxheTpibG9jaztcclxuICAgIHdpZHRoOjEwMCU7XHJcbn1cclxuXHJcbi5yZXNldCB7XHJcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XHJcbiAgICBcclxufVxyXG5cclxuLmJ1dHRvbnN7XHJcbiBkaXNwbGF5OmlubGluZTtcclxuIHBhZGRpbmctdG9wOiA1JTtcclxufVxyXG5cclxuLmVuZHtcclxuICAgIG1hcmdpbjo0cHg7XHJcbn1cclxuXHJcbi5mb3Jnb3R7XHJcbiAgICBib3JkZXI6IDJweCBzb2xpZCBibGFjaztcclxuICAgIGJvcmRlci1yYWRpdXM6NXB4O1xyXG4gICBwYWRkaW5nLWxlZnQ6NSU7XHJcbiAgIHBhZGRpbmctcmlnaHQ6NSU7XHJcbiAgIHBhZGRpbmctdG9wOjclO1xyXG4gICBwYWRkaW5nLWJvdHRvbToxMCVcclxuXHJcbiAgICBcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMsXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbjo6cGxhY2Vob2xkZXIgeyAvKiBDaHJvbWUsIEZpcmVmb3gsIE9wZXJhLCBTYWZhcmkgMTAuMSsgKi9cclxuICAgIGNvbG9yOiAjMjRhMGVkO1xyXG4gICAgb3BhY2l0eTogLjU7IC8qIEZpcmVmb3ggKi9cclxuICB9XHJcbiAgXHJcbiAgOi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIEludGVybmV0IEV4cGxvcmVyIDEwLTExICovXHJcbiAgICBjb2xvcjogIzI0YTBlZDtcclxuICB9XHJcbiAgXHJcbiAgOjotbXMtaW5wdXQtcGxhY2Vob2xkZXIgeyAvKiBNaWNyb3NvZnQgRWRnZSAqL1xyXG4gICAgY29sb3I6ICMyNGEwZWQ7XHJcbiAgfVxyXG4gIFxyXG4gIC5hbmltYXRle1xyXG4gICAgdHJhbnNpdGlvbjogYWxsIDAuMnMgZWFzZS1pbi1vdXQ7XHJcbiAgfVxyXG4gIC5hbmltYXRlOmhvdmVye1xyXG4gICAgdHJhbnNmb3JtOiB0cmFuc2xhdGVZKC0xcHgpO1xyXG4gICAgXHJcbiAgfVxyXG4gIC5kZWN7XHJcbiAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XHJcbiAgICBjb2xvcjogIzI0YTBlZDtcclxuICB9XHJcbiAgLmRlYzpob3ZlcntcclxuICAgIGNvbG9yOiBncmVlbjtcclxuICB9Il19 */";
    /***/
  },

  /***/
  "./src/app/user/forgot-password/forgot-password.component.ts":
  /*!*******************************************************************!*\
    !*** ./src/app/user/forgot-password/forgot-password.component.ts ***!
    \*******************************************************************/

  /*! exports provided: ForgotPasswordComponent */

  /***/
  function srcAppUserForgotPasswordForgotPasswordComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "ForgotPasswordComponent", function () {
      return ForgotPasswordComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var ForgotPasswordComponent =
    /*#__PURE__*/
    function () {
      function ForgotPasswordComponent(AppService, toaster, router) {
        var _this5 = this;

        _classCallCheck(this, ForgotPasswordComponent);

        this.AppService = AppService;
        this.toaster = toaster;
        this.router = router;

        this.ResetPassword = function () {
          if (!_this5.rpassword) {
            _this5.toaster.warning('enter recovery password ');
          } else if (!_this5.npassword) {
            _this5.toaster.warning('enter new password ');
          } else if (!_this5.cpassword) {
            _this5.toaster.warning('re-enter password');
          } else if (!(_this5.npassword === _this5.cpassword)) {
            _this5.toaster.warning('passwords are not being matched');
          } else {
            _this5.AppService.resetPassword(_this5.rpassword, _this5.npassword).subscribe(function (data) {
              if (data.status == 200) {
                _this5.toaster.success('password updated successfully');

                setTimeout(function () {
                  _this5.goToLogIn();
                }, 1500);
              } else {
                _this5.toaster.warning(data.message);
              }
            }, function (err) {
              _this5.toaster.error('some error occured');
            });
          }
        }; //end submit resetPassword

      }

      _createClass(ForgotPasswordComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {}
      }, {
        key: "goToLogIn",
        value: function goToLogIn() {
          this.router.navigate(['/login']);
        } //end gotoLogin

      }]);

      return ForgotPasswordComponent;
    }();

    ForgotPasswordComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }];
    };

    ForgotPasswordComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-forgot-password',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./forgot-password.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/forgot-password/forgot-password.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./forgot-password.component.css */
      "./src/app/user/forgot-password/forgot-password.component.css")).default]
    })], ForgotPasswordComponent);
    /***/
  },

  /***/
  "./src/app/user/login/login.component.css":
  /*!************************************************!*\
    !*** ./src/app/user/login/login.component.css ***!
    \************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserLoginLoginComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = ".forgot{\r\n    margin-left:36%;\r\n    display:block;\r\n    cursor:pointer;\r\n}\r\n\r\n.pointer {\r\n    cursor:pointer;\r\n}\r\n\r\n.sign{\r\n    margin-bottom: 10px;\r\n    width:75%;\r\n    margin: auto;\r\n    border:2px solid ;\r\n    border-radius: 10px;\r\n    background-color: #5dde8f;\r\n}\r\n\r\nimg{\r\n    width: 100%;\r\n   height: 100%;\r\n   -o-object-fit: cover;\r\n      object-fit: cover;\r\n}\r\n\r\n.bordere{\r\n    border:2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\ninput:focus,\r\nselect:focus,\r\ntextarea:focus,\r\nbutton:focus {\r\n    outline: none;\r\n    box-shadow:none !important;\r\n}\r\n\r\n.nav-link:hover\r\n{\r\n    background-color:#434175;\r\n    border:none;\r\n    border-radius: 4px;\r\n}\r\n\r\n::-webkit-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #24a0ed;\r\n    opacity: .5; /* Firefox */\r\n  }\r\n\r\n::-moz-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #24a0ed;\r\n    opacity: .5; /* Firefox */\r\n  }\r\n\r\n::-ms-input-placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #24a0ed;\r\n    opacity: .5; /* Firefox */\r\n  }\r\n\r\n::placeholder { /* Chrome, Firefox, Opera, Safari 10.1+ */\r\n    color: #24a0ed;\r\n    opacity: .5; /* Firefox */\r\n  }\r\n\r\n:-ms-input-placeholder { /* Internet Explorer 10-11 */\r\n    color: #24a0ed;\r\n  }\r\n\r\n::-ms-input-placeholder { /* Microsoft Edge */\r\n    color: #24a0ed;\r\n  }\r\n\r\n.animate{\r\n    -webkit-transition: all 0.2s ease-in-out;\r\n    transition: all 0.2s ease-in-out;\r\n  }\r\n\r\n.animate:hover{\r\n    -webkit-transform: translateY(-1px);\r\n            transform: translateY(-1px);\r\n    \r\n  }\r\n\r\n.dec{\r\n    text-decoration: none;\r\n    \r\n  }\r\n\r\n.dec:hover{\r\n    color: green;\r\n  }\r\n\r\n.set{\r\n   \r\n    border-radius:15px;\r\n    margin-top:auto;\r\n    margin-bottom: auto;\r\n    box-shadow: 0px 2px 20px 1px rgba(0,0,0,0.75);\r\n     \r\n  \r\n  }\r\n\r\n.container {\r\n    position: relative;\r\n   background: none;\r\n   background-color: white;\r\n   height:75%;\r\n   width:75%\r\n    \r\n  }\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtJQUNJLGVBQWU7SUFDZixhQUFhO0lBQ2IsY0FBYztBQUNsQjs7QUFFQTtJQUNJLGNBQWM7QUFDbEI7O0FBRUE7SUFDSSxtQkFBbUI7SUFDbkIsU0FBUztJQUNULFlBQVk7SUFDWixpQkFBaUI7SUFDakIsbUJBQW1CO0lBQ25CLHlCQUF5QjtBQUM3Qjs7QUFFQTtJQUNJLFdBQVc7R0FDWixZQUFZO0dBQ1osb0JBQWlCO01BQWpCLGlCQUFpQjtBQUNwQjs7QUFFQTtJQUNJLGdCQUFnQjtJQUNoQixtQkFBbUI7QUFDdkI7O0FBRUE7Ozs7SUFJSSxhQUFhO0lBQ2IsMEJBQTBCO0FBQzlCOztBQUVBOztJQUVJLHdCQUF3QjtJQUN4QixXQUFXO0lBQ1gsa0JBQWtCO0FBQ3RCOztBQUVBLDhCQUFnQix5Q0FBeUM7SUFDckQsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0VBQzNCOztBQUhGLHFCQUFnQix5Q0FBeUM7SUFDckQsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0VBQzNCOztBQUhGLDBCQUFnQix5Q0FBeUM7SUFDckQsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0VBQzNCOztBQUhGLGdCQUFnQix5Q0FBeUM7SUFDckQsY0FBYztJQUNkLFdBQVcsRUFBRSxZQUFZO0VBQzNCOztBQUVBLHlCQUF5Qiw0QkFBNEI7SUFDbkQsY0FBYztFQUNoQjs7QUFFQSwwQkFBMEIsbUJBQW1CO0lBQzNDLGNBQWM7RUFDaEI7O0FBRUE7SUFDRSx3Q0FBZ0M7SUFBaEMsZ0NBQWdDO0VBQ2xDOztBQUNBO0lBQ0UsbUNBQTJCO1lBQTNCLDJCQUEyQjs7RUFFN0I7O0FBQ0E7SUFDRSxxQkFBcUI7O0VBRXZCOztBQUNBO0lBQ0UsWUFBWTtFQUNkOztBQUVBOztJQUVFLGtCQUFrQjtJQUNsQixlQUFlO0lBQ2YsbUJBQW1CO0lBR25CLDZDQUE2Qzs7O0VBRy9DOztBQUVBO0lBQ0Usa0JBQWtCO0dBQ25CLGdCQUFnQjtHQUNoQix1QkFBdUI7R0FDdkIsVUFBVTtHQUNWOztFQUVEIiwiZmlsZSI6Ii4uL3VzZXIvbG9naW4vbG9naW4uY29tcG9uZW50LmNzcyIsInNvdXJjZXNDb250ZW50IjpbIi5mb3Jnb3R7XHJcbiAgICBtYXJnaW4tbGVmdDozNiU7XHJcbiAgICBkaXNwbGF5OmJsb2NrO1xyXG4gICAgY3Vyc29yOnBvaW50ZXI7XHJcbn1cclxuXHJcbi5wb2ludGVyIHtcclxuICAgIGN1cnNvcjpwb2ludGVyO1xyXG59XHJcblxyXG4uc2lnbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkZThmO1xyXG59XHJcblxyXG5pbWd7XHJcbiAgICB3aWR0aDogMTAwJTtcclxuICAgaGVpZ2h0OiAxMDAlO1xyXG4gICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmJvcmRlcmV7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMsXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MzQxNzU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuOjpwbGFjZWhvbGRlciB7IC8qIENocm9tZSwgRmlyZWZveCwgT3BlcmEsIFNhZmFyaSAxMC4xKyAqL1xyXG4gICAgY29sb3I6ICMyNGEwZWQ7XHJcbiAgICBvcGFjaXR5OiAuNTsgLyogRmlyZWZveCAqL1xyXG4gIH1cclxuICBcclxuICA6LW1zLWlucHV0LXBsYWNlaG9sZGVyIHsgLyogSW50ZXJuZXQgRXhwbG9yZXIgMTAtMTEgKi9cclxuICAgIGNvbG9yOiAjMjRhMGVkO1xyXG4gIH1cclxuICBcclxuICA6Oi1tcy1pbnB1dC1wbGFjZWhvbGRlciB7IC8qIE1pY3Jvc29mdCBFZGdlICovXHJcbiAgICBjb2xvcjogIzI0YTBlZDtcclxuICB9XHJcbiAgXHJcbiAgLmFuaW1hdGV7XHJcbiAgICB0cmFuc2l0aW9uOiBhbGwgMC4ycyBlYXNlLWluLW91dDtcclxuICB9XHJcbiAgLmFuaW1hdGU6aG92ZXJ7XHJcbiAgICB0cmFuc2Zvcm06IHRyYW5zbGF0ZVkoLTFweCk7XHJcbiAgICBcclxuICB9XHJcbiAgLmRlY3tcclxuICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcclxuICAgIFxyXG4gIH1cclxuICAuZGVjOmhvdmVye1xyXG4gICAgY29sb3I6IGdyZWVuO1xyXG4gIH1cclxuXHJcbiAgLnNldHtcclxuICAgXHJcbiAgICBib3JkZXItcmFkaXVzOjE1cHg7XHJcbiAgICBtYXJnaW4tdG9wOmF1dG87XHJcbiAgICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMnB4IDIwcHggMXB4IHJnYmEoMCwwLDAsMC43NSk7XHJcbiAgICAtbW96LWJveC1zaGFkb3c6IDBweCAycHggMjBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgIGJveC1zaGFkb3c6IDBweCAycHggMjBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgICBcclxuICBcclxuICB9XHJcbiAgXHJcbiAgLmNvbnRhaW5lciB7XHJcbiAgICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiAgIGJhY2tncm91bmQ6IG5vbmU7XHJcbiAgIGJhY2tncm91bmQtY29sb3I6IHdoaXRlO1xyXG4gICBoZWlnaHQ6NzUlO1xyXG4gICB3aWR0aDo3NSVcclxuICAgIFxyXG4gIH1cclxuXHJcblxyXG4gICJdfQ== */";
    /***/
  },

  /***/
  "./src/app/user/login/login.component.ts":
  /*!***********************************************!*\
    !*** ./src/app/user/login/login.component.ts ***!
    \***********************************************/

  /*! exports provided: LoginComponent */

  /***/
  function srcAppUserLoginLoginComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "LoginComponent", function () {
      return LoginComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ng2-cookies/ng2-cookies */
    "./node_modules/ng2-cookies/ng2-cookies.js");
    /* harmony import */


    var ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4___default =
    /*#__PURE__*/
    __webpack_require__.n(ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__);
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var LoginComponent =
    /*#__PURE__*/
    function () {
      function LoginComponent(appService, route, toaster) {
        var _this6 = this;

        _classCallCheck(this, LoginComponent);

        this.appService = appService;
        this.route = route;
        this.toaster = toaster;

        this.isLogged = function () {
          if (_this6.appService.getUserInfo()) {
            _this6.route.navigate(['/user']);
          }
        };

        this.resetPassword = function () {
          if (!_this6.email) {
            _this6.toaster.warning('enter email Id');
          } else {
            console.log('email', _this6.email);

            _this6.appService.forgotPassword(_this6.email).subscribe(function (data) {
              console.log(data);

              if (data.status == 200) {
                _this6.toaster.success(data.message);

                setTimeout(function () {
                  _this6.forgotPassword();
                }, 2000);
              } else {
                _this6.toaster.error(data['message']);
              }
            }, function (err) {
              _this6.toaster.error('some error occured');

              console.log(err);
            });
          }
        };

        this.forgotPassword = function () {
          _this6.route.navigate(['/forgotpassword']);
        };
      }

      _createClass(LoginComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.isLogged();
        }
      }, {
        key: "goToSignUp",
        value: function goToSignUp() {
          this.route.navigate(['/sign-up']);
        }
      }, {
        key: "signinFunction",
        value: function signinFunction() {
          var _this7 = this;

          var data = {
            email: this.email,
            password: this.password
          };
          this.appService.login(data).subscribe(function (data) {
            console.log(data);

            if (data.status == 200) {
              _this7.appService.setUserInfo(data.data);

              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('AuthToken', data.data.authToken);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userId', data.data.userId);
              ng2_cookies_ng2_cookies__WEBPACK_IMPORTED_MODULE_4__["Cookie"].set('userName', data.data.userName);

              _this7.route.navigate(['/user']);
            } else {
              _this7.toaster.error(data.message);
            }
          }, function (error) {
            console.log(error.message);
          });
        }
      }]);

      return LoginComponent;
    }();

    LoginComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"]
      }];
    };

    LoginComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-login',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./login.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/login/login.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./login.component.css */
      "./src/app/user/login/login.component.css")).default]
    })], LoginComponent);
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.css":
  /*!**************************************************!*\
    !*** ./src/app/user/signup/signup.component.css ***!
    \**************************************************/

  /*! exports provided: default */

  /***/
  function srcAppUserSignupSignupComponentCss(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony default export */


    __webpack_exports__["default"] = "button:disabled {\r\n    cursor: not-allowed;\r\n    pointer-events: all !important;\r\n  }\r\n\r\n  .sign{\r\n    margin-bottom: 10px;\r\n    width:75%;\r\n    margin: auto;\r\n    border:2px solid ;\r\n    border-radius: 10px;\r\n    background-color: #5dde8f;\r\n}\r\n\r\n  .clear {\r\n  cursor: pointer;\r\n  margin: auto -10%;\r\n}\r\n\r\n  img{\r\n   -o-object-fit: cover;\r\n      object-fit: cover;\r\n}\r\n\r\n  .bordere{\r\n    border:2px solid;\r\n    border-radius: 10px;\r\n}\r\n\r\n  input:focus,\r\nselect:focus,\r\ntextarea:focus,\r\nbutton:focus {\r\n    outline: none;\r\n    box-shadow:none !important;\r\n}\r\n\r\n  .nav-link:hover\r\n{\r\n    background-color:#434175;\r\n    border:none;\r\n    border-radius: 4px;\r\n}\r\n\r\n  .set{\r\n   \r\n  border-radius:15px;\r\n  margin-top:auto;\r\n  margin-bottom: auto;\r\n  box-shadow: 0px 2px 20px 1px rgba(0,0,0,0.75);\r\n   \r\n\r\n}\r\n\r\n  .container {\r\n  position: relative;\r\n background: none;\r\n background-color: white;\r\n width:75%;\r\n height:75%;\r\n  \r\n}\r\n\r\n\r\n  \r\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0lBQ0ksbUJBQW1CO0lBQ25CLDhCQUE4QjtFQUNoQzs7RUFFQTtJQUNFLG1CQUFtQjtJQUNuQixTQUFTO0lBQ1QsWUFBWTtJQUNaLGlCQUFpQjtJQUNqQixtQkFBbUI7SUFDbkIseUJBQXlCO0FBQzdCOztFQUVBO0VBQ0UsZUFBZTtFQUNmLGlCQUFpQjtBQUNuQjs7RUFHRTtHQUNDLG9CQUFpQjtNQUFqQixpQkFBaUI7QUFDcEI7O0VBRUE7SUFDSSxnQkFBZ0I7SUFDaEIsbUJBQW1CO0FBQ3ZCOztFQUVBOzs7O0lBSUksYUFBYTtJQUNiLDBCQUEwQjtBQUM5Qjs7RUFFQTs7SUFFSSx3QkFBd0I7SUFDeEIsV0FBVztJQUNYLGtCQUFrQjtBQUN0Qjs7RUFFQTs7RUFFRSxrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLG1CQUFtQjtFQUduQiw2Q0FBNkM7OztBQUcvQzs7RUFFQTtFQUNFLGtCQUFrQjtDQUNuQixnQkFBZ0I7Q0FDaEIsdUJBQXVCO0NBQ3ZCLFNBQVM7Q0FDVCxVQUFVOztBQUVYIiwiZmlsZSI6Ii4uL3VzZXIvc2lnbnVwL3NpZ251cC5jb21wb25lbnQuY3NzIiwic291cmNlc0NvbnRlbnQiOlsiYnV0dG9uOmRpc2FibGVkIHtcclxuICAgIGN1cnNvcjogbm90LWFsbG93ZWQ7XHJcbiAgICBwb2ludGVyLWV2ZW50czogYWxsICFpbXBvcnRhbnQ7XHJcbiAgfVxyXG5cclxuICAuc2lnbntcclxuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XHJcbiAgICB3aWR0aDo3NSU7XHJcbiAgICBtYXJnaW46IGF1dG87XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkIDtcclxuICAgIGJvcmRlci1yYWRpdXM6IDEwcHg7XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiAjNWRkZThmO1xyXG59XHJcblxyXG4uY2xlYXIge1xyXG4gIGN1cnNvcjogcG9pbnRlcjtcclxuICBtYXJnaW46IGF1dG8gLTEwJTtcclxufVxyXG5cclxuXHJcbiAgaW1ne1xyXG4gICBvYmplY3QtZml0OiBjb3ZlcjtcclxufVxyXG5cclxuLmJvcmRlcmV7XHJcbiAgICBib3JkZXI6MnB4IHNvbGlkO1xyXG4gICAgYm9yZGVyLXJhZGl1czogMTBweDtcclxufVxyXG5cclxuaW5wdXQ6Zm9jdXMsXHJcbnNlbGVjdDpmb2N1cyxcclxudGV4dGFyZWE6Zm9jdXMsXHJcbmJ1dHRvbjpmb2N1cyB7XHJcbiAgICBvdXRsaW5lOiBub25lO1xyXG4gICAgYm94LXNoYWRvdzpub25lICFpbXBvcnRhbnQ7XHJcbn1cclxuXHJcbi5uYXYtbGluazpob3ZlclxyXG57XHJcbiAgICBiYWNrZ3JvdW5kLWNvbG9yOiM0MzQxNzU7XHJcbiAgICBib3JkZXI6bm9uZTtcclxuICAgIGJvcmRlci1yYWRpdXM6IDRweDtcclxufVxyXG5cclxuLnNldHtcclxuICAgXHJcbiAgYm9yZGVyLXJhZGl1czoxNXB4O1xyXG4gIG1hcmdpbi10b3A6YXV0bztcclxuICBtYXJnaW4tYm90dG9tOiBhdXRvO1xyXG4gIC13ZWJraXQtYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIC1tb3otYm94LXNoYWRvdzogMHB4IDJweCAyMHB4IDFweCByZ2JhKDAsMCwwLDAuNzUpO1xyXG4gIGJveC1zaGFkb3c6IDBweCAycHggMjBweCAxcHggcmdiYSgwLDAsMCwwLjc1KTtcclxuICAgXHJcblxyXG59XHJcblxyXG4uY29udGFpbmVyIHtcclxuICBwb3NpdGlvbjogcmVsYXRpdmU7XHJcbiBiYWNrZ3JvdW5kOiBub25lO1xyXG4gYmFja2dyb3VuZC1jb2xvcjogd2hpdGU7XHJcbiB3aWR0aDo3NSU7XHJcbiBoZWlnaHQ6NzUlO1xyXG4gIFxyXG59XHJcblxyXG5cclxuICAiXX0= */";
    /***/
  },

  /***/
  "./src/app/user/signup/signup.component.ts":
  /*!*************************************************!*\
    !*** ./src/app/user/signup/signup.component.ts ***!
    \*************************************************/

  /*! exports provided: SignupComponent */

  /***/
  function srcAppUserSignupSignupComponentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "SignupComponent", function () {
      return SignupComponent;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! src/app/app-service.service */
    "./src/app/app-service.service.ts");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var SignupComponent =
    /*#__PURE__*/
    function () {
      function SignupComponent(appService, route, toaster) {
        var _this8 = this;

        _classCallCheck(this, SignupComponent);

        this.appService = appService;
        this.route = route;
        this.toaster = toaster;
        this.countries = [];
        this.show = false;

        this.getCountries = function () {
          _this8.appService.getCountryNames().subscribe(function (data) {
            _this8.allCountries = data;

            for (var i in data) {
              var singleCountry = {
                name: data[i],
                code: i
              };

              _this8.countries.push(singleCountry);
            }

            _this8.countries = _this8.countries.sort(function (first, second) {
              return first.name.toUpperCase() < second.name.toUpperCase() ? -1 : first.name.toUpperCase() > second.name.toUpperCase() ? 1 : 0;
            });
          });
        }; //end get countries


        this.signupFunction = function () {
          var data = {
            firstName: _this8.firstName,
            lastName: _this8.lastName,
            mobileNumber: "".concat(_this8.countryCode).concat(_this8.mobile),
            email: _this8.email,
            password: _this8.password
          };
          console.log(data);

          _this8.appService.signUp(data).subscribe(function (dataa) {
            console.log(dataa);
            if (dataa.status == 200) setTimeout(function () {
              _this8.route.navigate(['/']);
            }, 2000);else _this8.toaster.error(dataa.message);
          }, function (error) {
            _this8.toaster.error('some error occured');

            console.log("some error occured");
          });
        };
      }

      _createClass(SignupComponent, [{
        key: "ngOnInit",
        value: function ngOnInit() {
          this.getCountries();
          this.getCountryCodes();
        }
      }, {
        key: "goToSignIn",
        value: function goToSignIn() {
          this.route.navigate(['/']);
        }
      }, {
        key: "getCountryCodes",
        value: function getCountryCodes() {
          var _this9 = this;

          this.appService.getCountryNumbers().subscribe(function (data) {
            _this9.countryCodes = data;
          });
        } //end  getcountryCodes

      }, {
        key: "onChangeOfCountry",
        value: function onChangeOfCountry() {
          this.countryCode = this.countryCodes[this.country];
          this.countryName = this.allCountries[this.country];
        }
      }]);

      return SignupComponent;
    }();

    SignupComponent.ctorParameters = function () {
      return [{
        type: src_app_app_service_service__WEBPACK_IMPORTED_MODULE_2__["AppServiceService"]
      }, {
        type: _angular_router__WEBPACK_IMPORTED_MODULE_3__["Router"]
      }, {
        type: ngx_toastr__WEBPACK_IMPORTED_MODULE_4__["ToastrService"]
      }];
    };

    SignupComponent = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["Component"])({
      selector: 'app-signup',
      template: tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! raw-loader!./signup.component.html */
      "./node_modules/raw-loader/dist/cjs.js!./src/app/user/signup/signup.component.html")).default,
      styles: [tslib__WEBPACK_IMPORTED_MODULE_0__["__importDefault"](__webpack_require__(
      /*! ./signup.component.css */
      "./src/app/user/signup/signup.component.css")).default]
    })], SignupComponent);
    /***/
  },

  /***/
  "./src/app/user/user-routing.module.ts":
  /*!*********************************************!*\
    !*** ./src/app/user/user-routing.module.ts ***!
    \*********************************************/

  /*! exports provided: UserRoutingModule */

  /***/
  function srcAppUserUserRoutingModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserRoutingModule", function () {
      return UserRoutingModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_router__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/router */
    "./node_modules/@angular/router/fesm2015/router.js");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/user/forgot-password/forgot-password.component.ts");

    var routes = [{
      path: 'sign-up',
      component: _signup_signup_component__WEBPACK_IMPORTED_MODULE_3__["SignupComponent"],
      pathMatch: 'full'
    }, {
      path: 'forgotpassword',
      component: _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_4__["ForgotPasswordComponent"],
      pathMatch: 'full'
    }];

    var UserRoutingModule = function UserRoutingModule() {
      _classCallCheck(this, UserRoutingModule);
    };

    UserRoutingModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [],
      imports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"].forChild(routes)],
      exports: [_angular_router__WEBPACK_IMPORTED_MODULE_2__["RouterModule"]]
    })], UserRoutingModule);
    /***/
  },

  /***/
  "./src/app/user/user.module.ts":
  /*!*************************************!*\
    !*** ./src/app/user/user.module.ts ***!
    \*************************************/

  /*! exports provided: UserModule */

  /***/
  function srcAppUserUserModuleTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "UserModule", function () {
      return UserModule;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_common__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/common */
    "./node_modules/@angular/common/fesm2015/common.js");
    /* harmony import */


    var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./login/login.component */
    "./src/app/user/login/login.component.ts");
    /* harmony import */


    var _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./signup/signup.component */
    "./src/app/user/signup/signup.component.ts");
    /* harmony import */


    var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
    /*! @angular/forms */
    "./node_modules/@angular/forms/fesm2015/forms.js");
    /* harmony import */


    var _user_routing_module__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
    /*! ./user-routing.module */
    "./src/app/user/user-routing.module.ts");
    /* harmony import */


    var _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
    /*! ./forgot-password/forgot-password.component */
    "./src/app/user/forgot-password/forgot-password.component.ts");
    /* harmony import */


    var ngx_toastr__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
    /*! ngx-toastr */
    "./node_modules/ngx-toastr/fesm2015/ngx-toastr.js");

    var UserModule = function UserModule() {
      _classCallCheck(this, UserModule);
    };

    UserModule = tslib__WEBPACK_IMPORTED_MODULE_0__["__decorate"]([Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
      declarations: [_login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"], _signup_signup_component__WEBPACK_IMPORTED_MODULE_4__["SignupComponent"], _forgot_password_forgot_password_component__WEBPACK_IMPORTED_MODULE_7__["ForgotPasswordComponent"]],
      imports: [_angular_common__WEBPACK_IMPORTED_MODULE_2__["CommonModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_5__["FormsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_8__["ToastrModule"].forRoot(), _angular_forms__WEBPACK_IMPORTED_MODULE_5__["ReactiveFormsModule"], _user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"]],
      exports: [_user_routing_module__WEBPACK_IMPORTED_MODULE_6__["UserRoutingModule"]]
    })], UserModule);
    /***/
  },

  /***/
  "./src/environments/environment.ts":
  /*!*****************************************!*\
    !*** ./src/environments/environment.ts ***!
    \*****************************************/

  /*! exports provided: environment */

  /***/
  function srcEnvironmentsEnvironmentTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony export (binding) */


    __webpack_require__.d(__webpack_exports__, "environment", function () {
      return environment;
    });
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js"); // This file can be replaced during build by using the `fileReplacements` array.
    // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
    // The list of file replacements can be found in `angular.json`.


    var environment = {
      production: false
    };
    /*
     * For easier debugging in development mode, you can import the following file
     * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
     *
     * This import should be commented out in production mode because it will have a negative impact
     * on performance if an error is thrown.
     */
    // import 'zone.js/dist/zone-error';  // Included with Angular CLI.

    /***/
  },

  /***/
  "./src/main.ts":
  /*!*********************!*\
    !*** ./src/main.ts ***!
    \*********************/

  /*! no exports provided */

  /***/
  function srcMainTs(module, __webpack_exports__, __webpack_require__) {
    "use strict";

    __webpack_require__.r(__webpack_exports__);
    /* harmony import */


    var tslib__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
    /*! tslib */
    "./node_modules/tslib/tslib.es6.js");
    /* harmony import */


    var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
    /*! @angular/core */
    "./node_modules/@angular/core/fesm2015/core.js");
    /* harmony import */


    var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
    /*! @angular/platform-browser-dynamic */
    "./node_modules/@angular/platform-browser-dynamic/fesm2015/platform-browser-dynamic.js");
    /* harmony import */


    var _app_app_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
    /*! ./app/app.module */
    "./src/app/app.module.ts");
    /* harmony import */


    var _environments_environment__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
    /*! ./environments/environment */
    "./src/environments/environment.ts");

    if (_environments_environment__WEBPACK_IMPORTED_MODULE_4__["environment"].production) {
      Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["enableProdMode"])();
    }

    Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_2__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_3__["AppModule"]).catch(function (err) {
      return console.error(err);
    });
    /***/
  },

  /***/
  0:
  /*!***************************!*\
    !*** multi ./src/main.ts ***!
    \***************************/

  /*! no static exports found */

  /***/
  function _(module, exports, __webpack_require__) {
    module.exports = __webpack_require__(
    /*! D:\git\TodoList\todo-frontend\src\main.ts */
    "./src/main.ts");
    /***/
  },

  /***/
  1:
  /*!********************!*\
    !*** ws (ignored) ***!
    \********************/

  /*! no static exports found */

  /***/
  function _(module, exports) {
    /* (ignored) */

    /***/
  }
}, [[0, "runtime", "vendor"]]]);
//# sourceMappingURL=main-es5.js.map