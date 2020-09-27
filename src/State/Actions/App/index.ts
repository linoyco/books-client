import * as AppActions from './types';

export function fetchBooks(): AppActions.IFetchBooks {
    return {
        type: AppActions.FETCH_BOOKS,
    }
}

export function sendLoginDetails(name: string, password: string): AppActions.ISendLoginDetails {
    return {
        type: AppActions.SEND_LOGIN_DETAILS,
        name: name,
        password: password
    }
}