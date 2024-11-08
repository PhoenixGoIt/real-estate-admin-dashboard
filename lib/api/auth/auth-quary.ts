"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUserApi, LoginApi, RegisterApi, setAuthHeader } from "./auth-api";
import { LoginForm, RegisterForm, User, QueryError } from "@/lib/@type";
import { useUserStore } from "@/lib/store/userStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";

export const useRegister = () => {
  const { setToken, setUser, setError, token } = useUserStore();

  const mutation = useMutation({
    mutationKey: ['register'],
    mutationFn: (data: RegisterForm) => RegisterApi(data),
    onSuccess: (response) => {
      console.log('Registration successful');
      setToken(response.data.jwt);
      setAuthHeader(token)
      setError(null)
      setUser(response.data.user);
    },
    onError: (error) => {
      setError(error)
      console.error('Registration failed:', error);
    },
  });
  return mutation;
};

export const useLogin = () => {
  const { setUser, setToken, setError, token } = useUserStore();
  const mutation = useMutation({
    mutationKey: ['login'],
    mutationFn: (data: LoginForm) => LoginApi(data),
    onSuccess: (response) => {
      console.log('Login successful');
      setToken(response.data.jwt);
      setAuthHeader(token)
      setError(null)
      setUser(response.data.user);
    },
    onError: (error) => {
      setError(error)
      console.error('Login failed:', error);
    },
  });
  return mutation;
};

export const useGetUser = () => {
  const { isLogin, token, setUser, logout, setToken, setError } = useUserStore();
  const router = useRouter();
  setAuthHeader(token)
  const {data, error, isLoading, refetch, isSuccess, isError } = useQuery<User, QueryError>({
    queryKey: ['user'],
    queryFn: async () => {
      const response: AxiosResponse<User> = await GetUserApi();
      console.log('useGetUser successful');
      return response.data;
    },
    enabled: true, // Запрос включен до вызова refetch
    retry: false,
  });

  useEffect(() => {
    
    if (!token) {
      console.log("no token")
      router.push('/auth');
      return;
    }

    if(isSuccess) {
      console.log("isSuccess")
      setError(null)
      setUser(data);
      console.log("Success setUser")
    } else {
      setError(error)
      if (error?.status === 401) {
        logout();  
        router.push('/auth');
      }
    }

    // if(isError) {
    //   setError(error)
    //   logout();
    //   router.push('/auth');
    //   console.log(`Query Error:  ${error.message}`)
    // }

    
  }, [data, token, isLogin, refetch, setUser, logout, setToken, router,isSuccess,isError]);

  return { error, isLoading };
};