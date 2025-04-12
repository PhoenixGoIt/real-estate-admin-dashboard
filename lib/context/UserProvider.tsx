"use client";
import { ReactNode, useEffect, useRef } from "react";
import { useUserStore } from "../store/userStore";
import { useRouter } from "next/navigation";
import { checkAuth } from "../api/auth/auth-quary";

const UserProvider = ({ children }: { children: ReactNode }) => {
  checkAuth()
 return (
   <section>
    {children}
   </section>
 )
}


export default UserProvider;
