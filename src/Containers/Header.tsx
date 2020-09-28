import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Dispatch } from 'redux';
import styled from 'styled-components';

import { IUser } from '../Api/ApiObject';
import CustomButton from '../Components/CustomButton';
import { logout } from '../State/Actions/App';

const StyledDiv: any = styled.div`
    display: flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;

    padding: 1%;
`;

const Header: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();
    const history = useHistory();

    const [logInOut, setLogInOut] = React.useState<string>('login');

    const userDetails: IUser = useSelector((state: any) => state.app.userDetails);

    React.useEffect(() => {
        userDetails.fullName ? setLogInOut('logout') : setLogInOut('login');
    }, [userDetails.fullName]);

    const handleLogInOutClicked = () => {
        if (logInOut === 'login') {
            history.push('/login');
        } else {
            dispatch(logout());
            history.push('/');
        }
    }

    return (
        <StyledDiv>
            <CustomButton text={logInOut} onClick={handleLogInOutClicked} />
        </StyledDiv>
    );
}

export default Header;