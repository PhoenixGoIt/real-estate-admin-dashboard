// components/UserProvider.tsx
"use client"
import { useGetUser } from "@/lib/api/auth/auth-quary"
import { ReactNode } from "react"

const UserProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading } = useGetUser();
  if (isLoading) return <div >Loading...</div>;

  return <>{children}</>;
}

export default UserProvider