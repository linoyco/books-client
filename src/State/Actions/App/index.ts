import * as AppActions from './types';

export function fetchBooks(): AppActions.IFetchBooks {
    return {
        type: AppActions.FETCH_BOOKS,
    }
}