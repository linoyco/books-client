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
}

const CustomDialog: React.FunctionComponent<IProps> = ({ mood, open, title, onSubmitForm, selectSubmitButtonName, onClickCancel }) => {

    const checkMood = () => {
        if (mood === 'add') {
            console.log(mood);
            return <CustomTextField
                label=''
                value={''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
            />
        } else if (mood === 'edit') {
            return <CustomTextField
                label=''
                value={''}
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => console.log(e.target.value)}
            />
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