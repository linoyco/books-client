import { IBook, IUser } from "../../../Api/ApiObject";

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SAVE_BOOKS = 'SAVE_BOOKS';
export const SEND_LOGIN_DETAILS = 'SEND_LOGIN_DETAILS';
export const LOGOUT = 'LOGOUT';
export const SAVE_USER = 'SAVE_USER';
export const DELETE_USER = 'DELETE_USER';
export const SEARCH_BY = 'SEARCH_BY';

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

export type appActionType = IFetchBooks
    | ISaveBooks
    | ISendLoginDetails
    | ISaveUser
    | ILogout
    | IDeleteUser
    | ISearchBy;