const express = require("express");
const taskRoutes = require("./routes/taskRoutes");
const authRoutes = require("./routes/authRoutes")
const app = express();
app.use(express.json());

//test api
app.get('/', (req,res) =>{
    res.json({message:"Task manager is runnig"})
})
app.use('/tasks',taskRoutes)
app.use('/auth',authRoutes)

const PORT = 5000;
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});