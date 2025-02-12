import mongoose from "mongoose"
import jwt from "jsonwebtoken"
import bcrypt from "bcrypt"
const userSchema = new mongoose.Schema({
    watchHistory: [{
       type: mongoose.Schema.Types.ObjectId,
       ref: Video,

    }],
    username: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    email:{
        type: String,
        unique: true,
        required: true,
        lowercase: true,
    },
    fullName: {
        type: String,
        unique: true,
        required: true,
        lowercase: true,
        index: true,
    },
    avatar:{
        type: String,
       
        required: true,
    },
    coverImage: {
        type: String,
        unique: true,
        required: true,
    },
    password:{
        type: String,
        required: [true, "password is required"], 
    },
    refreshToken:{
        type: String,
    }
}, {timestamps: true})

userSchema.pre("save", async function(next){
     if(!this.isModified("password")) return next();
     this.password = bcrypt.hash(this.password, 10);
     next()
})

userSchema.methods.isPasswordCorrect = async function
(password){
    return await bcrypt.compare(password, this.password)
}

export const User = mongoose.model("User", userSchema)


//jwt is a bearer token
// Because of its relatively small size, a JWT can be sent through a URL, through a POST parameter, or inside an HTTP header, and it is transmitted quickly. A JWT contains all the required information about an entity to avoid querying a database more than once. The recipient of a JWT also does not need to call a server to validate the token.
// that defines a compact and self-contained way for securely transmitting information between parties as a JSON object. 