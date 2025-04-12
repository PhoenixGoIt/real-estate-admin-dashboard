"use client";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { Input } from "@/components/shered/local/Input";
import { login, register } from "@/lib/api/auth/auth-quary";
import { withGuest } from "@/lib/context/withGuest";
import { useUserStore } from "@/lib/store/userStore";
import Image from "next/image";
import Button from "@/components/shered/local/Button2";
import * as yup from "yup";

export const registerSchema = yup
  .object({
    name: yup.string().min(2).max(30).required("Name is required"),
    username: yup.string().min(2).max(30).required("Username is required"),
    email: yup
      .string()
      .email("Invalid email format")
      .required("Email is required"),
    password: yup.string().min(6).required("Password is required"),
  })
  .required();

export type RegisterForm = yup.InferType<typeof registerSchema>;

const loginSchema = yup
  .object({
    identifier: yup.string().required("Email/Username is required"),
    password: yup.string().min(6).required("Password is required"),
  })
  .required();

export type LoginForm = yup.InferType<typeof loginSchema>;

const Auth = () => {
  const { setError } = useUserStore();
  const [isSignUp, setIsSignUp] = useState(false);
  const registerMutation = register();
  const loginMutation = login();
  const { error } = useUserStore();
  const renderErrorMessage = (error: any) => {
    switch (error?.response?.data?.error?.message) {
      case "Email or Username are already taken":
        return "Email or Username are already taken*";
      case "Invalid identifier or password":
        return "Incorrect username or password*";
      default:
        return "An error occurred. Please try again*";
    }
  };

  const pageChanger = () => {
    setIsSignUp(!isSignUp);
    setError(null);
  };

  const RegisterFormComponent = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterForm>({
      resolver: yupResolver(registerSchema),
    });

    const onSubmit: SubmitHandler<RegisterForm> = (data) => {
      registerMutation.mutate(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label
            htmlFor='name'
            className='block text-md font-medium text-gray-700 mb-3'
          >
            Name
          </label>
          <Input
            title='Enter your name'
            id='name'
            type='text'
            register={register("name")}
          />
          {errors.name && (
            <p className='text-red-600 text-sm'>{errors.name.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='username'
            className='block text-md font-medium text-gray-700 mb-3'
          >
            Username
          </label>
          <Input
            title='Enter your username'
            id='username'
            type='text'
            register={register("username")}
          />
          {errors.username && (
            <p className='text-red-600 text-sm'>{errors.username.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='email'
            className='block text-md font-medium text-gray-700 mb-3'
          >
            Email
          </label>
          <Input
            title='Enter your email'
            id='email'
            type='email'
            register={register("email")}
          />
          {errors.email && (
            <p className='text-red-600 text-sm'>{errors.email.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='password'
            className='block text-md font-medium text-gray-700 mb-3'
          >
            Password
          </label>
          <Input
            title='Enter your password'
            id='password'
            type='password'
            register={register("password")}
          />
          {errors.password && (
            <p className='text-red-600 text-sm'>{errors.password.message}</p>
          )}
        </div>
        <Button title='Sign up' type='submit' width='full' height='40px' />
      </form>
    );
  };

  const LoginFormComponent = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<LoginForm>({
      resolver: yupResolver(loginSchema),
    });

    const onSubmit: SubmitHandler<LoginForm> = (data) => {
      loginMutation.mutate(data);
    };

    return (
      <form onSubmit={handleSubmit(onSubmit)} className='space-y-4'>
        <div>
          <label
            htmlFor='identifier'
            className='block text-md font-medium text-gray-700 mb-3'
          >
            Email/Username
          </label>
          <Input
            title='Enter your email'
            id='identifier'
            type='text'
            register={register("identifier")}
          />
          {errors.identifier && (
            <p className='text-red-600 text-sm'>{errors.identifier.message}</p>
          )}
        </div>
        <div>
          <label
            htmlFor='password'
            className='block text-md font-medium text-gray-700 mb-3'
          >
            Password
          </label>
          <Input
            title='Enter your password'
            id='password'
            type='password'
            register={register("password")}
          />
          {errors.password && (
            <p className='text-red-600 text-sm'>{errors.password.message}</p>
          )}
        </div>
        <Button title='Log in' type='submit' width='full' height='40px' />
      </form>
    );
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-gray-100'>
      <div className='bg-white pl-8 pr-8 pb-8 pt-6 rounded-lg shadow-lg w-full max-w-md'>
        <div className='flex justify-center mb-3'>
          <Image src={"/logo.svg"} alt='logo' width={29} height={32} />
          <h2 className='text-xl ml-2 font-bold'>Yagira Admin Dashboard</h2>
        </div>
        <div className='flex items-center mb-4'>
          <span className='border-t border-gray-300 w-full'></span>
          <h2 className='text-2xl font-bold m-3 text-center'>
            {isSignUp ? "Register" : "Login"}
          </h2>
          <span className='border-t border-gray-300 w-full'></span>
        </div>
        {isSignUp ? <RegisterFormComponent /> : <LoginFormComponent />}
        {error && (
          <p className='text-red-500 font-medium mt-4'>
            {renderErrorMessage(error)}
          </p>
        )}
        <div className='flex justify-center mt-6'>
          <p className='text-center text-sm text-gray-600'>
            {isSignUp ? "Already have an account?" : "Don't have an account?"}{" "}
            <span
              className='ml-1 font-medium text-indigo-600 hover:text-indigo-500 cursor-pointer'
              onClick={() => pageChanger()}
            >
              {isSignUp ? "Sign in" : "Sign up"}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Auth;
