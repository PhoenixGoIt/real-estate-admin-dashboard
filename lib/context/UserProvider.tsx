"use client";
import { useGetUser } from "@/lib/api/auth/auth-quary";
import { ReactNode, useEffect, useRef } from "react";
import { useUserStore } from "../store/userStore";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const ref = useRef()
  const {setUser, logout, setError, token} = useUserStore()
  useEffect(() => {
    useGetUser(setUser, logout, setError, token)
  }, [ref])

 return (
   <section>
    {children}
   </section>
 )
}


export default UserProvider;
