import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { IBook, IUser } from '../Api/ApiObject';
import CustomCard from '../Components/CustomCard';
import CustomDialog from '../Components/CustomDialog';
import CustomTextField from '../Components/CustomTextField';
import { purchase, searchBook, lastPurchase } from '../State/Actions/App';
import { StyledDiv } from './HomePage';
import CustomButton from '../Components/CustomButton';

const UserPage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const [open, setOpen] = React.useState<boolean>(false);
    const [searchBy, setSearchBy] = React.useState<string>('');
    const [purchaseBook, setPurchaseBook] = React.useState<string>('');
    const [bookPrice, setBookPrice] = React.useState<string>('');

    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList);
    const userDetails: IUser = useSelector((state: any) => state.app.userDetails);
    const userLastPurchase: IBook = useSelector((state: any) => state.app.lastPurchase);

    React.useEffect(() => {
        mapBooksList();
    }, [booksList.length]);

    React.useEffect(() => {
        if (userDetails.lastPurchase.bookId !== '') {
            dispatch(lastPurchase(userDetails.lastPurchase.bookId, userDetails.token));
            getLastPurchase();
        }
    }, [userDetails.lastPurchase]);

    React.useEffect(() => {
        getLastPurchase();
        console.log(userLastPurchase.bookName);
        
    }, [userLastPurchase.bookName]);

    const mapBooksList = () => {
        if (booksList.length === 0) { return <div></div>; }
        return booksList.map(book =>
            <div className='Card' key={book._id}>
                <CustomCard
                    buttonText='buy'
                    bookName={book.bookName}
                    authorName={book.author.fullName}
                    imageUrl={book.imageURL}
                    publisher={book.publisher.publisherName}
                    price={book.price} />
                <CustomButton text='buy' onClick={() => [dispatch(purchase(book._id ? book._id : '', userDetails.token))]} />
            </div>
        );
    }

    const getLastPurchase = () => userDetails.lastPurchase.bookId ? <div><span>Last purchase:</span><br /><span>{userLastPurchase.bookName}</span></div> : null;

    return (
        <StyledDiv>
            <div className='Field'>
                <CustomTextField
                    errorMessage=''
                    label='Search'
                    value={searchBy}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => [setSearchBy(e.target.value), dispatch(searchBook(e.target.value))]}
                    type='text'
                />
                {getLastPurchase()}
            </div>
            <div className='Cards'>
                {mapBooksList()}
            </div>
            {/* <CustomDialog
                open={open}
                onClickCancel={() => setOpen(false)}
                onSubmitForm={() => [setOpen(false), dispatch(purchase(purchaseBook, userDetails.token))]}
                title={`Total Price: ${bookPrice}$`}
                selectSubmitButtonName={'OK'}
            /> */}
        </StyledDiv>
    );
}

export default UserPage;