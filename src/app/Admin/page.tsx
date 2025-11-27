'use client'
import UpdateProject from "./UpdateProject";
import { useRouter } from "next/navigation";
import {useEffect } from "react";

export default function Admin(){
   const router = useRouter();
     useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/authStatus',{
        credentials: 'include' 
      })
        if (res.status === 200) {

        } else {
          router.push('/Login')
        }
      } catch (error) {
        console.log("errro",error)
        router.push('/Login')
      }
    }

    checkAuth()
  }, [router])
  return(
    <div>
    <UpdateProject />
    </div>
  )
}

