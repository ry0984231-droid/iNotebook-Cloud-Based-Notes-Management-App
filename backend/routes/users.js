const express = require("express");
const route = express.Router();
const Auth = require("../middelware/auth");
const {
    handleGetAllUsers,
    handleRegisterNewUser,
    handleLoginUser,
    handleGetUserById,
    handleDeleteUser,
    handleGetUser,
}
    = require("../controllers/users");

// All Routes
route.get("/user", Auth, handleGetAllUsers);
route.get("/user/:id", Auth, handleGetUserById);
route.post("/createuser", handleRegisterNewUser);
route.post("/loginuser", handleLoginUser);
route.delete("/deleteuser/:id", Auth, handleDeleteUser);
route.get("/getuser", Auth, handleGetUser);

module.exports = route;
