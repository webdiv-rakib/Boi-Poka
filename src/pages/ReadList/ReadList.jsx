import { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { getStoredBook, getWishListBook } from '../../utilities/addToDB';
import Book from '../Book/Book';
const ReadList = () => {
    const data = useLoaderData();

    const [readList, setReadList] = useState([]);
    const [wishList, setWishList] = useState([]);
    const [sort, setSort] = useState("");
    useEffect(() => {
        const storedBookData = getStoredBook();
        const convertedStoredBook = storedBookData.map(id => parseInt(id));
        const myReadList = data.filter(book => convertedStoredBook.includes(book.bookId));
        setReadList(myReadList)
    }, []);

    useEffect(() => {
        const storedWishListData = getWishListBook();
        const convertWishListBook = storedWishListData.map(id => parseInt(id));
        const myWishList = data.filter(book => convertWishListBook.includes(book.bookId));
        setWishList(myWishList);
    }, [])

    const handleSort = (type) => {
        setSort(type)
        if (type === 'pages') {
            const sortedByPage = [...readList].sort((a, b) => a.totalPages - b.totalPages);
            setReadList(sortedByPage);
        }
        if (type === 'ratings') {
            const sortedByRatings = [...readList].sort((a, b) => a.rating - b.rating)
            setReadList(sortedByRatings);
        }
    }

    return (
        <div>
            <div className='px-30'>
                <div className='text-center mt-10 mb-10 w-full bg-base-200 p-5 rounded-2xl font-bold text-2xl'>
                    <h1>Books</h1>
                </div>
            </div>
            <div className='flex justify-center'>
                <div className="dropdown ">
                    <div tabIndex={0} role="button" className="btn m-1 bg-green-400">Sort By: {sort ? sort : ""}</div>
                    <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm">
                        <li><a onClick={() => handleSort('pages')}>Pages</a></li>
                        <li><a onClick={() => handleSort('ratings')}>Ratings</a></li>
                    </ul>
                </div>
            </div>
            <div className='px-30'>
                <Tabs>
                    <TabList>
                        <Tab>Read Books</Tab>
                        <Tab>Wishlist Books</Tab>
                    </TabList>

                    <TabPanel>
                        <h2>Book i read :{readList.length}</h2>
                        <div className='grid grid-cols-4 justify-self-center gap-10 mb-10'>
                            {
                                readList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                            }
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <h2>Wish listed Books: {wishList.length}</h2>
                        <div className='grid grid-cols-4 justify-self-center gap-10 mb-10'>
                            {
                                wishList.map(b => <Book key={b.bookId} singleBook={b}></Book>)
                            }
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default ReadList;