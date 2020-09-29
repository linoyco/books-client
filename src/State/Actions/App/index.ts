import { IBook } from '../../../Api/ApiObject';
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

export function addBook(newBook: IBook, token: string): AppActions.IAddBook {
    return {
        type: AppActions.ADD_BOOK,
        newBook: newBook,
        token: token
    }
}

export function bookToEdit(book: IBook): AppActions.IBookToEdit {
    return {
        type: AppActions.BOOK_TO_EDIT,
        book: book,
    }
}

export function sendUpdate(updatebook: IBook, bookId: string, token: string): AppActions.ISendUpdate {
    return {
        type: AppActions.SEND_UPDATE,
        updatebook: updatebook,
        bookId: bookId,
        token: token
    }
}

export function sentDelete(bookId: string, token: string): AppActions.ISendDeleteBook {
    return {
        type: AppActions.SEND_DELETE_BOOK,
        bookId: bookId,
        token: token
    }
}