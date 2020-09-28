import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import AppRoutes from './AppRoutes';
import { fetchBooks } from '../State/Actions/App';
import { IUser } from '../Api/ApiObject';
import { Avatar } from '@material-ui/core';

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

  .UserDetails{
    display: flex;
    align-items: center;

  }
`;

const App: React.FunctionComponent = () => {
  const dispatch: Dispatch = useDispatch();

  const userDetails: IUser = useSelector((state: any) => state.app.userDetails);

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const userIMG = userDetails.fullName ? <Avatar /> : null;

  return (
    <div className='App'>
      <GlobalStyle />
      <div className='RootDiv'>
        <div className='Header'>
          <p className='Header-Text'>Welcome</p>
          <div className='UserDetails'>{userIMG}<p>{userDetails.fullName}</p></div>
        </div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;