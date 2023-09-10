import mongoose from "mongoose";
let productSchema = mongoose.Schema({
    title:String,
    description:String,
    image:String,
    username:String,
    uid:String
})

if( mongoose.models["products"]){
    delete  mongoose.models["products"]

}

export const PRODUCTMODEL = mongoose.model("products",productSchema)

