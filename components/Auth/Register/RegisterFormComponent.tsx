import React from 'react'
import { SubmitHandler, useForm } from 'react-hook-form';
import { RegisterForm } from '../Login/LoginFormComponent.types';
import { registerSchema } from '@/lib/schemas';
import { yupResolver } from "@hookform/resolvers/yup";
import { useRegisterQuery } from '@/lib/api/auth/auth-quary';
import { ButtonShared, Input } from '@/components/shared';


export const RegisterFormComponent = () => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm<RegisterForm>({
      resolver: yupResolver(registerSchema),
    });

    const {mutate, isError, isPaused, isPending, isSuccess} = useRegisterQuery()

    const onSubmit: SubmitHandler<RegisterForm> = (data) => {
      mutate(data);
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
        <ButtonShared isPending={isPending} title='Register' type='submit' width='full' height='40px' />
      </form>
    );
};

