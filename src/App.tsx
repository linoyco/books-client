import React from 'react';
import Home from './Containers/Home';
import { createGlobalStyle } from 'styled-components';

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
    width: 92vw;
    height: 87vh;
  }

  .Header{
    display: flex;
    flex-direction: column;
    justify-content: center;
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

const App: React.FunctionComponent = () => (
  <div className='App'>
    <GlobalStyle />
    <div className='RootDiv'>
      <div className='Header'>
        <p className='Header-Text'>Welcome</p>
      </div>
      <Home />
    </div>
  </div>
);

export default App;