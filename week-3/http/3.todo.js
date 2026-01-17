const express = require("express");

let todos = [];
let nextId = 1;

let app = express();

// Middleware to parse JSON bodies
app.use(express.json());

// GET all todos
app.get("/todos", function(req, res) {
    res.json(todos);
});

// GET a specific todo by id
app.get("/todos/:id", function(req, res) {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ msg: "Todo not found" });
    }
    res.json(todo);
});

// POST - Create a new todo
app.post("/todos", function(req, res) {
    const newTodo = {
        id: nextId++,
        title: req.body.title,
        completed: false
    };
    todos.push(newTodo);
    res.status(201).json(newTodo);
});

// PUT - Update a todo
app.put("/todos/:id", function(req, res) {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) {
        return res.status(404).json({ msg: "Todo not found" });
    }
    
    if (req.body.title !== undefined) {
        todo.title = req.body.title;
    }
    if (req.body.completed !== undefined) {
        todo.completed = req.body.completed;
    }
    
    res.json(todo);
});

// DELETE a todo
app.delete("/todos/:id", function(req, res) {
    const index = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (index === -1) {
        return res.status(404).json({ msg: "Todo not found" });
    }
    
    todos.splice(index, 1);
    res.json({ msg: "Todo deleted successfully" });
});

app.listen(3000, function() {
    console.log("Server is running on port 3000");
});