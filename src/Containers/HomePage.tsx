import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { IBook } from '../Api/ApiObject';
import CustomCard from '../Components/CustomCard';
import CustomDialog from '../Components/CustomDialog';
import CustomTextField from '../Components/CustomTextField';
import { searchBook } from '../State/Actions/App';

const StyledDiv: any = styled.div`
    display: flex;
    flex-direction: column;

    height: 63vh;

    .Field{
        height: 20%;
    }

    .Cards{
        margin-top: 0px;
        margin-button: auto;
        height: 80%;
        overflow: auto;
    }
`;

const HomePage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = React.useState<boolean>(false);
    const [searchBy, setSearchBy] = React.useState<string>('');

    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList);

    const handleBuyClicked = () => {
        setOpen(true);
    }
    React.useEffect(() => {
        mapBooksList();
    }, [booksList.length]);

    const mapBooksList = () => {
        if (booksList.length === 0) { return <div></div>; }
        return booksList.map(book =>
            <div key={book._id}>
                <CustomCard
                    buttonText='buy'
                    bookName={book.bookName}
                    authorName={book.author.fullName}
                    imageUrl={book.imageURL}
                    price={book.price}
                    onClick={handleBuyClicked} />
            </div>
        );
    }

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
                onClickCancel={() => [setOpen(false)]}
                onSubmitForm={() => [setOpen(false), history.push('/login')]}
                title='Please Log-in, Before you buy a book..'
                selectSubmitButtonName={'OK'}
            />
        </StyledDiv>
    );
}

export default HomePage;