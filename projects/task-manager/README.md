# 📝 Task Manager - Full-Stack Project

A complete task management application built using concepts from Week 1-5 of your cohort learning.

## 🎯 Features Implemented

### Backend (Express.js)
- ✅ RESTful API endpoints (GET, POST, PUT, DELETE)
- ✅ File system storage using `todos.json`
- ✅ Request logging middleware (tracks request count)
- ✅ Input validation middleware
- ✅ CORS support for frontend-backend communication
- ✅ Async/Await for file operations
- ✅ Error handling

### Frontend (HTML/CSS/JS)
- ✅ Add new tasks with title and description
- ✅ Edit existing tasks
- ✅ Delete tasks with confirmation
- ✅ Mark tasks as complete/pending
- ✅ Filter tasks (All/Completed/Pending)
- ✅ Search functionality
- ✅ Real-time statistics (Total, Pending, Completed, Request Count)
- ✅ Beautiful gradient UI with animations
- ✅ Responsive design

## 📚 Concepts Used from Your Learning

### Week 1 - Async JS & DOM
- Promises and Async/Await for API calls
- DOM manipulation (createElement, appendChild, etc.)
- Event listeners

### Week 2 - Promises
- Promise.all() for parallel requests (statistics)
- Promisified file system operations
- Error handling with try-catch

### Week 3 - HTTP & Middlewares
- Express.js server setup
- REST API endpoints
- Custom middleware (request logger, validator)
- CORS middleware

### Week 4 - Routes & Fetch
- Fetch API for HTTP requests
- Query parameters for filtering and search
- JSON request/response handling

### Week 5 - Authentication patterns
- Similar structure to your authentication.js
- Middleware pattern for validation

## 🚀 How to Run

1. **Navigate to the project directory:**
   ```powershell
   cd "c:\Users\panth\OneDrive\Desktop\cohort\projects\task-manager"
   ```

2. **Install dependencies:**
   ```powershell
   npm install
   ```

3. **Start the server:**
   ```powershell
   npm start
   ```
   
   Or for development with auto-restart:
   ```powershell
   npm run dev
   ```

4. **Open your browser:**
   - Go to: `http://localhost:3000`

## 📁 Project Structure

```
task-manager/
├── server.js           # Express backend with all API routes
├── package.json        # Dependencies and scripts
├── todos.json         # File-based database
└── public/
    └── index.html     # Frontend (HTML + CSS + JS)
```

## 🔌 API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/todos` | Get all todos (supports ?filter=all/completed/pending&search=query) |
| GET | `/todos/:id` | Get a specific todo |
| POST | `/todos` | Create a new todo |
| PUT | `/todos/:id` | Update a todo |
| DELETE | `/todos/:id` | Delete a todo |
| GET | `/requestCount` | Get total request count |

## 🎨 Features in Action

1. **Add Task**: Enter title and optional description, click "Add Task"
2. **Filter**: Click "All", "Pending", or "Completed" buttons
3. **Search**: Type in search box to filter by keyword
4. **Edit**: Click "Edit" button, modify, and save
5. **Complete**: Click "Mark Complete" to toggle status
6. **Delete**: Click "Delete" with confirmation
7. **Statistics**: View real-time counts at the top

## 💡 Learning Highlights

- **Middleware Pattern**: Request logging and validation
- **Async/Await**: Clean asynchronous code
- **File System**: Persistent storage without a database
- **REST API**: Proper HTTP methods and status codes
- **DOM Manipulation**: Dynamic UI updates
- **Error Handling**: User-friendly error messages
- **Promises**: Parallel requests for statistics

## 🔧 Customization

- Change port in `server.js` (default: 3000)
- Modify colors in CSS gradient and theme
- Add more filters or sorting options
- Implement categories or priority levels

## 📝 Next Steps (Optional Enhancements)

- Add user authentication (using Week 5 concepts)
- Add due dates and reminders
- Implement task categories/tags
- Add drag-and-drop reordering
- Export/import tasks
- Add dark mode toggle

---

**Built with concepts from Cohort Week 1-5** 🚀
