import { NextRequest } from "next/server";
import cloudinary from "../../lib/cloudinary";

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "20mb",
    },
  },
};

export async function POST(req: NextRequest) {
  const body = await req.json();    
  const { file } = body;

  if (!file) {
    return new Response(JSON.stringify({ error: "No file provided" }), {
      status: 400,
    });
  }

  try {
    const uploadResponse = await cloudinary.uploader.upload(file, {
      folder: "portfolio_projects",
      use_filename: true,
      unique_filename: true,
    });

    return new Response(JSON.stringify({ url: uploadResponse.secure_url }), {
      status: 200,
    });
  } catch (error) {
    return new Response(JSON.stringify({ error: error }), {
      status: 500,
    });
  }
}
