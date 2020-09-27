import axios from 'axios';
import { IBook } from './ApiObject';

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

//FREE - login
export const loginRequest = (name: string, password: string) => {
    const url = `${LOGIN_URL}`;
    return Axios.post(url, { name, password });
}

//FREE - logout
export const logoutRequest = () => {
    const url = `${LOGOUT_URL}`;
    return Axios.delete(url);
}

//FREE - get books
export const getBooksRequest = () => {
    const url = `${GET_BOOKS_URL}`;
    return Axios.get(url);
}

//FREE - search book
export const searchRequest = (q: string) => {
    const url = `${SEARCH_URL}`;
    return Axios.post(url, q);
}

//ADMIN - add book
export const addBookRequest = (newbook: IBook, token: string) => {
    return Axios.post(ADD_BOOK_URL, newbook, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

//ADMIN - update book
export const updateBookRequest = (updatebook: IBook, bookID: string, token: string) => {
    return Axios.patch(UPDATE_BOOK_URL, { updatebook, bookID }, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

//ADMIN - delete book
export const deleteBookRequest = (bookID: string, token: string) => {
    return Axios.patch(DELETE_BOOK_URL, bookID, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

//USER - purchase book
export const purchaseBookRequest = (bookID: string, token: string) => {
    return Axios.patch(PURCHASE_URL, bookID, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

//USER - last purchase
export const lastPurchaseRequest = (bookID: string, token: string) => {
    return Axios.patch(LAST_PURCHASE_URL, bookID, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}