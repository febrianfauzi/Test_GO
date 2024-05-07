const UsersModel = require("../model/users");

const getAllUsers = async (req, res) => {
    try {
        const [data] = await UsersModel.getAllUsers();

        res.json({
            message: "GET all users success",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const getUserById = async (req, res) => {
    const { id } = req.params;

    try {
        const [data] =  await UsersModel.getUserById(id);

        res.json({
            message: "GET users by id success",
            data: data,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const createNewUsers = async (req, res) => {
    const { body } = req;

    try {
        await UsersModel.createNewUser(body);
        res.status(201).json({
            message: "CREATE new users success",
            data: body,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const updateUser = async (req, res) => {
    const { id } = req.params;
    const { body } = req;

    try {
        await UsersModel.updateUser(body, id);
        res.json({
            message: "UPDATE user success",
            data: {
                id_pegawai: id,
                ...body,
            },
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

const deleteUser = async (req, res) => {
    const { id } = req.params;

    try {
        await UsersModel.deleteUser(id);
        res.json({
            message: "DELETE user success",
            data: null,
        });
    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error,
        });
    }
};

module.exports = {
    getAllUsers,
    getUserById,
    createNewUsers,
    updateUser,
    deleteUser,
};
