'use client'
import useToken from "@/lib/hooks/useToken"
import { useEffect } from "react"
import { profile } from '@/lib/services/auth'

export default function UserProfile() {
    const { token , setToken } = useToken()

    useEffect(() => {
        profile(token.access).then(data => console.log(data))
    },[])

    return (
        <div>
            this is my user profile page
        </div>
    )
}