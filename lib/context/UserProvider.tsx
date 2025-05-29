"use client";
import { ReactNode, useEffect, useState } from "react";
import { useCheckAuthQuary } from "../api/auth/auth-quary";
import { Timeout } from "@/components/shared/local/Timeout";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/userStore";
import { Loading } from "@/components/shared/local/Loading";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading, error, isSuccess } = useCheckAuthQuary();
  const [status, setStatus] = useState<'unknowError' | 'error' | 'success' | 'loading' | ''>('')
  const { token } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    if(isLoading) {
      setStatus("loading")
    }
  })

  useEffect(()=> {
    setStatus('')
    if(!token) {
      setStatus('error')
      router.push('/auth')
    }
    if(error?.status === 401 || 403 ) {
      setStatus('error')
      router.push('/auth')
    }
     if(error?.message === 'Network Error'){
      setStatus('unknowError')
    }
    if(isSuccess) {
      setStatus('success')
      router.push('/')
    }
  },[token, error, isSuccess])

  if (status === 'loading') {
    console.log("load")
    return (
      <>
        <Loading />
      </>
    );
  }

  if(status === 'unknowError') {
    return <><Timeout/></>
  }

  if(status === 'error' || 'success') {
    return <>{children}</>;
  } 
};

export default UserProvider;