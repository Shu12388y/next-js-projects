import { dbConfig } from "@/dbConfig/dbConfig";
import User from "@/model/userModel";
import bcrypt from "bcryptjs";
import { NextRequest,NextResponse } from "next/server";


// connect the database
dbConfig()

// create methods
// post method

export async function POST(request:NextRequest){
  
    try {
        const reqBody= await request.json();
        const {username,email,password}=reqBody;
        

        // check weather user exist or not
        const user = await User.findOne({email})
        if(user){
            return NextResponse.json({error:"User already exist"},{status:400})
        } 

        // hash the password
        const salt= await bcrypt.genSalt(10);
        const hashPassword= await bcrypt.hash(password,salt);


        // create the user

        const newUser =  new User({
            username,
            email,
            password:hashPassword
        })
        // save the user
        const savedUser= await newUser.save()

        return NextResponse.json({message:"Success",success:true,savedUser})
    } catch (error:any) {
        return NextResponse.json({error:error.message},
            {status:500})
    }


}
