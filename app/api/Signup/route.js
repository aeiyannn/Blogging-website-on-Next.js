import {NextResponse} from 'next/server'
import mongoose from 'mongoose'
import {Connectlink} from "../db"
import {USERMODEL} from '../../Model/UserShema'
export async function POST(request,content){
    await mongoose.connect(Connectlink)
    let data=await request.json()
    const chkuser=await USERMODEL.findOne({email:data.email})
    if(data.name||data.email||data.password||data.number){
        if (chkuser){
            return NextResponse.json({
        
                msg:"User Already register",
                status:false
            })
        }
        else{
            let res= USERMODEL(data)
            await res.save()
             return NextResponse.json({
                 msg:"User create Successfully",
                 status:true
             })
    }
    }
       else{
        return NextResponse.json({
            msg:"Enter all value",
            status:false
        })
       }

    }
      
