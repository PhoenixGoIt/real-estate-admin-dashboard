"use client"
import { useMutation, useQuery } from "@tanstack/react-query"
import { GetUserApi, LoginApi, RegisterApi, setAuthHeader } from "./auth-api"
import { LoginForm, RegisterForm, AuthResponse, User } from "@/lib/@type"
import { useUserStore } from "@/lib/store/userStore";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { AxiosResponse } from "axios";



export const useRegister = () => {
    const { setToken, setUser, token } = useUserStore();
    const router = useRouter();
    const mutation = useMutation({
        mutationKey: ['register'],
        mutationFn: (data: RegisterForm) => RegisterApi(data),
    onSuccess: (response) => {
        console.log('Registration successful');
        setToken(response.data.jwt)
        if (token) {
            setAuthHeader(token);
        }
        setUser(response.data.user)
        
      },
      onError: (error) => {
        console.error('Registration failed:', error);
      },
  }
  )
  return mutation
}
export const useLogin = () => {
    const { setToken, setUser, token } = useUserStore();

    const mutation = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: LoginForm) => LoginApi(data),

    onSuccess: (response) => {
        console.log('Registration successful');
        setToken(response.data.jwt)
        if (token) {
            setAuthHeader(token);
        }
        setUser(response.data.user)
    },

    onError: (error) => {
      console.error('Registration failed:', error);
    },

    })
return mutation
}

export const useGetUser = () => {
  const { isLogin, token, setUser } = useUserStore();
  const router = useRouter();

  const { data, error, isLoading, refetch } = useQuery<User, Error>({
    queryKey: ['user'],
    queryFn: async () => {
      const response: AxiosResponse<User> = await GetUserApi();
      return response.data;
    },
    enabled: false,
  });

  useEffect(() => {
    if (isLogin && token) {
      setAuthHeader(token);
      refetch();
    } else if (isLogin === false) {
      router.push('/auth');
    }
  }, [isLogin, token, refetch, router]);

  useEffect(() => {
    if (data) {
      console.log(data)
      setUser(data);
    }
  }, [data, setUser]);

  return { error, isLoading };
};

export const useLogout = () => {
  const { logout } = useUserStore();
  const handleLogout = () => {
    setAuthHeader('')
    logout();
    console.log("Successful logout");
  };
  return handleLogout;
};