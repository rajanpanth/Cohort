const express = require("express");
const fs = require("fs");
const app = express();

let todos = [];
let requestCount = 0;

// Middlewares
app.use(express.json());

// Request logging middleware
function requestLogger(req, res, next) {
    requestCount++;
    console.log(`${req.method} ${req.url}`);
    next();
}
app.use(requestLogger);

// Input validation middleware
function validateTodo(req, res, next) {
    if (req.method === "POST" && !req.body.title) {
        return res.status(400).json({ error: "Title is required" });
    }
    next();
}

// Read todos from file
function readTodos() {
    try {
        const data = fs.readFileSync("todos.json", "utf-8");
        todos = JSON.parse(data);
    } catch (err) {
        todos = [];
    }
}

// Write todos to file
function writeTodos() {
    fs.writeFileSync("todos.json", JSON.stringify(todos, null, 2));
}

// Serve the frontend HTML
app.get("/", function(req, res) {
    res.sendFile(__dirname + "/index.html");
});

// GET all todos with filter
app.get("/todos", function(req, res) {
    readTodos();
    let result = todos;
    
    const filter = req.query.filter;
    if (filter === "completed") {
        result = todos.filter(t => t.completed === true);
    } else if (filter === "pending") {
        result = todos.filter(t => t.completed === false);
    }
    
    const search = req.query.search;
    if (search) {
        result = result.filter(t => t.title.toLowerCase().includes(search.toLowerCase()));
    }
    
    res.json(result);
});

// GET a specific todo
app.get("/todos/:id", function(req, res) {
    readTodos();
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    
    if (!todo) {
        return res.status(404).json({ error: "Todo not found" });
    }
    
    res.json(todo);
});

// POST - Create new todo
app.post("/todos", validateTodo, function(req, res) {
    readTodos();
    
    const newTodo = {
        id: todos.length > 0 ? Math.max(...todos.map(t => t.id)) + 1 : 1,
        title: req.body.title,
        completed: false
    };
    
    todos.push(newTodo);
    writeTodos();
    
    res.status(201).json(newTodo);
});

// PUT - Update todo
app.put("/todos/:id", function(req, res) {
    readTodos();
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    
    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }
    
    if (req.body.title !== undefined) {
        todos[todoIndex].title = req.body.title;
    }
    if (req.body.completed !== undefined) {
        todos[todoIndex].completed = req.body.completed;
    }
    
    writeTodos();
    res.json(todos[todoIndex]);
});

// DELETE todo
app.delete("/todos/:id", function(req, res) {
    readTodos();
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    
    if (todoIndex === -1) {
        return res.status(404).json({ error: "Todo not found" });
    }
    
    todos.splice(todoIndex, 1);
    writeTodos();
    
    res.json({ message: "Todo deleted" });
});

// Get request count
app.get("/requestCount", function(req, res) {
    res.json({ requestCount });
});

app.listen(3000, function() {
    console.log("Server running on http://localhost:3000");
});
