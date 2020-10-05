import * as React from 'react';
import { Button } from '@material-ui/core';

interface IProps {
    text: string;
    onClick?: any;
}

const CustomButton: React.FunctionComponent<IProps> = ({ text, onClick }) => (
    <Button
        variant='outlined'
        type='submit'
        onClick={onClick}>{text}</Button>
);

export default CustomButton;