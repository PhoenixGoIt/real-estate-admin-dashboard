import { registerSchema } from "@/lib/schemas";
import * as yup from "yup";

export type RegisterForm = yup.InferType<typeof registerSchema>;