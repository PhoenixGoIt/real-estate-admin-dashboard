import { UseFormRegisterReturn } from "react-hook-form";

export interface InputProps {
  title: string;
  width?: string;
  type?: string;
  id?: string;
  required?: boolean;
  value?: string;
  register?: UseFormRegisterReturn;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}