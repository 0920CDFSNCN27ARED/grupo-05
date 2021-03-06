const express = require("express");
const router = express.Router();

const isNotLoggedMiddleware = require("../middlewares/auth/isNotLoggedMiddleware");
const isLoggedMiddleware = require("../middlewares/auth/isLoggedMiddleware");
const validations = require("../middlewares/validations/userValidations");
const upload = require("../middlewares/multerUser");

const userController = require("../controllers/usersController");

router.get("/register", isLoggedMiddleware, userController.showRegister);
router.post(
    "/register",
    upload.any(),
    validations.register,
    userController.register
);

router.get("/login", isLoggedMiddleware, userController.showLogin);
router.post("/login", validations.login, userController.login);

router.get("/logout", isNotLoggedMiddleware, userController.logout);

module.exports = router;
