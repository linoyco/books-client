export interface IUser {
    _id?: string,
    permission: string,
    fullName: string,
    token: string,
    imageURL: string,
    lastPurchase: {
        date: string,
        bookId: string
    },
    __v?: number
}

export interface IBook {
    _id?: string,
    bookName: string,
    author: {
        fullName: string,
        age: string
    },
    publisher: {
        publisherName: string,
        year: string
    },
    price: string,
    imageURL: string,
    stars: number,
    __v?: number
}