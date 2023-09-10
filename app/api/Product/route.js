import { NextResponse } from "next/server";
import mongoose from "mongoose";
import { PRODUCTMODEL } from "../../Model/ProductSchema";
import { Connectlink } from "../db";

export  async function POST(request,content){
        await mongoose.connect(Connectlink)
        let data=await request.json()
        if (data.title&&data.description&&data.image&&data.username&&data.uid){
            let product = PRODUCTMODEL(data)
            let adddata=await product.save()
            return NextResponse.json({
                data:adddata,
                msg:"blog Added Succesfully",
                status:true
        
        })
        }
       else{
   return NextResponse.json({
            msg:"Enter Must Be all feild",
            status:false
    
    })
       }


}
export  async function GET(){

    await mongoose.connect(Connectlink)
        let filter = await PRODUCTMODEL.find()
            return NextResponse.json({
                data:filter,
                status:true
            })
        }


