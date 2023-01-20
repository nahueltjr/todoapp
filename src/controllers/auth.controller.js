const jwt = require("jsonwebtoken");
const AuthService = require("../services/auth.service");
require("dotenv").config();

const userLogin = async (req, res) => {
    try {
        const {email, password} = req.body;
        const response= await AuthService.Login(email, password);
        if(response.isValid){
            const data = {
                email: response.result.email,
                username: response.result.username,
                id: response.result.id
            }
            const token = jwt.sign(data, process.env.JWT_SECRET, {algorithm: "HS512"});
            data.token = token;
            res.json(data);
        }else {
            res.status(401).json({mesagge: "Credenciales invalidas"})
        }
    } catch (error) {
        res.status(400).json(error.message);
    }
}

module.exports = {
    userLogin,
}