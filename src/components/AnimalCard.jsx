import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const AnimalCard = ({ animal }) => {
    const {
        id,
        name,
        type,
        breed,
        price,
        weight,
        location,
        image,
        category
    } = animal;

    return (
        <div className="card bg-white shadow-xl hover:shadow-2xl transition-shadow border border-gray-100 overflow-hidden">
            {/* Image Section */}
            <figure className="relative h-56 w-full">
                <Image
                    src={image}
                    alt={name}
                    fill
                    className="object-cover"
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
                <div className="absolute top-2 right-2">
                    <span className="badge badge-primary font-bold shadow-sm">
                        {category}
                    </span>
                </div>
            </figure>

            {/* Content Section */}
            <div className="card-body p-5">
                <div className="flex justify-between items-start">
                    <div>
                        <h2 className="card-title text-gray-800 text-xl font-bold">
                            {name}
                        </h2>
                        <p className="text-sm text-gray-500 font-medium">{breed} • {type}</p>
                    </div>
                </div>

                {/* Specs Grid */}
                <div className="grid grid-cols-2 gap-4 my-4 bg-slate-50 p-3 rounded-lg border border-slate-100">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase font-bold">Weight</span>
                        <span className="text-sm font-semibold text-gray-700">{weight} kg</span>
                    </div>
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 uppercase font-bold">Location</span>
                        <span className="text-sm font-semibold text-gray-700">{location}</span>
                    </div>
                </div>

                {/* Footer Section */}
                <div className="card-actions justify-between items-center mt-2">
                    <div className="flex flex-col">
                        <span className="text-xs text-gray-400 font-bold uppercase">Price</span>
                        <span className="text-2xl font-black text-orange-600">
                            ৳{price.toLocaleString()}
                        </span>
                    </div>
                    <button 

                    className="btn ">
                        <Link href={`/all-animals/${id}`}>Details</Link>
                    </button>
                </div>
            </div>
        </div>
    );
};

export default AnimalCard;