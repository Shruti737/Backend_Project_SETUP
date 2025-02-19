import { asyncHandler } from "../utils/asynchandler.js";
import {ApiError} from "../utils/ApiError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js"
import { ApiResponse } from "../utils/APiResponse.js";

const registerUser = asyncHandler(async (req, res)=>{
  //take the input from the user
   const {email, fullName, username, password} = req.body;

  // validation check
   if (
    [fullName, email, username, password].some((field) => !field?.trim())
  ) {
    throw new ApiError(400, "All Fields are required");
  }
  //check for the existing user 
  const ExistedUser = await User.findOne({
      $or:[{username}, {email}]
  })
  
  //console.log("ExistedUser" + ExistedUser);
  
  if(ExistedUser){
      throw new ApiError(409, "User Already Exist")
  }

  //check avatar image  and cover image
  const avatarLocalPath = req.files?.avatar[0]?.path;
   // console.log("-------------" + JSON.stringify(req.files, null, 2)); 

    
  let coverImageLocalPath;
  // = req.files?.coverImage[0]?.path;
   //console.log("coverImageLocalPath" + coverImageLocalPath);
   if(req.files && Array.isArray(req.files.coverImage) && req.files.coverImage.length > 0){
    coverImageLocalPath = req.files?.coverImage[0]?.path;
   }

  if(!avatarLocalPath){
      throw new ApiError(400, "Avatar FIles are required")
  }
    
    //upload to the cloudinary, avatar
   const avatar = await uploadOnCloudinary(avatarLocalPath)
   const coverImage = await uploadOnCloudinary(coverImageLocalPath)
   

   if(!avatar){
     throw new ApiError(400,"Avatr Files are required")
   };
  //create user object - create entry in db
  const user = await User.create({
   fullName, 
   avatar: avatar.url,
   coverImage: coverImage?.url || "",
   email, 
   password,
   username: username.toLowerCase()
  })
  //remove password and refresh token field from response
  const createdUser = await User.findById(user._id).select(
   "-password -refreshToken"
  )
  console.log("createdUser" + createdUser);
  
  //check for user creation
  if(!createdUser){
   throw new ApiError(500, "Something went wrong while registering the user")
  }
  //return res
  return res.status(201).json(
   new ApiResponse(201, createdUser, "User Registerd Succesfully")
  )
  })
  export {registerUser}





















   // if(
      //    [fullName, username, email, password].some((fields)=>{fields?.trim() === ""})
      // ){
         //    throw new APiError(400, "All field are required");
         // }
         // const { fullName, username, email, password} = req.body
         //  + email);
         // const existedUser = User.findOne({
         //    $or: [{ email }, { username }]
         // })
         // er);
         
         // if(existedUser){
         //     throw new APiError(409, "User with email or username already exist")
         //    }