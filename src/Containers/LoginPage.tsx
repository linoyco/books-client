import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { Button } from '@material-ui/core';
import styled from 'styled-components';

import CustomTextField from '../Components/CustomTextField';
import { sendLoginDetails } from '../State/Actions/App';
import { useHistory } from 'react-router-dom';
import { IUser } from '../Api/ApiObject';

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
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const userDetails: IUser = useSelector((state: any) => state.app.userDetails);

    const [name, setName] = React.useState<string>('');
    const [password, setPassword] = React.useState<string>('');

    React.useEffect(() => {
        if (userDetails.permission === 'Admin') {
            history.push('/admin');
        } else if (userDetails.permission === 'Customer') {
            history.push('/user');
        } else {
            console.log('will send error message');
        }
    }, [userDetails]);

    const handleLogin: React.FormEventHandler<HTMLFormElement> = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        dispatch(sendLoginDetails(name, password));
    }

    return (
        <LoginDiv>
            <h3>Please Log-in</h3>
            <form className='Fields' onSubmit={handleLogin}>
                <CustomTextField
                    label='Full-Name'
                    type='text'
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                    errorMessage=''
                />
                <CustomTextField
                    label='Password'
                    type='password'
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    errorMessage=''
                />
                <Button type='submit' variant='outlined'>Submit</Button>
            </form>
        </LoginDiv>
    )
}

export default LoginPage;