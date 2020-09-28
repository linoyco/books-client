import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { IBook } from '../Api/ApiObject';
import CustomCard from '../Components/CustomCard';
import CustomDialog from '../Components/CustomDialog';

const StyledDiv: any = styled.div`
    height: 63vh;
    overflow: auto;

    .Cards{
        margin: 1%;
    }
`;

const HomePage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = React.useState<boolean>(false);

    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList);

    const handleBuyClicked = () => {
        setOpen(true);
    }

    const mapBooksList = () => {
        if (booksList.length === 0) { return <div></div>; }
        return booksList.map(book =>
            <div className='Cards' key={book._id}>
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
            {mapBooksList()}
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