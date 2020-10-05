import axios from 'axios';
import { IBook } from './ApiObject';

const Axios = axios.create({
    baseURL: 'http://localhost:9000'
});

const GET_BOOKS_URL = '/';
const LOGIN_URL = '/login';
const LOGOUT_URL = '/logout';
const SEARCH_URL = '/search';
const ADD_BOOK_URL = '/admin/add-book';
const UPDATE_BOOK_URL = '/admin/update-book';
const DELETE_BOOK_URL = '/admin/delete-book';
const PURCHASE_URL = '/user/purchase-book';
const LAST_PURCHASE_URL = '/user/last-purchase';

export const loginRequest = (name: string, password: string) => {
    const url = `${LOGIN_URL}`;
    return Axios.post(url, { name, password });
}

export const logoutRequest = () => {
    const url = `${LOGOUT_URL}`;
    return Axios.delete(url);
}

export const getBooksRequest = () => {
    const url = `${GET_BOOKS_URL}`;
    return Axios.get(url);
}

export const searchRequest = (q: string) => {
    const url = `${SEARCH_URL}`;
    const obj = { q: q }
    return Axios.patch(url, obj);
}

export const addBookRequest = (newbook: IBook, token: string) => {
    return Axios.post(ADD_BOOK_URL, newbook, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

export const updateBookRequest = (updatebook: IBook, bookId: string, token: string) => {
    const obj = {
        bookName: updatebook.bookName,
        author: {
            fullName: updatebook.author.fullName,
            age: updatebook.author.age
        },
        publisher: {
            publisherName: updatebook.publisher.publisherName,
            year: updatebook.publisher.year
        },
        price: updatebook.price,
        imageURL: updatebook.imageURL,
        bookId: bookId
    }
    return Axios.patch(UPDATE_BOOK_URL, obj, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

export const deleteBookRequest = (bookId: string, token: string) => {
    const obj = { bookId: bookId }
    return Axios.patch(DELETE_BOOK_URL, obj, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

export const purchaseBookRequest = (bookId: string, token: string) => {
    const obj = { bookId: bookId }
    return Axios.patch(PURCHASE_URL, obj, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}

export const lastPurchaseRequest = (bookId: string, token: string) => {
    const obj = { bookId: bookId }
    return Axios.patch(LAST_PURCHASE_URL, obj, {
        headers: { 'Authorization': `Bearer ${token}` }
    });
}