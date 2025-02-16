import { asyncHandler } from "../utils/asynchandler.js";
import {APiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
const registerUser = asyncHandler(async (req, resp)=>{

   //take input from the user
   //take data from the form and json it can take direct from the json and for the url there is different technique

   const { fullName, username, email, password} = req.body
   console.log("email: " + email);
   
   //validation 
   if(
      [fullName, username, email, password].some((fields)=>{fields?.trim() === ""})
   ){
      throw new APiError(400, "All field are required");
   }
    
   
   
   //check is user already exist
   const existedUser = User.findOne({
      $or: [{ email }, { username }]
   })
    console.log(existedUser);
    
    if(existedUser){
      throw new APiError(409, "User with email or username already exist")
   }
   
   //check for images
   //check for avatar
   //upload images and avatar to cloudinary,avatar 
   //create a user object- create entery in db
   //remove password and refresh token
   //check for user creation 
   //return res else send error

   
})


export {registerUser}