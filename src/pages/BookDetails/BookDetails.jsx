import { useLoaderData, useParams } from "react-router";
import { addToStoreDB, addToWishDB } from "../../utilities/addToDB";

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId);



    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;

    const handleMarkAsRead = id => {
        // store with id
        // where to store
        // array or collection
        // if book already exist then show a alert
        // if book not exist then push in the collection or array

        addToStoreDB(id)
    }

    const handleWishList = id => {
        addToWishDB(id)
    }
    return (
        <div className="md:flex md:items-center md:justify-center md:mt-10 md:mb-10">
            <div className="card card-side bg-base-100 shadow-sm md:w-1/2 flex flex-col md:flex-row p-5">
                <figure>
                    <img
                        className="md:w-100"
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body md:w-1/2">
                    <div>
                        <h2 className="card-title text-4xl">{bookName}</h2>
                        <h2 className="">By: {author}</h2>
                    </div>
                    <hr />
                    <p>{category}</p>
                    <hr />
                    <p><span className="font-bold">Review:</span> {review}</p>
                    <p><span className="font-bold">Tag: </span>{tags[0]}{tags[1]}</p>
                    <hr />
                    <div>
                        <p>Number of Pages: {totalPages}</p>
                        <p>Publisher: {publisher}</p>
                        <p>Year of Publishing: {yearOfPublishing}</p>
                        <p>Rating: {rating}</p>
                    </div>
                    <div className="card-actions">
                        <button className="btn btn-primary" onClick={() => handleMarkAsRead(id)}>Mark As Read</button>
                        <button className="btn btn-primary" onClick={() => handleWishList(id)}>Add To Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;