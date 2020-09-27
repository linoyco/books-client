import { Button } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

import CustomTextField from '../Components/CustomTextField';

const LoginDiv: any = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 78vh;

    .Fields{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;

        border: 1px solid #14BDEB;
        border-radius: 5px;
        padding: 5%;
    }

`;

const LoginPage: React.FunctionComponent = () => {
    return (
        <LoginDiv>
            <h3>Please Log-in</h3>
            <div className='Fields'>
                <CustomTextField />
                <CustomTextField />
                <Button variant='outlined'>Submit</Button>
            </div>
        </LoginDiv>
    )
}

export default LoginPage;