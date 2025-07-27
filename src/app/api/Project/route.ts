
import { NextResponse, NextRequest } from "next/server";
import { Project } from "../../lib/Models/Project";
import { connectDB } from "../../lib/dbConnect";


export async function GET(){
    try{
        await connectDB()
        const allInputs = await Project.find()
        return NextResponse.json({success : true, data :allInputs})   
    }catch(error){
        return Response.json({success : false, error }, {status : 500})
    }
}



export async function POST(req:NextRequest){
    try{
        const body = await req.json()
        const {title,description,githubLink,LiveDemo,readmeLink, bgImage} = body;

        if(!title || !description || !githubLink || !LiveDemo || !readmeLink  || typeof bgImage !== 'string' || bgImage.trim() === ''){
            return NextResponse.json({success : false, error : "Missing Field"}, {status : 400})
        }

        const created = await Project.create({title,description,githubLink,LiveDemo,readmeLink,bgImage})
        return NextResponse.json({success : true, data : created })

    }catch(error){
        return Response.json({success : false, error }, {status : 500})
    }
}