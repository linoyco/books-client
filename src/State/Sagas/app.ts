import { take, call, put } from 'redux-saga/effects';

import { ADD_BOOK, DELETE_USER, FETCH_BOOKS, LAST_PURCHASE, LOGOUT, PURCHASE, SAVE_BOOK, SAVE_BOOKS, SAVE_LAST_PURCHASE, SAVE_USER, SEARCH_BY, SEND_LOGIN_DETAILS } from '../Actions/App/types';
import * as Api from '../../Api';
import { IBook } from '../../Api/ApiObject';

//GET BOOKS
function* fetchBooksFlow() {
    try {
        const res = yield call(Api.getBooksRequest);
        yield put({ type: SAVE_BOOKS, booksList: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchFetchBooks() {
    while (true) {
        yield take(FETCH_BOOKS);
        yield call(fetchBooksFlow);
    }
};

//LOGIN
function* LoginFlow(name: string, password: string) {
    try {
        const res = yield call(Api.loginRequest, name, password);
        yield put({ type: SAVE_USER, userDetails: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchLogin() {
    while (true) {
        const { name, password } = yield take(SEND_LOGIN_DETAILS);
        yield call(LoginFlow, name, password);
    }
};

//LOGOUT
function* LogoutFlow() {
    try {
        yield call(Api.logoutRequest);
        yield put({ type: DELETE_USER });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchLogout() {
    while (true) {
        yield take(LOGOUT);
        yield call(LogoutFlow);
    }
};

//SEARCH
function* searchByFlow(searchBy: string) {
    try {
        const res = yield call(Api.searchRequest, searchBy);
        yield put({ type: SAVE_BOOKS, booksList: res.data[0] });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchSearchBy() {
    while (true) {
        const { searchBy } = yield take(SEARCH_BY);
        yield call(searchByFlow, searchBy);
    }
};

//PURCHASE
function* purchaseFlow(bookId: string, token: string) {
    try {
        const res = yield call(Api.purchaseBookRequest, bookId, token);
        yield put({ type: SAVE_USER, userDetails: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchPurchase() {
    while (true) {
        const { bookId, token } = yield take(PURCHASE);
        yield call(purchaseFlow, bookId, token);
    }
};

//LAST PURCHASE
function* lastPurchaseFlow(bookId: string, token: string) {
    try {
        const res = yield call(Api.lastPurchaseRequest, bookId, token);
        yield put({ type: SAVE_LAST_PURCHASE, lastPurchase: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchLastPurchase() {
    while (true) {
        const { bookId, token } = yield take(LAST_PURCHASE);
        yield call(lastPurchaseFlow, bookId, token);
    }
};


//ADD BOOK
function* addBookFlow(newBook: IBook, token: string) {
    try {
        const res = yield call(Api.addBookRequest, newBook, token);
        yield put({ type: SAVE_BOOK, newBook: res.data });
    }
    catch (error) {
        console.log(error.message);
    }
};

export function* watchAddBook() {
    while (true) {
        const { newBook, token } = yield take(ADD_BOOK);
        yield call(addBookFlow, newBook, token);
    }
};