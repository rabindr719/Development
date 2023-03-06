"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
var url = 'https://jsonplaceholder.typicode.com/todos';
axios_1["default"].get(url).then(function (response) {
    // console.log(response.data);
    var todo = response.data;
    var ID = todo.id;
    var tittle = todo.title;
    var finished = todo.complited;
    console.log("\n    The Todo with ID: " + ID + "\n    Has a tittle of : " + tittle + "\n    Is it finished? " + finished + "\n    ");
});
