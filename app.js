const express = require("express");

const app = express();
const Sequelize = require("sequelize");
const sequelize = require("./config/database");
const userControllers = require("./controllers/usercontrollers");
// Middleware
app.use(express.urlencoded({ extended : true }));
app.use(express.json());

// Routes
// require("./route/route")(app);
app.get("/getbyid/:id",userControllers.getUserById);
app.get("/getallusers",userControllers.getAllUsers);
app.get("/getbyrole/:role",userControllers.getUserByRole);
app.post("/create",userControllers.createUsers);
app.patch("/updatebyid/:id",userControllers.updateUser);
app.delete("/deletebyid/:id",userControllers.deleteUser);
// Sync models with the database and create tables
sequelize.sync({ force: false, logging: false })
    .then(() => {
        console.log('Database is connected!');
    })
    .catch((error) => {
        console.error('Error syncing database:', error);
    });


const PORT = 3000;

app.listen(PORT, () => {
    console.log(`🚀 Server is running on Port:${PORT}`);
});
