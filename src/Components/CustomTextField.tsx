import * as React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledDiv: any = styled.div`
    margin-bottom:15%;
    .Error{
        color: red;
        font-size: 10px;
    }
`;

interface IProps {
    label: string;
    value: string;
    type: string;
    onChange: any;
    errorMessage: string;
}

const CustomTextField: React.FunctionComponent<IProps> = ({ label, value, type, onChange, errorMessage }) => (
    <StyledDiv>
        <TextField
            label={label}
            value={value}
            type={type}
            onChange={onChange}
        />
        <p className='Error'>{errorMessage}</p>
    </StyledDiv>
);

export default CustomTextField;