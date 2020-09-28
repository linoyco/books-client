import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';

import { IBook, IUser } from '../Api/ApiObject';
import CustomCard from '../Components/CustomCard';
import CustomDialog from '../Components/CustomDialog';
import CustomTextField from '../Components/CustomTextField';
import { purchase, searchBook } from '../State/Actions/App';
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

    React.useEffect(() => {
        mapBooksList();
    }, [booksList.length]);

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
                <CustomButton text='buy' onClick={() => [setOpen(true), setPurchaseBook(book._id ? book._id : ''), setBookPrice(book.price)]} />
            </div>
        );
    }

    // const lastPurchase = 

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
            </div>
            <div className='Cards'>
                {mapBooksList()}
            </div>
            <CustomDialog
                open={open}
                onClickCancel={() => setOpen(false)}
                onSubmitForm={() => [setOpen(false), dispatch(purchase(purchaseBook, userDetails.token))]}
                title={`Total Price: ${bookPrice}$`}
                selectSubmitButtonName={'OK'}
            />
        </StyledDiv>
    );
}

export default UserPage;