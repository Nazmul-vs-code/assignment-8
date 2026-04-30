'use client'
import ProfileModal from '@/components/ProfileModal';
import { useSession } from '@/lib/auth-client';
import Image from 'next/image';
import React from 'react';

const MyProfilePage = () => {
    const { data: session, isPending } = useSession();
    const user = session?.user;

    // 1. Handle Loading State
    if (isPending) {
        return (
            <div className="min-h-[70vh] flex justify-center items-center">
                <span className="loading loading-ring loading-lg text-primary"></span>
            </div>
        );
    }

    // 2. Handle Unauthenticated State
    if (!user) {
        return (
            <div className="min-h-[70vh] flex justify-center items-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold">Please log in to view your profile.</h2>
                </div>
            </div>
        );
    }

    return (
        <div className="max-w-4xl mx-auto py-10 px-4">
            <div className="card bg-base-100 shadow-xl border border-slate-100">
                <div className="card-body items-center text-center">
                    {/* User Image */}
                    <div className="avatar mb-4">
                        <div className="w-32 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2 relative">
                            <Image 
                                src={user?.image || "https://i.ibb.co.com/4P68Xm8/user.png"} 
                                alt={user?.name}
                                fill
                                className="object-cover"
                            />
                        </div>
                    </div>

                    {/* User Info */}
                    <h2 className="card-title text-3xl font-black tracking-tight">
                        {user.name}
                    </h2>
                    <p className="text-slate-500 font-medium">{user.email}</p>
                    
                    <div className="badge badge-primary badge-outline mt-2">Active Member</div>

                    <div className="divider">Profile Details</div>

                    {/* Additional Details Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full">
                        <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-100">
                            <span className="text-xs font-bold uppercase text-slate-400">User ID</span>
                            <p className="font-mono text-sm truncate">{user.id}</p>
                        </div>
                        <div className="bg-slate-50 p-4 rounded-xl text-left border border-slate-100">
                            <span className="text-xs font-bold uppercase text-slate-400">Account Status</span>
                            <p className="text-green-600 font-bold">Verified</p>
                        </div>
                    </div>

                    <div className="card-actions mt-8">
                        <button
                        className="px-8"><ProfileModal /></button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyProfilePage;