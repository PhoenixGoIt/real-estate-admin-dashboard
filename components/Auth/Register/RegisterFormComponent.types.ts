import { loginSchema } from "@/lib/schemas";
import * as yup from "yup";

export type LoginForm = yup.InferType<typeof loginSchema>;