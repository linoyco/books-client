import React from 'react';
import { Dispatch } from 'redux';
import { useDispatch } from 'react-redux';
import { createGlobalStyle } from 'styled-components';

import AppRoutes from './AppRoutes';
import { fetchBooks, logout } from '../State/Actions/App';

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
`;

const App: React.FunctionComponent = () => {
  const dispatch: Dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  return (
    <div className='App'>
      <GlobalStyle />
      <div className='RootDiv'>
        <div className='Header'>
          <p className='Header-Text'>Welcome</p>
        </div>
        <AppRoutes />
      </div>
    </div>
  );
}

export default App;