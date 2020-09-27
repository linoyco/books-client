import { all } from 'redux-saga/effects';

import { watchFetchBooks } from './app';

export default function* rootSaga() {
	yield all([
		watchFetchBooks()
	]);
}