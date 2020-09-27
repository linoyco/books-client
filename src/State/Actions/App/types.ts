import { IBook } from "../../../Api/ApiObject";

export const FETCH_BOOKS = 'FETCH_BOOKS';
export const SAVE_BOOKS = 'SAVE_BOOKS';

export interface IFetchBooks {
    type: typeof FETCH_BOOKS;
}

export interface ISaveBooks {
    type: typeof SAVE_BOOKS;
    booksList: Array<IBook>;
}

export type appActionType = IFetchBooks
    | ISaveBooks;
