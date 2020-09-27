import { take, call, put } from 'redux-saga/effects';

import { FETCH_BOOKS, SAVE_BOOKS, SAVE_USER, SEND_LOGIN_DETAILS } from '../Actions/App/types';
import * as Api from '../../Api';

//GET BOOKS
function* fetchBooksFlow() {
    try {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        const res = yield call(Api.getBooksRequest);
        yield put({ type: SAVE_BOOKS, booksList: res.data });
        console.log(res.data);

    }
    catch (error) {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
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
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: '' });

        const res = yield call(Api.loginRequest, name, password);
        yield put({ type: SAVE_USER, userDetails: res.data });
    }
    catch (error) {
        // yield put({ type: SET_ERROR_MESSAGE, errorMessage: error.message });
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
