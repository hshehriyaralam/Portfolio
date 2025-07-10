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