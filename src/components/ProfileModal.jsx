import { authClient } from '@/lib/auth-client';
import React from 'react';

const ProfileModal =  () => {
    const handleUpdate = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const image = e.target.image.value;
        console.log({name , image})
        
        await authClient.updateUser({
            name,
            image,
        })

        document.getElementById('full_form_modal').close();
    };


    return (
        <div>
            <button 
                className="btn btn-outline border-black text-black rounded-none" 
                onClick={() => document.getElementById('full_form_modal').showModal()}
            >
                Edit Profile
            </button>

            {/* The Form now wraps the Dialog and its contents */}
            <form id="profile-form" onSubmit={handleUpdate}>
                <dialog id="full_form_modal" className="modal">
                    <div className="modal-box bg-white rounded-none border-2 border-black p-6">
                        <h3 className="font-bold text-xl text-black uppercase tracking-tighter mb-6">
                            Update Profile
                        </h3>

                        <div className="space-y-5">
                            {/* Name Input */}
                            <div className="form-control">
                                <label className="label py-0">
                                    <span className="label-text text-black font-bold">NAME</span>
                                </label>
                                <input 
                                    name="name"
                                    type="text" 
                                    placeholder="Enter name" 
                                    className="input input-bordered rounded-none border-black text-black focus:outline-none focus:ring-1 focus:ring-black" 
                                    required
                                />
                            </div>

                            {/* Photo Input */}
                            <div className="form-control">
                                <label className="label py-0">
                                    <span className="label-text text-black font-bold">PHOTO URL</span>
                                </label>
                                <input 
                                    name="image"
                                    type="url" 
                                    placeholder="https://image.link" 
                                    className="input input-bordered rounded-none border-black text-black focus:outline-none focus:ring-1 focus:ring-black" 
                                    required
                                />
                            </div>
                        </div>

                        {/* Action Buttons */}
                        <div className="modal-action flex gap-2">
                            <button 
                                type="button" 
                                className="btn btn-ghost rounded-none text-black border-none"
                                onClick={() => document.getElementById('full_form_modal').close()}
                            >
                                CANCEL
                            </button>
                            <button 
                                type="submit" 
                                className="btn bg-black text-white rounded-none px-10 border-black hover:bg-gray-900"
                            >
                                SAVE
                            </button>
                        </div>
                    </div>

                    {/* This allows clicking the background to close */}
                    <div 
                        className="modal-backdrop bg-black/20" 
                        onClick={() => document.getElementById('full_form_modal').close()}
                    />
                </dialog>
            </form>
        </div>
    );
};

export default ProfileModal;