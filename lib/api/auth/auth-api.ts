import { LoginForm, RegisterForm, User } from "@/lib/@type";
import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.NEXT_PUBLIC_HOST_API;


export const setAuthHeader = (token: string | null) => {
  if (!token) {
    axios.defaults.headers.common.Authorization = null;
  } else {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
  
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = '';
};

export async function RegisterApi(data: RegisterForm) {
  return await axios.post(`${process.env.NEXT_PUBLIC_REGISTER_API}`, data);
}

export async function LoginApi(data: LoginForm) {
  return await axios.post(`${process.env.NEXT_PUBLIC_LOGIN_API}`, data);
}

export async function GetUserApi(): Promise<AxiosResponse<User>> {
  return await axios.get(`${process.env.NEXT_PUBLIC_GETUSER_API}`);
}
