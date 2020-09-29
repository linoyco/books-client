import produce from 'immer';

import { IBook, IUser } from '../../Api/ApiObject';
import { appActionType, BOOK_TO_EDIT, DELETE_USER, SAVE_BOOK, SAVE_BOOKS, SAVE_LAST_PURCHASE, SAVE_UPDATE, SAVE_USER } from '../Actions/App/types';

export interface IAppState {
    booksList: Array<IBook>;
    userDetails: IUser;
    lastPurchase: IBook;
    bookToEdit: IBook;
}

const initialState: IAppState = {
    booksList: [],
    userDetails: {
        token: '',
        permission: '',
        fullName: '',
        imageURL: '',
        lastPurchase: { date: '', bookId: '' }
    },
    lastPurchase: {
        author: { fullName: '', age: '' },
        bookName: '',
        imageURL: '',
        price: '',
        publisher: { publisherName: '', year: '' },
        stars: 0,
    },
    bookToEdit: {
        author: { age: '', fullName: '' },
        stars: 0,
        publisher: { publisherName: '', year: '' },
        price: '',
        imageURL: '',
        bookName: ''
    }
}

export function appReducer(state: IAppState = initialState, action: appActionType) {
    return produce(state, draft => {
        switch (action.type) {
            case SAVE_BOOKS:
                draft.booksList = action.booksList;
                break;
            case SAVE_USER:
                draft.userDetails = action.userDetails;
                break;
            case DELETE_USER:
                draft.userDetails = {
                    token: '',
                    permission: '',
                    fullName: '',
                    imageURL: '',
                    lastPurchase: {
                        bookId: '',
                        date: ''
                    }
                }
                break;
            case SAVE_LAST_PURCHASE:
                draft.lastPurchase = action.lastPurchase;
                break;
            case SAVE_BOOK:
                draft.booksList.push(action.newBook);
                break;
            case BOOK_TO_EDIT:
                draft.bookToEdit = action.book;
                break;
            case SAVE_UPDATE:
                draft.booksList.map(book => {
                    if (book._id === action.updatebook._id) {
                        book = action.updatebook;
                    }
                });
                break;
        }
    });
}