"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUserApi, LoginApi, RegisterApi, setAuthHeader } from "./auth-api";
import { LoginForm, RegisterForm, User, QueryError } from "@/lib/types/@type";
import { useUserStore } from "@/lib/store/userStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";
import { LogOut } from "lucide-react";

export const useRegister = () => {
  const { setToken, setUser, setError, token } = useUserStore();

  const mutation = useMutation({
    mutationKey: ["register"],
    mutationFn: (data: RegisterForm) => RegisterApi(data),
    onSuccess: (response) => {
      setToken(response.data.jwt);
      setError(null);
      setUser(response.data.user);
    },
    onError: (error) => {
      setError(error);
    },
  });
  return mutation;
};

export const useLogin = () => {
  const { setUser, setToken, setError, token } = useUserStore();
  const mutation = useMutation({
    mutationKey: ["login"],
    mutationFn: (data: LoginForm) => LoginApi(data),
    onSuccess: (response) => {
      setToken(response.data.jwt);
      setError(null);
      setUser(response.data.user);
    },
    onError: (error) => {
      setError(error);
    },
  });
  return mutation;
};

export const useGetUser = (setUser: (data: User) => void, logout: () => void, setError: (error: null | QueryError) => void, token: string | null) => {
  if (!token) {
    console.log("No token")
    logout()
    return
  }
  setAuthHeader(token)
  console.log("Auth Header Set")
  const { data, error, isLoading, isSuccess, isError } = useQuery<
    User,
    QueryError
  >({
    queryKey: ["user"],
    queryFn: async () => {
      const response: AxiosResponse<User> = await GetUserApi();
      return response.data;
    }, 
    enabled: !!token,
    
  });

  if (isSuccess) {
    setUser(data);
    setError(null);
  }

  return { data, error, isLoading, isSuccess };
};
