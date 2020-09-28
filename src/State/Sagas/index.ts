import { all } from 'redux-saga/effects';

import { watchAddBook, watchDeleteBook, watchFetchBooks, watchLastPurchase, watchLogin, watchLogout, watchPurchase, watchSearchBy, watchUpdateBook } from './app';

export default function* rootSaga() {
	yield all([
		watchFetchBooks(),
		watchLogin(),
		watchLogout(),
		watchSearchBy(),
		watchPurchase(),
		watchLastPurchase(),
		watchAddBook(),
		watchUpdateBook(),
		watchDeleteBook()
	]);
}