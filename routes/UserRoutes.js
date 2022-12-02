import UserController from "../controllers/UserController.js";
import express from "express"
const router=express.Router()
import checkUserAuth from "../middlewares/auth-middleware.js"

//route level middleware
router.use("/changepassword",checkUserAuth)
router.use("/loggeduser",checkUserAuth)


//Public Route
router.post("/register",UserController.userRegistration)
router.post("/login",UserController.userLogin)
router.post("/send-reset-password-email",UserController.sendUserPasswordResetEmail)
router.post("/reset-password/:id/:token",UserController.userPasswordReset)

//Private Route
router.post("/changepassword",UserController.changeUserPassword)
router.get("/loggeduser",UserController.loggedUser)




export default router