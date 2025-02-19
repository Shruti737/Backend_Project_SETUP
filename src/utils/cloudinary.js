import {v2 as cloudinary} from "cloudinary"
import fs from "fs"


cloudinary.config({ 
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME, 
  api_key: process.env.CLOUDINARY_API_KEY, 
  api_secret: process.env.CLOUDINARY_API_SECRET 
});


const uploadOnCloudinary = async (localFilePath) => {
    try {
       // console.log("I am Cloudinary");
   
        if (!localFilePath) return null
        //upload the file on cloudinary
        const response = await cloudinary.uploader.upload(localFilePath, {
            resource_type: "auto"
        })
       
        // file has been uploaded successfull
        console.log(JSON.stringify(response,null,5));
        
        console.log("file is uploaded on cloudinary ", response.url);
        //console.log("localFilePath" + localFilePath);
        
        fs.unlinkSync(localFilePath)
        return response;

    } catch (error) {
        fs.unlinkSync(localFilePath) // remove the locally saved temporary file as the upload operation got failed
        //console.log("localFilePath" + localFilePath);
        return null;
    }
}



export {uploadOnCloudinary}