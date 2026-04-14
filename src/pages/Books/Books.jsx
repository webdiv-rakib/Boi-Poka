import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    return (
        <div className='bg-base-200'>
            <h1 className='text-center text-4xl font-bold'>Books</h1>
            <Suspense fallback={<span>loading.....</span>}>
                <div className='md:grid md:grid-cols-4 justify-self-center md:gap-5 mt-10 grid grid-cols-2 gap-5 p-5'>
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