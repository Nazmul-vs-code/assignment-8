import React from 'react';
import AnimalCard from './AnimalCard';

const FeturedAnimal = async () => {

    const res = await fetch(`https://assignment-8-lime.vercel.app/data.json`);
    const animals = await res.json();

    const TopDemo = animals.slice(0, 4);

    // console.log(animals , " Yooo animals")
    // console.log(TopDemo , " TopDemo animals")
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 gap-3'>
            {
                TopDemo.map(a => <AnimalCard animal={a} key={a.id} />)

            }

        </div>
    );
};

export default FeturedAnimal;