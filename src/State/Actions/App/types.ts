import { IBook, IUser } from "../../../Api/ApiObject";

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SAVE_BOOKS = 'SAVE_BOOKS';
export const SEND_LOGIN_DETAILS = 'SEND_LOGIN_DETAILS';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SEARCH_BY = 'SEARCH_BY';
export const PURCHASE = 'PURCHASE';
export const LAST_PURCHASE = 'LAST_PURCHASE';
export const SAVE_LAST_PURCHASE = 'SAVE_LAST_PURCHASE';
export const ADD_BOOK = 'ADD_BOOK';
export const SAVE_BOOK = 'SAVE_BOOK';
export const BOOK_TO_EDIT = 'BOOK_TO_EDIT';
export const SEND_UPDATE = 'SEND_UPDATE';
export const SAVE_UPDATE = 'SAVE_UPDATE';

export interface IFetchBooks {
    type: typeof FETCH_BOOKS;
}

export interface ISaveBooks {
    type: typeof SAVE_BOOKS;
    booksList: Array<IBook>;
}

export interface ISendLoginDetails {
    type: typeof SEND_LOGIN_DETAILS;
    name: string;
    password: string;
}

export interface ISaveUser {
    type: typeof SAVE_USER;
    userDetails: IUser;
}

export interface ILogout {
    type: typeof LOGOUT;
}

export interface IDeleteUser {
    type: typeof DELETE_USER;
}

export interface ISearchBy {
    type: typeof SEARCH_BY;
    searchBy: string;
}

export interface IPurchase {
    type: typeof PURCHASE;
    bookId: string;
    token: string;
}

export interface ILastPurchase {
    type: typeof LAST_PURCHASE;
    bookId: string;
    token: string;
}

export interface ISaveLastPurchase {
    type: typeof SAVE_LAST_PURCHASE;
    lastPurchase: IBook;
}

export interface IAddBook {
    type: typeof ADD_BOOK;
    newBook: IBook;
    token: string;
}

export interface ISaveBook {
    type: typeof SAVE_BOOK;
    newBook: IBook;
}

export interface IBookToEdit {
    type: typeof BOOK_TO_EDIT;
    book: IBook;
}

export interface ISendUpdate {
    type: typeof SEND_UPDATE;
    updatebook: IBook;
    bookId: string;
    token: string;
}

export interface ISaveUpdate {
    type: typeof SAVE_UPDATE;
    updatebook: IBook;
}

export type appActionType = IFetchBooks
    | ISaveBooks
    | ISendLoginDetails
    | ISaveUser
    | ILogout
    | IDeleteUser
    | ISearchBy
    | IPurchase
    | ILastPurchase
    | ISaveLastPurchase
    | IAddBook
    | ISaveBook
    | IBookToEdit
    | ISendUpdate
    | ISaveUpdate;