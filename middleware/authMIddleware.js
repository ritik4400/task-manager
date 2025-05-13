const jwt = require('jsonwebtoken');
const JWT_SECRET = "your-secret-key";

const verifyToken = (req, res, next) => {
    const authHeader = req.header('Authorization');
    const token = authHeader ? authHeader.split(" ")[1] : null;


    if (!token) {
        return res.status(403).json({ message: "Access Denied. No token provided." });
    }

    try {
        const decoded = jwt.verify(token, JWT_SECRET); 
        req.user = decoded;
        next();
    } catch (error) {
        res.status(401).json({ message: "Invalid Token." });
    }
};

module.exports = verifyToken;
