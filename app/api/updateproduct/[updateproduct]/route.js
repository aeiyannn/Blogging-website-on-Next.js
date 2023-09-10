import { NextResponse } from "next/server";
import { Connectlink } from "../../db";
import mongoose from "mongoose";
import { PRODUCTMODEL } from "../../../Model/ProductSchema";

export async function GET(request,content){
    let id=content.params.updateproduct
    await mongoose.connect(Connectlink)
    let checkuser = await PRODUCTMODEL.findById({ _id:id })
    console.log(checkuser)
    if(checkuser!=null){
        return NextResponse.json({
            data: checkuser,
            status:true
        })

    }
    else{
        return NextResponse.json({
            message: "Not Found",
            status:false
        })

    }
}