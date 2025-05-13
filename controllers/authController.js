const jwt = require('jsonwebtoken');
 
const users = [
    {
        id: "1",
        username: "john_doe",
        password: "12345", // hashed password: "password123"
    },
    {
        id: "2",
        username: "jane_smith",
        password: "12345", // hashed password: "password123"
    },
    {
        id: "3",
        username: "mike_brown",
        password: "12345", // hashed password: "password123"
    },
    {
        id: "4",
        username: "emma_watson",
        password: "12345", // hashed password: "password123"
    }
];

const JWT_SECRET = "your-secret-key";

// register 
async function register(req, res){
    try {
        const { username, password } = req.body;

        // validation
        if (!username || !password) {
            return res.status(400).json({ message: "Username and password are required." });
        }

        // create user and store in memory
        const user = { id: users.length + 1, username, password: password };
        users.push(user);

        res.status(201).json({ message: "User registered successfully." });
    } catch (error) {
        console.log(error);
        
        res.status(500).json({ message: "Server Error" });
    }
};

// login
 function login(req, res){
    try {
        const { username, password } = req.body;

        // find user
        const user = users.find((u) => u.username === username);

        if (!user) {
            return res.status(400).json({ message: "Invalid credentials." });
        }

         if (user.password !== password) {
            return res.status(400).json({ message: "Invalid credentials." });
        }

        // generate jwt
        const token = jwt.sign({ userId: user.id, username: user.username }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.status(200).json({ token, message: "login successful." });
    } catch (error) {
        res.status(500).json({ message: "server error" });
    }
};

module.exports = { register, login };
