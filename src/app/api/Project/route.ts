
import { NextResponse, NextRequest } from "next/server";
import { Project } from "../../lib/Models/Project";
import { connectDB } from "../../lib/dbConnect";


export async function GET(req: NextRequest){
    try{
        await connectDB()
        const allInputs = await Project.find()
        return NextResponse.json({success : true, data :allInputs})

  
        
    }catch(error){
        return Response.json({success : false, error }, {status : 500})
    }
}