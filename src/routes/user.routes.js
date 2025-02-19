import { Router } from "express";
import { registerUser } from "../controllers/user.controller.js";
import {upload} from "../middlewares/multer.middleware.js"
const router = Router()


router.route("/register").post(
    upload.fields([
        {
            name: "avatar",  // hmlog 2do file ko accept kar rahe hai aavatar aur coverimage, aur hmlog ye dono file kis                          name                  janenga                wo likh ha yaha a
                             // aur kittne  accept karenge filr usska count given ha yaha pe
            maxCount: 1
        },
        {
            name: "coverImage",
            maxCount: 1
        }]
    ),
    
    registerUser)
export default router