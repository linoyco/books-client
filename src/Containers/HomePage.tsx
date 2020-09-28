import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import { IBook } from '../Api/ApiObject';
import CustomCard from '../Components/CustomCard';
import CustomDialog from '../Components/CustomDialog';
import CustomTextField from '../Components/CustomTextField';
import { searchBook } from '../State/Actions/App';
import CustomButton from '../Components/CustomButton';

export const StyledDiv: any = styled.div`
    display: flex;
    flex-direction: column;

    height: 63vh;

    .Field{
        height: 20%;
        display: flex;
        justify-content: space-between;
        font-weight: normal;
        margin: 1%;
    }

    .Cards{
        margin-top: 0px;
        margin-button: auto;
        height: 80%;
        overflow: auto;
    }

    .Card{
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid #14BDEB;
        border-radius: 5px;
        width: 90%;
        padding: 1%;
        margin:1%;
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
            <div className='Card' key={book._id}>
                <CustomCard
                    buttonText='buy'
                    bookName={book.bookName}
                    authorName={book.author.fullName}
                    imageUrl={book.imageURL}
                    publisher={book.publisher.publisherName}
                    starNumber={book.stars}
                    price={book.price} />
                <CustomButton text='buy' onClick={() => handleBuyClicked()} />
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