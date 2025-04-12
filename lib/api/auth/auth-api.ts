import {
  baseUrlConst,
  getUserConst,
  loginUserConst,
  registerUserConst,
} from "@/lib/constants/api";
import { LoginForm, RegisterForm, User } from "@/lib/types/@type";
import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = baseUrlConst;

export const setAuthHeader = (token: string | null) => {
  if (!token) {
    axios.defaults.headers.common.Authorization = null;
  } else {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  }
};

export const clearAuthHeader = () => {
  axios.defaults.headers.common.Authorization = "";
};

export async function RegisterApi(data: RegisterForm) {
  return await axios.post(registerUserConst, data);
}

export async function LoginApi(data: LoginForm) {
  return await axios.post(loginUserConst, data);
}

export async function GetUserApi(): Promise<AxiosResponse<User>> {
  return await axios.get(getUserConst);
}
