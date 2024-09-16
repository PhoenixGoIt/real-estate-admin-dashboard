import { useMutation, useQuery } from "@tanstack/react-query"
import { GetUserApi, LoginApi, RegisterApi, setAuthHeader } from "./auth-api"
import { LoginForm, RegisterForm } from "@/lib/@type"
import { useUserStore } from "@/lib/store/userStore";



export const useRegister = () => {
    const { setToken, login, token } = useUserStore();

    const mutation = useMutation({
        mutationKey: ['register'],
        mutationFn: (data: RegisterForm) => RegisterApi(data),
    onSuccess: (response) => {
        console.log('Registration successful');
        setToken(response.data.jwt)
        if (token) {
            setAuthHeader(token);
        }
        login(response.data.user)
      },
      onError: (error) => {
        console.error('Registration failed:', error);
      },
  }
  )
  return mutation
}
export const useLogin = () => {
    const { setToken, login, token } = useUserStore();

    const mutation = useMutation({
        mutationKey: ['login'],
        mutationFn: (data: LoginForm) => LoginApi(data),

    onSuccess: (response) => {
        console.log('Registration successful');
        setToken(response.data.jwt)
        if (token) {
            setAuthHeader(token);
        }
        login(response.data.user)
    },

    onError: (error) => {
      console.error('Registration failed:', error);
    },

    })
return mutation
}

export const useGetUser = () => {
    const { data, isSuccess, error } = useQuery({
      queryKey: ['getUser'],
      queryFn: GetUserApi,
    });
    return { data, isSuccess, error };
  };
  