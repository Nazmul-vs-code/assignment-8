import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { IoLocationOutline, IoArrowBack } from "react-icons/io5";
import { GiWeight } from "react-icons/gi";
import { toast } from 'react-toastify';
import { showToast } from '@/importantFunctions/toast';
import ContactBtn from '@/components/ContactBtn';

const AnimalDetailPage = async ({ params }) => {
    const { id } = await params;

    const res = await fetch(`https://assignment-8-lime.vercel.app/data.json`);
    const animals = await res.json();

    
    const animal = animals.find(a => a.id == id);

    if (!animal) {
        return <div className="text-center my-20 text-2xl font-bold">Animal Not Found!</div>;
    }

    const { name, image, breed, type, price, weight, location, description, category, age } = animal;

    return (
        <div className='max-w-6xl mx-auto my-10 px-4'>
            {/* Back Button */}
            <Link href="/all-animals" className="flex items-center gap-2 text-gray-500 hover:text-black mb-6 transition-all">
                <IoArrowBack /> Back to All Animals
            </Link>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">

                {/* Left: Image Section */}
                <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl border border-gray-100">
                    <Image
                        src={image}
                        alt={name}
                        fill
                        className="object-cover"
                        priority
                    />
                    <div className="absolute top-4 left-4">
                        <span className="badge badge-primary p-4 font-bold uppercase">{category}</span>
                    </div>
                </div>

                {/* Right: Info Section */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-4xl font-black text-gray-800 mb-2">{name}</h1>
                        <p className="text-lg text-orange-600 font-semibold">{breed} • {type}</p>
                    </div>

                    <div className="divider"></div>


                    <div className="grid grid-cols-2 gap-6">
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <GiWeight className="text-3xl text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold">Weight</p>
                                <p className="text-lg font-bold text-gray-700">{weight} kg</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-3 p-4 bg-slate-50 rounded-2xl border border-slate-100">
                            <IoLocationOutline className="text-3xl text-gray-400" />
                            <div>
                                <p className="text-xs text-gray-400 uppercase font-bold">Location</p>
                                <p className="text-lg font-bold text-gray-700">{location}</p>
                            </div>
                        </div>
                    </div>

                    <div className="space-y-2">
                        <p className="text-sm text-gray-400 uppercase font-bold">Description</p>
                        <p className="text-gray-600 leading-relaxed text-lg italic">
                            "{description}"
                        </p>
                        <p className="text-gray-500 text-sm">Age: {age} Years</p>
                    </div>

                    <div className="divider"></div>

                    {/* Price and Action */}
                    <div className="flex flex-col items-center gap-2  bg-orange-50 p-6 rounded-3xl border border-orange-100 ">
                        <div>
                            <p className="text-sm text-orange-400 uppercase font-bold">Asking Price</p>
                            <p className="text-4xl font-black text-orange-600">৳{price.toLocaleString()}</p>
                        </div>
                        
                        <ContactBtn animalName={name} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AnimalDetailPage;