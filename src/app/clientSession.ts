"use client"
import { useSession } from "next-auth/react"

export const clientSession =  ()=>{
    const {data: session} = useSession()

    return session?.user.id
}