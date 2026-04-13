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
                    <div className="badge badge-outline">{tags[0]}</div>
                    <div className="badge badge-outline">{tags[1]}</div>
                </div>
                <h2 className="card-title">
                    Card Title
                    <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>

            </div>
        </div>
    );
};

export default Book;