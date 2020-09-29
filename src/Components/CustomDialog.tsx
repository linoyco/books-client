import * as React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import CustomButton from './CustomButton';
import CustomTextField from './CustomTextField';

interface IProps {
    open: boolean;
    title: string;
    onSubmitForm: any;
    selectSubmitButtonName: string;
    onClickCancel?: any;
    mood?: string;

    bookName?: string;
    authorName?: string;
    publisherName?: string;
    price?: string;
    imageURL?: string;

    onChangeBookName?: any;
    onChangeAuthorName?: any;
    onChangePublisherName?: any;
    onChangePrice?: any;
    onChangeImageURL?: any;
}

const CustomDialog: React.FunctionComponent<IProps> = ({ onChangeImageURL, onChangePrice, onChangePublisherName, onChangeAuthorName, onChangeBookName, imageURL, price, publisherName, authorName, bookName, mood, open, title, onSubmitForm, selectSubmitButtonName, onClickCancel }) => {
    const checkMood = () => {
        if (mood === 'add') {
            return <div>
                <CustomTextField
                    label='Book name'
                    value={bookName || ''}
                    onChange={onChangeBookName}
                />
                <CustomTextField
                    label='Author Name'
                    value={authorName || ''}
                    onChange={onChangeAuthorName}
                />
                <CustomTextField
                    label='Publisher name'
                    value={publisherName || ''}
                    onChange={onChangePublisherName}
                />
                <CustomTextField
                    label='Price'
                    value={price || ''}
                    onChange={onChangePrice}
                />
                <CustomTextField
                    label='Image URL'
                    value={imageURL || ''}
                    onChange={onChangeImageURL}
                />
            </div>
        } else if (mood === 'edit') {
            return <div>
                <CustomTextField
                    label='Book name'
                    value={bookName || ''}
                    onChange={onChangeBookName}
                />
                <CustomTextField
                    label='Author Name'
                    value={authorName || ''}
                    onChange={onChangeAuthorName}
                />
                <CustomTextField
                    label='Publisher name'
                    value={publisherName || ''}
                    onChange={onChangePublisherName}
                />
                <CustomTextField
                    label='Price'
                    value={price || ''}
                    onChange={onChangePrice}
                />
                <CustomTextField
                    label='Image URL'
                    value={imageURL || ''}
                    onChange={onChangeImageURL}
                />
            </div>
        } else return;
    }

    return (
        <Dialog open={open}>
            <DialogTitle>{title}</DialogTitle>
            <DialogContent>
                {checkMood()}
                <CustomButton text={selectSubmitButtonName} onClick={onSubmitForm} />
                <CustomButton text='Cancel' onClick={onClickCancel} />
            </DialogContent>
        </Dialog>
    );
}

export default CustomDialog;