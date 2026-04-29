"use client";

import React from 'react';
import { showToast } from '@/importantFunctions/toast';

const ContactBtn = ({ animalName }) => {

    const handleConfirm = (e) => {
        // We prevent default so the form doesn't reload the page
        // but the 'dialog' method will still close the modal
        showToast(`Thank you!  ${animalName} owner will contact you soon.`, "success");
    };

    return (
        <>
            {/* Trigger Button */}
            <button
                className="btn btn-lg bg-black text-white hover:bg-gray-800 px-10 rounded-2xl w-full"
                onClick={() => document.getElementById('contact_modal').showModal()}
            >
                Contact Seller
            </button>

            {/* Modal */}
            <dialog id="contact_modal" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box p-0 overflow-hidden border border-base-300">

                    <div className="p-6 bg-orange-50 border-b border-orange-100">
                        <h3 className="font-black text-2xl text-gray-800">Inquiry for {animalName}</h3>
                        <p className="text-sm text-gray-500">Fill in your details to notify the seller.</p>
                    </div>

                    <div className="p-6">
                        <fieldset className="fieldset bg-base-100 rounded-box border-none p-0">

                            {/* Buyer Name */}
                            <label className="fieldset-label font-bold text-gray-700">Full Name</label>
                            <input type="text" className="input w-full bg-base-200 border-none focus:ring-2 focus:ring-orange-400" placeholder="e.g. Rahim Uddin" required />

                            {/* Phone Number */}
                            <label className="fieldset-label font-bold text-gray-700 mt-3">Phone Number</label>
                            <input type="tel" className="input w-full bg-base-200 border-none focus:ring-2 focus:ring-orange-400" placeholder="017XXXXXXXX" required />

                            {/* Note / Message */}
                            <label className="fieldset-label font-bold text-gray-700 mt-3">Additional Note</label>
                            <textarea className="textarea h-24 bg-base-200 border-none focus:ring-2 focus:ring-orange-400 w-full" placeholder="When can I visit? Is the price negotiable?"></textarea>

                            <div className="modal-action mt-6">
                                <form method="dialog" className="flex gap-2 w-full">
                                    {/* Close button */}
                                    <button className="btn flex-1 btn-ghost">Cancel</button>

                                    {/* Submit button */}
                                    <button
                                        onClick={handleConfirm}
                                        className="btn flex-1 bg-orange-600 text-white hover:bg-orange-700 border-none shadow-lg shadow-orange-200"
                                    >
                                        Send Inquiry
                                    </button>
                                </form>
                            </div>
                        </fieldset>
                    </div>
                </div>

                {/* Backdrop to close by clicking outside */}
                <form method="dialog" className="modal-backdrop bg-black/40 backdrop-blur-sm">
                    <button>close</button>
                </form>
            </dialog>
        </>
    );
};

export default ContactBtn;