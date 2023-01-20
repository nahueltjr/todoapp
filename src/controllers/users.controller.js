const UserServices = require("../services/user.services")

const getAllUsers = async (req, res) => {
    try {
        const result = await UserServices.getAll();
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getUserById = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getById(id);
        res.status(200).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const getUserTasks = async (req, res) => {
    try {
        const {id} = req.params;
        const result = await UserServices.getTasks(id);
        res.json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}

const createUser = async (req, res) => {
    try {
        const newUser = req.body;
        const result = await UserServices.create(newUser);
        res.status(201).json(result);
    } catch (error) {
        res.status(400).json(error.message);
    }
}
const updateUser = (req, res) => {
    res.json({message: "Actualizando usuario"})
}
const deleteUser = (req, res) => {
    res.json({message: "Eliminando usuario"})
}

module.exports = {
    getAllUsers,
    getUserById,
    getUserTasks,
    createUser,
    updateUser,
    deleteUser
}