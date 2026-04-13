import React from 'react';
import bookimage from '../../assets/books.jpg'
const Banner = () => {
    return (
        <div className='md:flex md:justify-center md:gap-10'>
            <div>
                <h1>Books to freshen up your</h1>
                <button className='btn'>View The List</button>
            </div>
            <div>
                <img src={bookimage} alt="" />
            </div>
        </div>
    );
};

export default Banner;