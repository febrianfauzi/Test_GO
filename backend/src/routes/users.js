const express = require("express");

const UsersController = require("../controller/users");

const router = express.Router();

// CREATE - POST
router.post("/", UsersController.createNewUsers);

// READ - GET
router.get("/", UsersController.getAllUsers);
router.get("/:id", UsersController.getUserById);

// UPDATE - PUT
router.put("/:id", UsersController.updateUser);

// DELETE - DELETE
router.delete("/:id", UsersController.deleteUser)

module.exports = router;
