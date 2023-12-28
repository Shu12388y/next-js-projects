import { NextRequest } from "next/server";
import JWT  from "jsonwebtoken";

export async function getToken(request:NextRequest) {
try{
    const token = request.cookies.get('token')?.value || '';
    const decode:any = JWT.verify(token,process.env.SECERT_KEY!)

    return decode.id

}
catch(error:any){
    throw new Error(error)
}

    
}