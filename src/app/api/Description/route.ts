import { NextResponse, NextRequest } from "next/server";
import { Description } from "../../lib/Models/Description";
import { connectDB } from "../../lib/dbConnect";




export async function GET(req: NextRequest){
    try{
        await connectDB()
        const allDescriptions = await Description.find()
        return NextResponse.json({success : true, data :allDescriptions});
        
    }catch(error){
        return Response.json({success : false, error }, {status : 500})
    }
}


export async function POST(req:NextRequest){
    try{
        const body = await req.json();
        const {section, text} = body;

        if(!section || !text){
            return NextResponse.json({success : false, error : "Missing Field"}, {status : 400})
        }

        const created = await Description.create({section, text})
        return NextResponse.json({success : true, data : created })
    }catch(error){
    return Response.json({success : false, error }, {status : 500})
    }
}