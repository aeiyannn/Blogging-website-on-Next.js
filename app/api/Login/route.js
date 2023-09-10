import {NextResponse} from 'next/server'
import mongoose from 'mongoose'
import {Connectlink} from "../db"
import {USERMODEL} from '../../Model/UserShema'

export async function POST(request,content){
await mongoose.connect(Connectlink)
let data=await request.json()
let Checkuser=await USERMODEL.findOne({email:data.email})
console.log(Checkuser)
if(Checkuser!=null){


if(Checkuser.password==data.password){
    return NextResponse.json({
       msg:"User Login",
       status:true,
       uid:Checkuser._id
    })
}
else{
    return NextResponse.json({
        msg:"Incorrect password or username",
        status:false
     })
    }
}
else{
    return NextResponse.json({
        msg:"Incorrect Username",
        status:false
    })
}




}