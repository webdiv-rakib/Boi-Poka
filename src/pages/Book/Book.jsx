import { FaRegStar } from "react-icons/fa";
import { Link } from "react-router";
const Book = ({ singleBook }) => {
    // const data = use(bookPromise);
    // console.log(data);
    const { bookName, author, image, rating, tags, bookId } = singleBook
    return (
        <Link to={`/bookDetails/${bookId}`}>
            <div className="card bg-base-100 md:w-96 shadow-sm">
                <figure className='md:p-7'>
                    <img className='md:h-80 md:w-50 md:rounded-xl h-50'
                        src={image}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <div className="card-actions flex">
                        <div className="md:badge bg-base-200 md:p-4 text-green-400 font-bold text-xs">{tags[0]}</div>
                        <div className="md:badge bg-base-200 md:p-4 text-green-400 font-bold text-xs">{tags[1]}</div>
                    </div>
                    <h2 className="card-title font-bold md:text-3xl">
                        {bookName}
                    </h2>
                    <p className='font-bold hidden md:block'>By: {author}</p>
                    <hr className='border-dashed md:block hidden' />
                    <div className='md:flex md:justify-between md:block hidden'>
                        <div>
                            <p>Fiction</p>
                        </div>
                        <div className="flex justify-center items-center gap-2">
                            <p className='text-right'>{rating}</p>
                            <FaRegStar />
                        </div>
                    </div>
                </div>
            </div>
        </Link>
    );
};

export default Book;