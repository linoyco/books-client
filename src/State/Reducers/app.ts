import produce from 'immer';

import { IBook, IUser } from '../../Api/ApiObject';
import { appActionType, DELETE_USER, SAVE_BOOKS, SAVE_LAST_PURCHASE, SAVE_USER } from '../Actions/App/types';

export interface IAppState {
    booksList: Array<IBook>;
    userDetails: IUser;
    lastPurchase: IBook;
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
        }
    });
}