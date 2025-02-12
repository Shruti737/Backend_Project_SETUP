import mongoose from "mongoose"
import { User } from "./user.model"
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2"
const videoSchema = new mongoose.Schema(
    {
       videoFile: {
         type: String,
         
       },
       thumbnail: {
         type: String,
       },
       owner: {
          type: mongoose.Schema.Types.ObjectId,
          ref: User
       },
       title: {
        type: String,
       },
       description: {
        type: String,
       },
       duration: {
        type: Number,
        required: true
       },
       views: {
        type: Number,
        required: true
       },
       isPublished: {
        type: Boolean,
        default: true
       },
     
    }, {timestamps: true})

    videoSchema.plugin(mongooseAggregatePaginate)

export const Video = mongoose.model("videSchema", Video)