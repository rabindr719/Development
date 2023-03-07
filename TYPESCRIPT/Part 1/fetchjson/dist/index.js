"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = __importDefault(require("axios"));
const typescript_1 = require("typescript");
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
typescript_1.textSpanContainsPosition;
const url = 'https://jsonplaceholder.typicode.com/todos/1';
axios_1.default.get(url).then(response => {
    // console.log(response.data);
    const todo = response.data;
    const ID = todo.id;
    const tittle = todo.title;
    const finished = todo.complited;
    console.log(`
         The Todo with ID: ${ID}
         Has a tittle of : ${tittle}
         Is it finished? ${finished}
     `);
});
//# sourceMappingURL=index.js.map