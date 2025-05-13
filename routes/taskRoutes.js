const express = require("express");
const router = express.Router();
const verifyToken = require("../middleware/authMIddleware")
const {createTask , getAllTasks , getTaskById , updateTask ,  deleteTask} = require("../controllers/taskController");

router.post('/create',createTask);
router.get('/',verifyToken, getAllTasks);
router.get('/:id',verifyToken , getTaskById);
router.put('/:id',verifyToken , updateTask);
router.delete('/:id',verifyToken ,deleteTask);

//pagination

const {fetchAllTasks} = require("../controllers/fetchdata")
router.get('/', fetchAllTasks);

module.exports = router;