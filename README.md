# Task Management API

## 📌 Project Overview
This is a simple **Task Management API** built with **Node.js, Express, and MongoDB**. The API allows users to create, retrieve, update, and delete tasks while managing users.

## 🚀 Features
- **Create a new task** 📌
- **Retrieve all tasks** 📂
- **Retrieve a specific task by ID** 🔍
- **Update a task** ✏️
- **Delete a task** ❌
- **User authentication & management** 👤

## 📁 Project Structure
```
📂 project-folder/
├── 📂 models/            # Mongoose schemas
│   ├── Task.js
│   ├── User.js
│
├── 📂 routes/            # API routes
│   ├── taskRoutes.js
│
├── 📂 controllers/       # Business logic for routes
│   ├── taskController.js
│
├── server.js            # Main server entry point
├── .env.example         # Example environment variables
├── package.json         # Dependencies & scripts
└── README.md            # Documentation
```

---

## 🛠️ Setup & Installation
### 1️⃣ Clone the Repository
```sh
cd Final project
```

### 2️⃣ Install Dependencies
```sh
npm install
```

### 3️⃣ Configure Environment Variables
Create a `.env` file in the root directory and set up the following variables:
```
DB_URL=mongodb+srv://your-mongo-uri
```

### 4️⃣ Start the Server
```sh
npm run dev
```

> The API will run on **http://localhost:3000**

---

## 📌 API Endpoints
### Task Endpoints
| Method | Endpoint           | Description                 |
|--------|-------------------|-----------------------------|
| **GET** | `/api/tasks`       | Retrieve all tasks         |
| **GET** | `/api/tasks/:id`   | Retrieve a specific task   |
| **POST** | `/api/tasks`      | Create a new task          |
| **PUT** | `/api/tasks/:id`   | Update a task              |
| **DELETE** | `/api/tasks/:id` | Delete a task              |

### Example Task Creation Request
```json
POST /api/tasks
{
  "title": "Complete the report",
  "description": "Submit the monthly report",
  "status": "in-progress",
  "priority": "high",
  "dueDate": "2025-04-01",
  "category": "work"
}
```
---


## 📜 License
This project is open-source and available under the **MIT License**.
