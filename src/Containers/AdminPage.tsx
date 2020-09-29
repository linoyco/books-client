import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { StyledDiv } from './HomePage';
import { IBook, IUser } from '../Api/ApiObject';
import CustomCard from '../Components/CustomCard';
import CustomTextField from '../Components/CustomTextField';
import { addBook, bookToEdit, lastPurchase, searchBook, sendUpdate } from '../State/Actions/App';
import CustomButton from '../Components/CustomButton';
import CustomDialog from '../Components/CustomDialog';

const AdminPage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const [localBookName, setLocalBookName] = React.useState<string>('');
    const [localAuthorName, setLocalAuthorName] = React.useState<string>('');
    const [localPublisherName, setLocalPublisherName] = React.useState<string>('');
    const [localPrice, setLocalPrice] = React.useState<string>('');
    const [localImageUrl, setLocalImageUrl] = React.useState<string>('');

    const [openEdit, setOpenEdit] = React.useState<boolean>(false);
    const [openAdd, setOpenAdd] = React.useState<boolean>(false);

    const [searchBy, setSearchBy] = React.useState<string>('');

    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList);
    const userDetails: IUser = useSelector((state: any) => state.app.userDetails);
    const oldBook: IBook = useSelector((state: any) => state.app.bookToEdit);

    // React.useEffect(() => {
    //     if (userDetails.permission !== 'Admin') {
    //         history.push('/');
    //     }
    // }, [userDetails.permission]);

    React.useEffect(() => {
        mapBooksList();
    }, [booksList]);

    React.useEffect(() => {
        setLocalBookName(oldBook.bookName);
        setLocalAuthorName(oldBook.author.fullName);
        setLocalImageUrl(oldBook.imageURL);
        setLocalPrice(oldBook.price);
        setLocalPublisherName(oldBook.publisher.publisherName);
    }, [oldBook]);

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
                <CustomButton text='edit' onClick={() => [dispatch(bookToEdit(book)), setOpenEdit(true)]} />
            </div>
        );
    }

    const onSubmitAdd = async () => {
        const newBook: IBook = {
            bookName: localBookName,
            author: { fullName: localAuthorName, age: '40' },
            imageURL: localImageUrl,
            price: localPrice,
            publisher: { publisherName: localPublisherName, year: '2009' },
            stars: 4
        }
        await dispatch(addBook(newBook, userDetails.token));
        setOpenAdd(false);
    }

    const onSubmitEdit = async () => {
        const newBook: IBook = {
            bookName: localBookName,
            author: { fullName: localAuthorName, age: oldBook.author.age },
            imageURL: localImageUrl,
            price: localPrice,
            publisher: { publisherName: localPublisherName, year: oldBook.publisher.year },
            stars: oldBook.stars
        }
        await dispatch(sendUpdate(newBook, oldBook._id ? oldBook._id : '', userDetails.token));
        setOpenEdit(false);
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
                <CustomButton text='new book' onClick={() => setOpenAdd(true)} />
            </div>
            <div className='Cards'>
                {mapBooksList()}
            </div>
            <CustomDialog
                open={openAdd}
                onClickCancel={() => setOpenAdd(false)}
                onSubmitForm={() => onSubmitAdd()}
                title='Create new book'
                selectSubmitButtonName={'Save'}
                mood='add'

                bookName={localBookName}
                authorName={localAuthorName}
                publisherName={localPublisherName}
                price={localPrice}
                imageURL={localImageUrl}

                onChangeBookName={(e: React.ChangeEvent<HTMLInputElement>) => setLocalBookName(e.target.value)}
                onChangeAuthorName={(e: React.ChangeEvent<HTMLInputElement>) => setLocalAuthorName(e.target.value)}
                onChangePublisherName={(e: React.ChangeEvent<HTMLInputElement>) => setLocalPublisherName(e.target.value)}
                onChangePrice={(e: React.ChangeEvent<HTMLInputElement>) => setLocalPrice(e.target.value)}
                onChangeImageURL={(e: React.ChangeEvent<HTMLInputElement>) => setLocalImageUrl(e.target.value)}
            />

            <CustomDialog
                open={openEdit}
                onClickCancel={() => setOpenEdit(false)}
                onSubmitForm={() => onSubmitEdit()}
                title='Edit'
                selectSubmitButtonName={'Update'}
                mood='edit'

                bookName={localBookName}
                authorName={localAuthorName}
                publisherName={localPublisherName}
                price={localPrice}
                imageURL={localImageUrl}

                onChangeBookName={(e: React.ChangeEvent<HTMLInputElement>) => setLocalBookName(e.target.value)}
                onChangeAuthorName={(e: React.ChangeEvent<HTMLInputElement>) => setLocalAuthorName(e.target.value)}
                onChangePublisherName={(e: React.ChangeEvent<HTMLInputElement>) => setLocalPublisherName(e.target.value)}
                onChangePrice={(e: React.ChangeEvent<HTMLInputElement>) => setLocalPrice(e.target.value)}
                onChangeImageURL={(e: React.ChangeEvent<HTMLInputElement>) => setLocalImageUrl(e.target.value)}
            />
        </StyledDiv>
    );
}

export default AdminPage;