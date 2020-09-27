import axios from 'axios';

const Axios = axios.create({
    baseURL: 'http://localhost:9000'
});

const GET_BOOKS_URL = '/';
const LOGIN_URL = '/login';
const LOGOUT_URL = '/login/logout';
const SEARCH_URL = '/search';
const ADD_BOOK_URL = '/admin/add-book';
const UPDATE_BOOK_URL = '/admin/update-book';
const DELETE_BOOK_URL = '/admin/delete-book';
const PURCHASE_URL = '/user/purchase-book';
const LAST_PURCHASE_URL = '/user/last-purchase';

//FREE - get books
export const getBooksRequest = () => {
    const url = `${GET_BOOKS_URL}`;
    return Axios.get(url);
}

//FREE - login

//FREE - logout

//FREE - search book


//ADMIN - add book
export const addBookRequest = (token: string) => {
    return axios.get("/user", {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

//ADMIN - update book

//ADMIN - delete book

//USER - purchase book

//USER - last book






// export const header = (token: string) => {
//     return axios.get("/user", {
//         headers: { 'Authorization': `Bearer ${token}` }
//     });
// }


// export const getBooksRequest = (city: string) => {
//     const url = `${GET_BOOKS_URL}`;
//     return Axios.get(url, {
//         params: {
//             'q': city,
//             'units': 'metric',
//             'appid': API_KEY
//         }
//     });
// }