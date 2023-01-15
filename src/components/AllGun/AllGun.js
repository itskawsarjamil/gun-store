import React, { useEffect, useState } from 'react';
import SingleGun from '../SingleGun/SingleGun';

const AllGun = ({ handleCount }) => {
    const [guns, setGuns] = useState([]);
    useEffect(() => {
        fetch("https://raw.githubusercontent.com/mir-hussain/guns/main/data.json")
            .then(res => res.json())
            .then(data => setGuns(data))
    }, [])
    // console.log(handleCount,guns);
    return (
        <div className='max-w-7xl mx-auto'>
            <div className='my-8'>
                <h1 className='text-4xl font-bold'>Welcome To <span className='text-yellow-700 '>Fake</span> Guns Store</h1>
                <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic enim porro numquam illum neque minus, magnam, atque aperiam, eos pariatur ipsa! Corrupti voluptas neque, provident architecto laboriosam repellendus soluta voluptates hic minima. Velit omnis quasi harum perspiciatis non magnam tenetur.
                </p>
            </div>

            <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    guns.map((gun,i) =>{
                        return <SingleGun handleCount={handleCount} gun={gun} id={i}></SingleGun> ;
                    })
                }
            </div>
        </div>
    );
};

export default AllGun;