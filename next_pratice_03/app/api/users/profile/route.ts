import { NextRequest,NextResponse } from "next/server";
import { getToken } from "@/helpers/getToken";
import User from "@/model/userModel";
import { dbConfig } from "@/dbConfig/dbConfig";

dbConfig()

export async function GET(request:NextRequest){



    try {
        const res =await  getToken(request);
        const user = await User.findOne({_id:res}).select("-password");
        return NextResponse.json({
            message:"user finder",
            data:user
        })

        
    } catch (error) {

       return NextResponse.json({
        error:error
       },
       {
        status:400
       })
        
    }

}