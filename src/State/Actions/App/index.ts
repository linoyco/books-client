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

export function logout(): AppActions.ILogout {
    return {
        type: AppActions.LOGOUT,
    }
}

export function searchBook(searchBy: string): AppActions.ISearchBy {
    return {
        type: AppActions.SEARCH_BY,
        searchBy: searchBy
    }
}

export function purchase(bookId: string, token: string): AppActions.IPurchase {
    return {
        type: AppActions.PURCHASE,
        bookId: bookId,
        token: token
    }
}

export function lastPurchase(bookId: string, token: string): AppActions.ILastPurchase {
    return {
        type: AppActions.LAST_PURCHASE,
        bookId: bookId,
        token: token
    }
}