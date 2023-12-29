import { dbConfig } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import { NextRequest,NextResponse } from "next/server";


// connect the database
dbConfig()


export async function POST(request:NextRequest){
    try {
        

        const reqBody =  await request.json()
        const {token} =  await reqBody;


        const user = await User.findOne({verifyToken:token,verifyTokenExpiry:{$gt: Date.now()}});
        

        if(!user){
            return NextResponse.json({message:"User not Found"},{status:400})

        }

        user.isVerfied = true
        user.verifyToken=undefined
        user.verifyTokenExpiry=undefined
        await user.save()
        return NextResponse.json({message:"Success", sucess:true})
    } catch (error:any) {
        NextResponse.json({error:error},{status:500})
    }
}

