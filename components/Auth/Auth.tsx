"use client";
import { useState } from "react";
import { useUserStore } from "@/lib/store/userStore";
import Image from "next/image";
import { RegisterFormComponent } from "./Register/RegisterFormComponent";
import { LoginFormComponent } from "./Login/LoginFormComponent";
import { renderErrorMessage } from "@/lib/utils/renderErrorMessage";

const Auth = () => {
  const { setError } = useUserStore();
  const [isSignUp, setIsSignUp] = useState(false);
  const { error } = useUserStore();

  const pageChanger = () => {
    setIsSignUp(!isSignUp);
    setError(null);
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
