'use client'
import { useForm } from "react-hook-form";
import { useRegisterUserMutation } from "@/app/features/api";
import { signIn } from "next-auth/react";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { useSession } from "next-auth/react";
import React from 'react';

interface FormData {
  name: string;
  email: string;
  password: string;
  confirmPassword: string;
  role:'user';
}

const RegisterForm = () => {
  const form = useForm<FormData>();
  const { register, handleSubmit, watch, formState: { errors } } = form;
  const [registerUser, { isLoading, isError, isSuccess }] = useRegisterUserMutation();
  const [isSucces, setIsSucces] = useState(false);
  const router = useRouter()
  const {data:session} = useSession()
  if (session) {
    router.push("/api/auth/components/Landingpage"); // Adjust the path as necessary
    return null; // Return null to avoid rendering the button
  }
  const onSubmit = async (data: FormData) => {
    try {
      const response = await registerUser(data).unwrap();
  
      if (response.error) {
        console.error('Error:', response.error);
      } else {
        console.log('Success:', response);
        setIsSucces(true);
        router.push(`/api/auth/verify-email?email=${encodeURIComponent(data.email)}`);
      }
    } catch (error) {
      console.error('Failed to register user:', error);
    }
  };
  

  

  return (
    <div className="w-[50%] mx-auto mt-[2%] border">
      <div className="text-center">
        <h1 className="text-3xl text-[#25324B] font-extrabold m-2 mb-5">Sign up today!</h1>
        <button className=" flex gap-1 items-center mx-auto  pl-11 text-lg text-center border w-[300px] py-1 text-[#4640DE]" onClick={() => signIn('google')}> <img src="/images/Icongoogleicon.svg" alt="" /> Sign in with Google</button>
        <p className="font-light mt-2"> or sign up with with email</p>
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
          <div className="forms mt-5 text-start ml-[26%]">
            <label htmlFor="fullName">Full Name </label>
            <input className="border block p-1 rounded-lg mt-[5px]" placeholder="Enter your full name" type="text" id="fullName" {...register("name", { required: "* Full name is required" })} />
            <p>{errors.name?.message}</p>
          </div>

          <div className="forms mt-5 text-start ml-[26%]">
            <label htmlFor="email">Your E-mail </label>
            <input className="border block p-1 rounded-lg mt-[5px]" placeholder="Enter Email address" type="email" id="email" {...register("email", {
              required: "* Email is required",
              pattern: {
                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                message: "* Enter a valid email address"
              }
            })} />
            <p>{errors.email?.message}</p>
          </div>

          <div className="forms mt-5 text-start ml-[26%]">
            <label htmlFor="password">Password</label>
            <input className="border block p-1 rounded-lg mt-[5px]" placeholder="Enter password" type="password" id="password" {...register("password", { required: "* Password is required" })} />
            <p>{errors.password?.message}</p>
          </div>

          <div className="forms mt-5 text-start ml-[26%]">
            <label htmlFor="confirmPassword">Confirm Password</label>
            <input className="border block p-1 rounded-lg mt-[5px]" placeholder="Enter password" type="password" id="confirmPassword" {...register("confirmPassword", {
              required: "* Confirm password is required",
              validate: value => value === watch("password") || "* Passwords do not match"
            })} />
            <p>{errors.confirmPassword?.message}</p>
          </div>

          <button className="text-white bg-[#4640DE] w-[290px] h-9 mt-5 text-center rounded-2xl" type="submit" disabled={isLoading}>Continue</button>
          <p className=" mt-1">Already have an account ? <Link className="text-[#4640DE]" href="/api/auth/signin">Login</Link></p>
          <p className="ml-[26%] mt-2 w-[300px] text-center">By clicking 'Continue', you acknowledge that you have read and accept the Terms of Service and Privacy Policy.</p>
          {isError && <p>Error submitting the form</p>}
          {isSuccess && <p>Registration successful!</p>}
        </form>
      </div>
    </div>
  );
};

export default RegisterForm;
