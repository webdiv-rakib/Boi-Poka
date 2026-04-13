import React from 'react';
import bookimage from '../../assets/books-removebg-preview.png'
const Banner = () => {
    return (
        <div className="hero bg-base-200">
            <div className="hero-content flex-col lg:flex-row-reverse md:mt-10 md:mb-20">
                <img
                    src={bookimage}
                    className="rounded-lg shadow-2xl"
                />
                <div className='space-y-5'>
                    <h1 className="text-6xl font-bold">Books to freshen up <br />your bookshelf</h1>
                    <button className="btn bg-green-400 text-white font-extrabold">Get Started</button>
                </div>
            </div>
        </div>
    );
};

export default Banner;