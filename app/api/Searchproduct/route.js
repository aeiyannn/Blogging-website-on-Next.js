import { NextResponse } from "next/server";
import { Connectlink } from "./../db";
import mongoose from "mongoose";
import { PRODUCTMODEL } from "../../Model/ProductSchema";

export async function POST(request){

    await mongoose.connect(Connectlink)
    let filter = await PRODUCTMODEL.find()

    let data = await  request.json()
    let data1=data.toString().toLowerCase()

    let maindata = []
if(data==null||data==""){
    return NextResponse.json({
        message:"please Enter data"
    })
}
else{
    for(var i of filter){
        if(i["title"].toLowerCase().includes(data1.toLowerCase())){
            maindata.push(i)
        }
    }
    if(maindata.length==0){
        return NextResponse.json({
            message:"Not Result Found",
            status:false
    })
    }
    else{
        return NextResponse.json({
            message:" get data" ,
            data:maindata
        
        })
    }
}




}
   
