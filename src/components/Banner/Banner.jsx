import React from 'react';
import bookimage from '../../assets/books-removebg-preview.png'
const Banner = () => {
    return (
        <div className='md:flex md:justify-center md:mt-10'>
            <div className='mt-30 space-y-6'>
                <h1 className='text-7xl'>Books to freshen up<br/>your bookshelf</h1>
                <button className='btn'>View The List</button>
            </div>
            <div>
                <img className='rounded-2xl' src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;