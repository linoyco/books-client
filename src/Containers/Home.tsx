import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IBook } from '../Api/ApiObject';

const Home: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList);

    return (
        <div>
            Hello
        </div>
    );
}

export default Home;