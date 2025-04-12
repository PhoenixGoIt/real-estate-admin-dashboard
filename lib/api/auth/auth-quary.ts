"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUserApi, LoginApi, RegisterApi, setAuthHeader } from "./auth-api";
import { LoginForm, RegisterForm, User, QueryError } from "@/lib/types/@type";
import { useUserStore } from "@/lib/store/userStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";
import { LogOut } from "lucide-react";

export const register = () => {
  const { setToken, setUser, setError, token, logout } = useUserStore();

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterForm) => RegisterApi(data),
    onSuccess: (response) => {
      setToken(response.data.jwt);
      setAuthHeader(token)
      setError(null);
      setUser(response.data.user);
    },
    onError: (error) => {
      logout()
      setError(error);
    },
  });
  return mutation;
};

export const login = () => {
  const { setUser, setToken, setError, token, logout } = useUserStore();
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginForm) => LoginApi(data),
    onSuccess: (response) => {
      setToken(response.data.jwt);
      setAuthHeader(token)
      setError(null);
      setUser(response.data.user);
    },
    onError: (error) => {
      logout()
      setError(error);
    },
  });
  return mutation;
};

export const getUser = () => {
  const {token} = useUserStore()
  const { data, error, isLoading, isSuccess, isError } = useQuery<
    User,
    QueryError
  >({
    queryKey: ["get-user"],
    queryFn: async () => {
      const response: AxiosResponse<User> = await GetUserApi();
      return response.data;
    }, 
    enabled: !!token,
    
  });

  return { data, error, isLoading, isSuccess, isError };
}

export const checkAuth = () => {
  const { isLogin, token, setUser, logout, setToken, setError } =
    useUserStore();
  const router = useRouter();
  setAuthHeader(token);
  const { data, error, isLoading, refetch, isSuccess, isError } = useQuery<
    User,
    QueryError
  >({
    queryKey: ["check-auth"],
    queryFn: async () => {
      const response: AxiosResponse<User> = await GetUserApi();
      return response.data;
    },
    enabled: !!token,
    retry: false,
  });

  useEffect(() => {
    if (!token) {
      router.push("/auth");
      return;
    }

    if (isSuccess) {
      setError(null);
      setUser(data);
      router.push("/");
    } else {
      setError(error);
      if (error?.status === 401) {
        logout();
        router.push("/auth");
      } else if (error?.code === "ERR_NETWORK") {
        logout();
        router.push("/auth");
      }
    }

    // if(isError) {
    //   setError(error)
    //   logout();
    //   router.push('/auth');
    //   console.log(`Query Error:  ${error.message}`)
    // }
  }, [
    data,
    token,
    isLogin,
    refetch,
    setUser,
    logout,
    setToken,
    router,
    isSuccess,
    isError,
    error,
  ]);

  return { data, error, isLoading, isSuccess };
};
