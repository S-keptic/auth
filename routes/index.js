import express from 'express'
import userController from '../controllers/userController.js'
const router = express.Router()

router.get("/" , userController.home)
router.get("/login" , userController.login)
router.post("/registration" , userController.userCreateDoc)

router.get("/registration" , userController.registration)
router.post("/login",userController.loginVerify)

export default router