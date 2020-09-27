import { take, call, put } from 'redux-saga/effects';

import { FETCH_BOOKS, SAVE_BOOKS } from '../Actions/App/types';
import * as Api from '../../Api';

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



// export function* watchFetchBooks() {
//     while (true) {
//         const { city } = yield take(FETCH_WEATHER);
//         yield call(fetchWeather, city);
//     }
// };