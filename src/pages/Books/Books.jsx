import React, { Suspense, useEffect, useState } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    const [allBooks, setAllBooks] = useState([]);
    // useEffect(() => {
    //     fetch("booksData.json")
    //         .then(res => res.json())
    //         .then(data => setAllBooks(data))
    // }, [])

    // const bookPromise = fetch('./booksData.json').then(res => res.json())

    return (
        <div className='bg-base-200'>
            <h1 className='text-center text-4xl'>Books</h1>
            <Suspense fallback={<span>loading.....</span>}>
                <div className='grid grid-cols-4 justify-self-center gap-5 mt-10'>
                    {
                        data.map(singleBook => <Book
                            key={singleBook.bookId}
                            singleBook={singleBook}
                        ></Book>)
                    }
                </div>
            </Suspense>
        </div>
    );
};

export default Books;