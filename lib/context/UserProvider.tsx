// /components/UserProvider.tsx
"use client";
import { ReactNode, useEffect, useState } from "react";
import { useCheckAuthQuery } from "../api/auth/auth-quary";
import { useRouter } from "next/navigation";
import { useUserStore } from "../store/userStore";
import { Loading, Timeout } from "@/components/shared";

const UserProvider = ({ children }: { children: ReactNode }) => {
  const { isLoading, error, isSuccess } = useCheckAuthQuery();
  const [status, setStatus] = useState<"unknowError" | "error" | "success" | "loading" | "initial">("initial");
  const { token, isLogin } = useUserStore();
  const router = useRouter();

  useEffect(() => {
    console.log("Состояние:", { isLoading, error, isSuccess, token, isLogin, status });

    if (isLoading) {
      setStatus("loading");
      return;
    }

    if (error?.status === 401 || error?.status === 403) {
      setStatus("error");
      router.push("/auth");
      return;
    }

    if (error?.message === "Network Error") {
      setStatus("unknowError");
      return;
    }

    if (!token || !isLogin) {
      setStatus("error");
      router.push("/auth");
      return;
    }

    if (isSuccess) {
      setStatus("success");
      router.push("/");
      return;
    }
  }, [isLoading, error, isSuccess, token, isLogin, router]);

  if (status === "loading") {
    console.log("Рендеринг: Loading");
    return <Loading />;
  }

  if (status === "unknowError") {
    console.log("Рендеринг: Timeout");
    return <Timeout />;
  }

  // Рендерим children для всех остальных состояний
  console.log("Рендеринг: Children", { status });
  return <>{children}</>;
};

export default UserProvider;