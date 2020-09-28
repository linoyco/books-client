import React, { useState } from 'react';
import { Dispatch } from 'redux';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { IBook } from '../Api/ApiObject';
import CustomCard from '../Components/CustomCard';

const HomePage: React.FunctionComponent = () => {
    const dispatch: Dispatch = useDispatch();

    const booksList: Array<IBook> = useSelector((state: any) => state.app.booksList);

    return (
        <div>
            <CustomCard  />
        </div>
    );
}

export default HomePage;