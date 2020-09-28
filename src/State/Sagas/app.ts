import { take, call, put } from 'redux-saga/effects';

import { DELETE_USER, FETCH_BOOKS, LAST_PURCHASE, LOGOUT, PURCHASE, SAVE_BOOKS, SAVE_LAST_PURCHASE, SAVE_USER, SEARCH_BY, SEND_LOGIN_DETAILS } from '../Actions/App/types';
import * as Api from '../../Api';

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

//LAST Purchase
function* lastPurchaseFlow(bookId: string, token: string) {
    try {
        const res = yield call(Api.lastPurchaseRequest, bookId, token);
        console.log(res.data);

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