import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { LoginForm } from '../Register/RegisterFormComponent.types';
import { loginSchema } from '@/lib/schemas';
import { Input } from '@/components/shared/local/Input';
import { yupResolver } from "@hookform/resolvers/yup";
import {ButtonShared} from '@/components/shared/local/ButtonShared';
import { useLoginQuary } from '@/lib/api/auth/auth-quary';
import { useRouter } from 'next/navigation';

export const LoginFormComponent = () => {
    const {
      register,
      handleSubmit,
      reset,
      formState: { errors },
    } = useForm<LoginForm>({
      mode: "onBlur",
      resolver: yupResolver(loginSchema),
    });
    const router = useRouter()
    const loginMutation = useLoginQuary()

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
        <ButtonShared title='Log in' type='submit' width='full' height='40px' />
      </form>
    );
};