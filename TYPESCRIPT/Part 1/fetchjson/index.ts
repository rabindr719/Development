import axios from 'axios';
const url = 'https://jsonplaceholder.typicode.com/todos';
axios.get(url).then(response => {
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