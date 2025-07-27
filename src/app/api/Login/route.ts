import { NextRequest, NextResponse } from "next/server";
import { connectDB } from "../../lib/dbConnect";
import {User} from '../../lib/Models/user'
import bcrypt from "bcryptjs";
import jwt from 'jsonwebtoken'


export async function POST(req:NextRequest){
    try{
        const body = await req.json();
        const {email,password} = body;
        if(!email || !password){
            return NextResponse.json({ error: "Email & password required" }, { status: 400 });
        }

        await connectDB()
        const user = await User.findOne({email})
        if(!user){
            return NextResponse.json({ error: "user Not Registerd " }, { status: 401 });
        }
        const passwordMatch = await bcrypt.compare(password, user.password)
        if(!passwordMatch){
            return NextResponse.json({ error: "Password is InCorrect" }, { status: 401 });
        }

                const token = jwt.sign(
                { id: user._id, email: user.email },
                process.env.JWT_SECRET as string,
                { expiresIn: "1h" }
                );

            const response = NextResponse.json({message : "login Successfully"})

               response.cookies.set("token", token, {
                httpOnly: true,
                secure: process.env.NODE_ENV === 'production',
                sameSite: 'none',
                maxAge:  7 * 24 * 60 * 60 * 1000,
                path: "/",
                })
             
             
           return response;
    }catch(error){
        console.error("Login error:", error);
         return NextResponse.json({ error: "Internal server error" }, { status: 500 });
    }
}