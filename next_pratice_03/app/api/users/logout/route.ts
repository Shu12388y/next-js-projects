import { NextResponse } from "next/server";


// to log out we just want to remove the cookie



export async function GET(){

    try{
        const response = NextResponse.json({
            message:"logout Sucessful",
            success:true
        })
        response.cookies.set("token","",{
            httpOnly:true,
            expires: new Date(0)
        });
    
    
        return response

    }
    catch(error:any){
        console.log(error)
    }
    

}