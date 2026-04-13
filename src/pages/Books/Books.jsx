import { Suspense } from 'react';
import Book from '../Book/Book';

const Books = ({ data }) => {
    return (
        <div className='bg-base-200'>
            <h1 className='text-center text-4xl font-bold'>Books</h1>
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