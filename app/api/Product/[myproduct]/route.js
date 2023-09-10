import { NextResponse } from "next/server";
import { Connectlink } from "../../db";
import mongoose from "mongoose";
import { PRODUCTMODEL } from "../../../Model/ProductSchema";

export async function GET(request,content){
    let useruid=content.params.myproduct
    await mongoose.connect(Connectlink)
    let checkuser = await PRODUCTMODEL.find({ uid:useruid })
    console.log(checkuser)
    if(checkuser!=null){
        return NextResponse.json({
            data: checkuser,
            message: "My blog"
        })

    }
    else{
        return NextResponse.json({
            message: "Not add"
        })

    }
}
export async function PUT(request,content){
    let productId={_id:content.params.myproduct}
    let data=await request.json()
    mongoose.connect(Connectlink)
    let filter= await PRODUCTMODEL.findOneAndUpdate(productId,data)
    return NextResponse.json({
        data:filter,
        status:true,
        msg:"data update"
    })
    
    }
    export async function DELETE(request,content){
        let productId={_id:content.params.myproduct}
        mongoose.connect(Connectlink)
        let filter= await PRODUCTMODEL.deleteOne(productId)
        return NextResponse.json({
            data:filter,
            status:true,
            msg:"Blog Delete"
        })
        
        }
