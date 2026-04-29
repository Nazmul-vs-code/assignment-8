import AnimalCard from '@/components/AnimalCard';
import React from 'react';

const AllAnimals = async () => {
    const res = await fetch(`https://assignment-8-lime.vercel.app/data.json`);
    const animals = await res.json();
    return (
        <div className='my-30 w-10/12 mx-auto'>

            <h1 className='text-3xl font-bold'>
                all animals here
            </h1>

            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 mt-3'>
                {
                    animals.map(a => <AnimalCard animal={a} key={a.id} />)

                }

            </div>
        </div>
    );
};

export default AllAnimals;