import axios from "axios";
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

const url = 'https://jsonplaceholder.typicode.com/todos/1';

interface Todo{
  id: number;
  title: string;
  completed: boolean;

}


axios.get(url).then(response => {
    // console.log(response.data);
    const todo = response.data as Todo;

    const id = todo.id;
    const title = todo.title;
  const completed = todo.completed;
  
  logTodo(id, title,  completed);
   

});

const logTodo = (id :number, title: string, completed:boolean) => {
   console.log(`
         The Todo with ID: ${id}
         Has a tittle of : ${title}
         Is it finished? ${completed}
     `);
};
