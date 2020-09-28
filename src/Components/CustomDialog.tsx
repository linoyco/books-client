import * as React from 'react';
import styled from 'styled-components';
import { Dialog, DialogContent, DialogTitle } from '@material-ui/core';
import CustomButton from './CustomButton';

const StyledDiv: any = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
	align-items: flex-end;
`;

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
            <form onSubmit={onSubmitForm}>
                <StyledDiv>

                </StyledDiv>
                <CustomButton text={selectSubmitButtonName} />
            </form>
            <CustomButton text='Cancel' onClick={onClickCancel} />
        </DialogContent>
    </Dialog>
);

export default CustomDialog;