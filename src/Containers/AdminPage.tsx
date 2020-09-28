import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { StyledDiv } from './HomePage';
import { IBook, IUser } from '../Api/ApiObject';
import CustomCard from '../Components/CustomCard';
import CustomTextField from '../Components/CustomTextField';
import { searchBook } from '../State/Actions/App';
import CustomButton from '../Components/CustomButton';
import CustomDialog from '../Components/CustomDialog';

const AdminPage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const [open, setOpen] = React.useState<boolean>(false);

    const [searchBy, setSearchBy] = React.useState<string>('');

    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList);
    const userDetails: IUser = useSelector((state: any) => state.app.userDetails);

    // React.useEffect(() => {
    //     if (userDetails.permission !== 'Admin') {
    //         history.push('/');
    //     }
    // }, [userDetails.permission]);

    React.useEffect(() => {
        mapBooksList();
    }, [booksList]);

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
                <CustomButton text='edit' onClick={() => console.log(book.stars)} />
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
                <CustomButton text='new book' onClick={() => setOpen(true)} />
            </div>
            <div className='Cards'>
                {mapBooksList()}
            </div>
            <CustomDialog
                open={open}
                onClickCancel={() => [setOpen(false)]}
                onSubmitForm={() => [setOpen(false)]}
                title='Create new book'
                selectSubmitButtonName={'OK'}
            />
        </StyledDiv>
    );
}

export default AdminPage;