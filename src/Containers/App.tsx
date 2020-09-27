import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';
import { useHistory } from 'react-router-dom';
import { Button } from '@material-ui/core';

import AppRoutes from './AppRoutes';
import { fetchBooks } from '../State/Actions/App';
import { IUser } from '../Api/ApiObject';

const GlobalStyle = createGlobalStyle`
  html{
    height: 100%;
    font-family: arial;
    background-size: cover;
    color: #59474F;
  }

  body {
    font-weight: bold;
    padding: 0;
    margin:0;
    height: 100%;
  }

  .App{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    height: 100vh;
  }

  .RootDiv{
    background-color: white;
    border: 5px solid #14BDEB;
    border-radius: 5px;

    width: 92vw;
    height: 87vh;
  }

  .Header{
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 5vh;
    background-color: #14BDEB;

    padding:1.5%;
  }
 
  .Header-Text{
    font-size: 5vw;
    font-weigh: bold;
    text-shadow: 3px 3px 4px white; 
  }

  .Log{
    background-color: white;
  }
`;

const App: React.FunctionComponent = () => {
  const dispatch: Dispatch = useDispatch();

  const [logInOut, setLogInOut] = React.useState<string>('');

  const userDetails: IUser = useSelector((state: any) => state.app.userDetails);
  const history = useHistory();

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  React.useEffect(() => {
    dispatch(fetchBooks());
    userDetails.fullName ? setLogInOut('LogOut') : setLogInOut('LogIn');
  }, [userDetails.fullName]);

  const handleLogInOut = (clicked: string) => {

    // if (clicked === 'LogOut') {
    //   history.push('/');
    //   //dispatch logout
    // } else {
    //   history.push('/login');
    // }
  }

  return (
    <div className='App'>
      <GlobalStyle />
      <div className='RootDiv'>
        <div className='Header'>
          <p className='Header-Text'>Welcome</p>
          <Button className='Log' variant='outlined' onClick={() => handleLogInOut(logInOut)}>{logInOut}</Button>
        </div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;