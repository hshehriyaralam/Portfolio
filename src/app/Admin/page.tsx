'use client'
import UpdateDescription from "./UpdateDescription";
import UpdateProject from "./UpdateProject";
import { useRouter } from "next/navigation";
import Cookies from 'js-cookie'
import { useState, useEffect } from "react";




export default function Admin(){
   const router = useRouter();
   const [loading, setLoading] = useState(false)
     useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch('/api/authStatus')
        if (res.status === 200) {
          setLoading(false)
        } else {
          router.push('/Login')
        }
      } catch (error) {
        router.push('/Login')
      }
    }

    checkAuth()
  }, [router])
  return(
    <div>
    <UpdateDescription />
    <UpdateProject />
    </div>
  )
}

