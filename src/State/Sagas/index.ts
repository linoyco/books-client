import { all } from 'redux-saga/effects';

import { watchFetchBooks, watchLogin } from './app';

export default function* rootSaga() {
	yield all([
		watchFetchBooks(),
		watchLogin()
	]);
}