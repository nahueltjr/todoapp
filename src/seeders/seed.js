const db = require("../utils/database");
const Users = require("../models/users.model");
const Todos = require("../models/todos.model");
const Categories = require("../models/categories.model");
const TodosCategories = require("../models/todos-categories.model")

const users = [
    {username: "Nahuel",email: "nahuel@gmail.com",password: "1234"},
    {username: "Tobias",email: "tobi@gmail.com",password: "1234"},
    {username: "Keila",email: "kei@gmail.com",password: "1234"},
];

const todos =[
    {title: "Estudiar node", description:"lsalsdaas",user_id:1},
    {title: "pasear al perro", description:"lsalsdaas",user_id:2},
    {title: "Lavar la ropa", user_id: 2},
    {title: "ir al medico", description:"lsalsdaas",user_id:3},
];

const categories = [
    {name: 'personal'},
    {name: 'educacion'},
    {name: 'salud'},
    {name: 'trabajo'},
    {name: 'hogar'},
    {name: 'cocina'},
    {name: 'deporte'},
    {name: 'ocio'},
    {name: 'financiero'},
    {name: 'entretenimiento'},
];

const todosCategories = [
    { categoryId: 1, todoId: 1 },
    { categoryId: 2, todoId: 1 },
    { categoryId: 4, todoId: 1 },
    { categoryId: 1, todoId: 2 },
    { categoryId: 7, todoId: 2 },
    { categoryId: 10, todoId: 2 },
    { categoryId: 3, todoId: 2 },
    { categoryId: 5, todoId: 3 },
    { categoryId: 6, todoId: 3 },
    { categoryId: 1, todoId: 4 },
    { categoryId: 3, todoId: 4 },
];

db.sync({force: true})
.then(()=>{
    console.log("iniciando seeders");
    users.forEach(user => Users.create(user));

    setTimeout(() => {
        todos.forEach(todo => Todos.create(todo));
    }, 100);
    setTimeout(() => {
        categories.forEach(category => Categories.create(category));
    }, 200);
    setTimeout(() => {
        todosCategories.forEach(tc => TodosCategories.create(tc));
    }, 300);
})
.catch(err => console.log(err));