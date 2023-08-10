const userServices = require("../services/services");

exports.createUsers = async (req, res) => {
        
        const data = req.body;
        
        const result = await userServices.createUser(data);

        if (!result) {
            return res.status(500).send({
                message: "Failed to process data.",
            });
        }

        return res.status(200).send({
            message: "Successfully processed data.",
        });
    }



    
exports.getUserByRole = async (req, res) => {
   let  Role = req.params.role;
    data = {
        where :{
            role: Role
        }
    }
    
    try {
        const user = await userServices.findByrole(data);
        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }
        return res.status(200).json({ user });

    } catch (error) {
        console.error('Error while finding the user:', error);
        res.status(500).json({ message: 'An error occurred while finding the user' });
    }
}

exports.getUserById = async (req, res) => {
    try {
        const id = req.params.id;
        console.log(id, "Id");

        const userProfile = await userServices.getUserById(id);

        if (!userProfile) {
            return res.status(404).send({
                message: 'User profile not found.',
            });
        }

        return res.status(200).send({
            message: 'User profile retrieved successfully.',
            userProfile: {
                id: userProfile.id,
                name: userProfile.name,
                email: userProfile.role,
            },
        });
    } catch (error) {
        console.error('Error retrieving user profile:', error);
        return res.status(500).send({
            message: 'An error occurred while retrieving the user profile.',
        });
    }
};

exports.getAllUsers = async (req, res) => {
    try {
        const users = await userServices.getAllUsers();

        if (!users || users.length === 0) {
            return res.status(404).send({
                message: 'No users found.',
            });
        }

        return res.status(200).send({
            message: 'Users retrieved successfully.',
            users: users.map(user => ({
                id: user.id,
                name: user.name,
                role: user.role,
            })),
        });
    } catch (error) {
        console.error('Error retrieving users:', error);
        return res.status(500).send({
            message: 'An error occurred while retrieving users.',
        });
    }
};



exports.updateUser = async (req, res) => {
    try {
        const userId = req.params.id;
        const data = req.body;

        const updatedUser = await userServices.updateUser(userId,data);

        if (!updatedUser) {
            return res.status(404).send({
                message: 'User not found.',
            });
        }

        return res.status(200).json({
            message: 'User updated successfully.'
        });
    } catch (error) {
        console.error('Error updating user:', error);
        return res.status(500).send({
            message: 'An error occurred while updating the user.',
        });
    }
};

exports.deleteUser = async (req, res) => {
    try {
        const id = req.params.id;

        const existingUser = await userServices.getUserById(id);
        if (!existingUser) {
            return res.status(404).send({
                message: 'User not found.',
            });
        }

        const deletedUser = await userServices.deleteUser(id);

        if (!deletedUser) {
            return res.status(500).send({
                message: 'Failed to delete the user.',
            });
        }

        return res.status(200).send({
            message: 'User deleted successfully.',
        });
    } catch (error) {
        console.error('Error deleting user:', error);
        return res.status(500).send({
            message: 'An error occurred while deleting the user.',
        });
    }
};
