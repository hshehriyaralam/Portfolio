import { NextResponse } from "next/server";
import { jwtVerify } from 'jose'


// Secret Encoder
const secret  = new TextEncoder().encode(process.env.JWT_SECRET)

export async function middleware(req:any){
    const token = req.cookies.get('token')?.value

    if(!token){
        return NextResponse.redirect(new URL('/Login', req.url));
    }

    try{
        await jwtVerify(token,secret)
        return NextResponse.next()
    }catch(error){
        console.log("JWT verification failed", error);
        return NextResponse.redirect(new URL('/Login', req.url));
    }
}


export const config = {
  matcher: ['/Admin'],
};