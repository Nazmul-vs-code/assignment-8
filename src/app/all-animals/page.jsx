'use client'
import AnimalCard from '@/components/AnimalCard';
import React, { useState, useEffect } from 'react';

const AllAnimals = () => {
    const [animals, setAnimals] = useState([]);
    const [sortOrder, setSortOrder] = useState("");

    // Fetch data 
    useEffect(() => {
        fetch(`https://assignment-8-lime.vercel.app/data.json`)
            .then(res => res.json())
            .then(data => setAnimals(data));
    }, []);

    // 2. Sorting Logic
    const sortedAnimals = [...animals].sort((a, b) => {
        if (sortOrder === "low-to-high") return a.price - b.price;
        if (sortOrder === "high-to-low") return b.price - a.price;
        return 0;
    });

    return (
        <div className='my-30 w-10/12 mx-auto'>
            <div className="flex justify-between items-center mb-6">
                <h1 className='text-3xl font-bold uppercase'>All Animals</h1>


                <select
                    className="select select-bordered rounded-none border-black text-black font-bold focus:outline-none"
                    onChange={(e) => setSortOrder(e.target.value)}
                >
                    <option value="">Sort By Price</option>
                    <option value="low-to-high">Price: Low to High</option>
                    <option value="high-to-low">Price: High to Low</option>
                </select>
            </div>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                {
                    sortedAnimals.map(a => <AnimalCard animal={a} key={a.id} />)
                }
            </div>
        </div>
    );
};

export default AllAnimals;