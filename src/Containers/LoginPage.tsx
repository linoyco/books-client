import * as React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

import CustomTextField from '../Components/CustomTextField';
import { sendLoginDetails } from '../State/Actions/App';
import { IUser } from '../Api/ApiObject';
import CustomButton from '../Components/CustomButton';

const LoginDiv: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    height: 67vh;
    

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
        } else if (userDetails.permission === 'Customer' && userDetails.fullName) {
            history.push('/user');
        } else {
            history.push('/login');
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
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
                />
                <CustomTextField
                    label='Password'
                    type='password'
                    value={password}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                />
                <CustomButton text='Submit' />
            </form>
        </LoginDiv>
    );
}

export default LoginPage;