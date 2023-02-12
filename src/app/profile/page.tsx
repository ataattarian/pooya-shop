'use client'
import useToken from "@/lib/hooks/useToken"
import { useEffect } from "react"
import { profile } from '@/lib/services/auth'
import Link from "next/link"

export default function UserProfile() {
    const { token, setToken } = useToken()

    useEffect(() => {
        profile(token.access).then(data => console.log(data))
    }, [])

    return (
        <div className="text-center my-32">
            <h1 className="text-4xl text-center font-bold mb-8">خوش آمدید</h1>
            <Link href={'/'}>
                خرید
            </Link>
        </div>
    )
}