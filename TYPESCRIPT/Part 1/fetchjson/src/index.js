"use strict";
exports.__esModule = true;
var axios_1 = require("axios");
//import { textSpanContainsPosition } from "typescript";
// const fetchResponse = async () => {
//   try {
//     const url = "https://jsonplaceholder.typicode.com/todos/1";
//     const fetch = await axios.get(url);
//     console.log("Fetch ", fetch);
//     const todo = fetch.data;
//     const ID = todo.id;
//     const tittle = todo.title;
//     const finished = todo.complited;
//     console.log(`
//     The Todo with ID: ${ID}
//     Has a tittle of : ${tittle}
//     Is it finished? ${finished}
//     `);
//   } catch (err) {
//     console.log("Error", err);
//   }
// };
//fetchResponse();
//textSpanContainsPosition
var url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1["default"].get(url).then(function (response) {
    // console.log(response.data);
    var todo = response.data;
    var id = todo.id;
    var title = todo.title;
    var completed = todo.completed;
    logTodo(id, title, completed);
});
var logTodo = function (id, title, completed) {
    console.log("\n         The Todo with ID: ".concat(id, "\n         Has a tittle of : ").concat(title, "\n         Is it finished? ").concat(completed, "\n     "));
};
