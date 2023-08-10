const roleModel = require("../models/model");



exports.createUser = async (data) => {
    try {
        const newUser = await roleModel.create(data);
        return newUser;
    } catch (error) {
        console.error("Error creating user:", error);
        throw error;
    }
};




exports.findByrole = async (role) => {
    try {
        const user = await roleModel.findOne(data);
        return user;
    } catch (error) {
        console.error("Error retrieving user by role:", error);
        throw error;
    }
};

exports.getUserById = async (id) => {
    try {
        const user = await roleModel.findByPk(id);
        return user;
    } catch (error) {
        console.error("Error retrieving user by id:", error);
        throw error;
    }
};

exports.getAllUsers = async () => {
    try {
        const users = await roleModel.findAll();
        return users;
    } catch (error) {
        console.error("Error retrieving all users:", error);
        throw error;
    }
};



exports.updateUser = async (userId, data) => {
    try {
        const user = await roleModel.findByPk(userId);

        if (!user) {
            throw new Error('User not found');
        }

        const updatedUser= await roleModel.update(data, {
            where: { id: userId },
            returning: true,
        });
        return updatedUser;
    } catch (error) {
        console.error("Error updating user:", error);
        throw error;
    }
};



exports.deleteUser = async (id) => {
    try {
        const deletedRowCount = await roleModel.destroy({ where: { id } });

        if (deletedRowCount === 0) {
            return null;
        }

        return true;
    } catch (error) {
        console.error("Error deleting user:", error);
        throw error;
    }
};