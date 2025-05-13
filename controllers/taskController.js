const task = require("../models/taskModel");


// In-memory storage
let tasks = [
    {
        id: "1",
        title: "First Task",
        description: "This is the first task",
        status: "pending",
        createdAt: new Date(),
        updatedAt: new Date(),
    },
    {
        id: "2",
        title: "Second Task",
        description: "This is the second task",
        status: "in-progress",
        createdAt: new Date(),
        updatedAt: new Date(),
    }
];

function createTask(req, res) {
  try {
    const { title, description, status } = req.body;

    // basic validation
    if (!title || !description) {
      return res
        .status(400)
        .json({ message: "title and description are required " });
    }

    //create task
    const newTask = {
      id: 1,
      title: title,
      description: description,
      status: status || "pending",
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    //push
    task.push(newTask);

    //response
    res.status(200).json({ success: true, data: newTask });
  } catch (error) {
    res.status(500).json({ success: false, message: error.message });
  }
}

function getAllTasks(req, res){
    try {
        res.status(200).json(tasks);
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
};

function getTaskById(req, res) {
    try {
        const { id } = req.params;
        const task = tasks.find((task) => task.id === id);

        if (!task) {
            return res.status(404).json({ message: "task not found." });
        }

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
};

function updateTask(req, res) {
    try {
        const { id } = req.params;
        const { title, description, status } = req.body;

        const task = tasks.find((task) => task.id === id);
        if (!task) return res.status(404).json({ message: "task not found." });

        Object.assign(task, { title, description, status, updatedAt: new Date() });

        res.status(200).json(task);
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
};

function deleteTask(req, res) {
    try {
        const { id } = req.params;
        const task = tasks.find((task) => task.id === id);
        
        if (!task) return res.status(404).json({ message: "Task not found." });

        tasks = tasks.filter((task) => task.id !== id);
        res.status(200).json({ message: "Task deleted successfully." });
    } catch (error) {
        res.status(500).json({ message: "Server Error: Unable to delete the task." });
    }
};



module.exports = { createTask , getAllTasks , getTaskById , updateTask ,  deleteTask};
