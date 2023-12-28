import { dbConfig } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import { NextRequest,NextResponse } from "next/server";
import JWT from "jsonwebtoken"
dbConfig()

export async function POST(request:NextRequest){


    try {
        const res = await request.json();
        const {email,password}=res;


        const user = await User.findOne({email});


        if(!user){

            return NextResponse.json({error:"user not found "},{status:400})
        }
         
        
        // Check the password

        const validPassword = await bcrypt.compare(password, user.password);

        if(!validPassword){
            return NextResponse.json({error:"Invalid Password"},{status:400})
        }


        //  create token data 
        const tokenData={
            id:user._id,
            username:user.username,
            email:user.email
        }


        // create user token
        const token = await JWT.sign(tokenData,process.env.SECERT_KEY!,{expiresIn:"1h"});


        // send response
        const response = NextResponse.json({
            message:"login Successful",
            sucess:true
        })

        // send the token in the cookie
        
        response.cookies.set("token",token,{
            httpOnly:true
        })

        return response 


    } 
    catch (error:any) {
        console.log(error)
        return NextResponse.json({error:error.message},{status:500})
    }

}