import * as React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import CustomButton from './CustomButton';

interface IProps {
    open: boolean;
    title: string;
    onSubmitForm: any;
    selectSubmitButtonName: string;
    onClickCancel?: any;
}

const CustomDialog: React.FunctionComponent<IProps> = ({ open, title, onSubmitForm, selectSubmitButtonName, onClickCancel }) => (
    <Dialog open={open}>
        <DialogTitle>{title}</DialogTitle>
        <DialogContent>
            <CustomButton text={selectSubmitButtonName} onClick={onSubmitForm} />
            <CustomButton text='Cancel' onClick={onClickCancel} />
        </DialogContent>
    </Dialog>
);

export default CustomDialog;