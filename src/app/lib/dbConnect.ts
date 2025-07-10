import mongoose from "mongoose";

export async function connectDB(){
    let isConnected = false
     if (isConnected) {
    console.log("✅ DB is already connected.");
    return;
  }

  const MONGODB_URL = process.env.MONGODB_URL
  if(!MONGODB_URL){
    throw new Error("❌ MONGODB_URL is not defined in .env.local")
  }
    try{
        let connected = await mongoose.connect(MONGODB_URL)
        if(connected.connection.readyState == 1) isConnected = true 
    }catch(error){
        console.log("DB Connected Error", error)
    }
}

