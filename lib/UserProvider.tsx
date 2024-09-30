// components/UserProvider.tsx
"use client"
import { useGetUser } from "@/lib/api/auth/auth-quary"
import { ReactNode } from "react"
import { useUserStore } from "./store/userStore";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const {  isLoading, error } = useGetUser();
  if (isLoading) return <div >Loading...</div>;
  if (error) return <div>Error: {error.message}</div>;

  return <>{children}</>;
}

export default UserProvider