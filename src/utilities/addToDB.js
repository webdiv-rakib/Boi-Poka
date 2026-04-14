import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

const getStoredBook = () => {
    const storedBookSTR = localStorage.getItem('readList')
    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    }
    else {
        return []
    }
}
const addToStoreDB = (id) => {
    const storedBookData = getStoredBook();
    if (storedBookData.includes(id)) {
        MySwal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
    else {
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem('readList', data)
    }
}

export { addToStoreDB, getStoredBook }

const getWishListBook = () => {
    const wishListBooksSTR = localStorage.getItem('wishList');
    if (wishListBooksSTR) {
        const wishListBookData = JSON.parse(wishListBooksSTR);
        return wishListBookData;
    }
    else {
        return []
    }
}

const addToWishDB = (id) => {
    const wishListBookData = getWishListBook();
    if (wishListBookData.includes(id)) {
        MySwal.fire({
            title: "Good job!",
            text: "You clicked the button!",
            icon: "success"
        });
    }
    else {
        wishListBookData.push(id)
        const data = JSON.stringify(wishListBookData);
        localStorage.setItem('wishList', data);
    }
}

export { getWishListBook, addToWishDB };