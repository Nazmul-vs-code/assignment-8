"use client";
import React, { useState } from 'react';
import Link from 'next/link';
import { IoEyeOutline, IoEyeOffOutline } from "react-icons/io5";
import { authClient } from '@/lib/auth-client';
import { toast } from 'react-toastify';
import { FaGoogle } from 'react-icons/fa';

const RegisterForm = () => {
    const [showPassword, setShowPassword] = useState(false);

    const handleLogin = async (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const data = Object.fromEntries(formData.entries());

        const { email, password } = data;

        const { data: res, error } = await authClient.signIn.email({
            email: email, // required
            password: password, // required
            callbackURL: "/",
        });

        console.log({ res, error }, " response from the server ");

        if (error) {
            toast("Unexpected error occured with : " + error.message)
        }

    };

    return (
        <div className='border-2 border-yellow-500 w-9/12 mx-auto p-6 my-20'>
            <form onSubmit={handleLogin} className="w-full max-w-xs mx-auto">
                <fieldset className="fieldset bg-base-200 border-base-300 rounded-box border p-4">
                    <legend className="fieldset-legend font-bold">Register Account</legend>

                    {/* Email */}
                    <label className="label">Email Address</label>
                    <input
                        type="email"
                        className="input w-full bg-base-100"
                        placeholder="email@example.com"
                        name="email"
                        required
                    />

                    {/* Password with Toggle */}
                    <label className="label">Password</label>
                    <div className="relative w-full">
                        <input
                            type={showPassword ? "text" : "password"}
                            className="input w-full bg-base-100 pr-10"
                            placeholder="••••••••"
                            name="password"
                            required
                        />
                        <button
                            type="button" // This prevents the button from submitting the form
                            onClick={() => setShowPassword(!showPassword)}
                            className="absolute inset-y-0 right-3 flex items-center text-gray-500 hover:text-gray-700"
                        >
                            {showPassword ? (
                                <IoEyeOffOutline className="text-xl" />
                            ) : (
                                <IoEyeOutline className="text-xl" />
                            )}
                        </button>
                    </div>

                    {/* Create Account Button (Submit) */}
                    <button type="submit" className="btn btn-neutral mt-6 w-full">
                        Create Account
                    </button>

                    <div className="">

                    <button className='w-full btn text-green-500 btn-outline'><FaGoogle /> Login with Google </button>
                    </div>
                    <p className="text-xs text-center mt-4 text-gray-500">
                        Click here to <Link href="/register" className="link link-primary">Register</Link>
                    </p>
                </fieldset>
            </form>
        </div>
    );
};

export default RegisterForm;