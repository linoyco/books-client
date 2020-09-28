import { Button } from '@material-ui/core';
import * as React from 'react';

interface IProps {
    text: string;
    onClick?: any;
    typeSubmit?: boolean;
}

const CustomButton: React.FunctionComponent<IProps> = ({ text, onClick, typeSubmit }) => (
    <Button
        variant='outlined'
        type={typeSubmit ? 'button' : 'submit'}
        onClick={onClick}>{text}</Button>
);

export default CustomButton;