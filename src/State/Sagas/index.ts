import { all } from 'redux-saga/effects';

import { watchFetchBooks, watchLastPurchase, watchLogin, watchLogout, watchPurchase, watchSearchBy } from './app';

export default function* rootSaga() {
	yield all([
		watchFetchBooks(),
		watchLogin(),
		watchLogout(),
		watchSearchBy(),
		watchPurchase(),
		watchLastPurchase()
	]);
}