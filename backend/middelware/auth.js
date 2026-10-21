const jwt = require("jsonwebtoken");
const SECRET_KEY = process.env.SECRET_KEY;



const Auth = (req, res, next) => {
    try {
        const token = req.header("auth-token");
        if (!token) {
            return res.status(401).json({
                msg: "Authorization token is required"
            });
        }
        const data = jwt.verify(token, SECRET_KEY);
        req.user = data.user;

        next();
    } catch (error) {
        return res.status(401).json({
            msg: "Invalid or expired token"
        });
    }
};

module.exports = Auth;