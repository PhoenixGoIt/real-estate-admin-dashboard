"use client";
import { useMutation, useQuery } from "@tanstack/react-query";
import { GetUserApi, LoginApi, RegisterApi, setAuthHeader } from "./auth-api";
import { LoginForm, RegisterForm, User, QueryError } from "@/lib/types/@type";
import { useUserStore } from "@/lib/store/userStore";
import { AxiosResponse } from "axios";

export const useRegisterQuary = () => {
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

export const useLoginQuary = () => {
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

export const useGetUserQuary = () => {
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

export const useCheckAuthQuary = () => {
  const { token } = useUserStore();
  setAuthHeader(token);
  const { data, error, isLoading, isSuccess, isError } = useQuery<
    User,
    QueryError
  >({
    queryKey: ["check-auth"],
    queryFn: async () => {
      const response: AxiosResponse<User> = await GetUserApi();
      return response.data;
    },
    enabled: !!token,
    retryDelay: 1000,
    retry: 2,
  });

  return { data, error, isLoading, isSuccess, isError };
};
