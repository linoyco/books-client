import * as React from 'react';
import styled from 'styled-components';
import { TextField } from '@material-ui/core';

const StyledDiv: any = styled.div`
    margin-bottom:15%;
`;

const CustomTextField: React.FunctionComponent = () => (
    <StyledDiv>
        <TextField label='text field' />
    </StyledDiv>
);

export default CustomTextField;