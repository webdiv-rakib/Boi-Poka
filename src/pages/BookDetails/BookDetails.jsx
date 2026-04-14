import { useLoaderData, useParams } from "react-router";

const BookDetails = () => {
    const { id } = useParams();
    const bookId = parseInt(id);
    const data = useLoaderData();
    const singleBook = data.find(book => book.bookId === bookId)
    const { bookName, author, image, review, totalPages, rating, category, tags, publisher, yearOfPublishing } = singleBook;
    return (
        <div className="flex items-center justify-center mt-10 mb-10">
            <div className="card card-side bg-base-100 shadow-sm w-1/2">
                <figure>
                    <img
                        className="w-100"
                        src={image}
                        alt="Movie" />
                </figure>
                <div className="card-body w-1/2">
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
                        <button className="btn btn-primary">Read</button>
                        <button className="btn btn-primary">Wishlist</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BookDetails;