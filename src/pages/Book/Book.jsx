import React, { use } from 'react';

const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    // console.log(data);
    const { bookName, author, image, review, totalPages, rating, tags } = singleBook
    return (
        <div className="card bg-base-100 w-96 shadow-sm">
            <figure className='p-7'>
                <img className='h-80 w-50 rounded-xl'
                    src={image}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <div className="card-actions">
                    <div className="badge bg-base-200 p-4 text-green-400 font-bold">{tags[0]}</div>
                    <div className="badge bg-base-200 p-4 text-green-400 font-bold">{tags[1]}</div>
                </div>
                <h2 className="card-title font-bold text-3xl">
                    {bookName}
                </h2>
                <p className='font-bold'>By: {author}</p>
                <hr className='border-dashed' />
                <div className='flex justify-between'>
                    <p>Fiction</p>
                    <p className='text-right'>{rating}</p>
                </div>
            </div>
        </div>
    );
};

export default Book;