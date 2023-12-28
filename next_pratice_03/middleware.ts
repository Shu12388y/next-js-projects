import { request } from "http";
import { url } from "inspector";
import { NextRequest,NextResponse } from "next/server";

// This middleware help us what will we the public path and private path


// Like login and signup are public path
// But the profile is a private path as we the user get authorized then can go to the profile


export async function middleware(request:NextRequest) {
     
    const path=request.nextUrl.pathname;


    const publicPath = path === "/login" || path === "/signup";
    
    const token = request.cookies.get("token")?.value || '';


    if(publicPath && token){
        return NextResponse.redirect(new URL ('/',request.nextUrl))
    }
    
    if(!publicPath && !token){
        return NextResponse.redirect(new URL("/login",request.nextUrl))
    }
    


}

export const config={
    matcher:[
        '/',
        '/profile',
        '/login',
        '/signup'
    ]

}