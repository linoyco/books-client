import * as React from 'react';
import styled from 'styled-components';
import { Box, CardMedia, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';

const StyledDiv: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .ImgAndBook{
        display: flex;
        align-items: stretch;
        width: 60vw;
    }

    .IMG{
        width: 15vw;
        max-width: 100px;
    }

    .BookText{
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        margin-left: 3%;
    }

    .SubTitle{
        font-weight: normal;
    }

    .Stars{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

interface IProps {
    bookName?: string;
    authorName?: string;
    imageUrl?: string;
    price?: string;
    publisher?: string;
    buttonText: string;
    starNumber?: number;
}

const CustomCard: React.FunctionComponent<IProps> = ({ imageUrl, bookName, authorName, price, publisher, starNumber }) => (
    <StyledDiv>
        <div className='ImgAndBook'>
            <CardMedia className='IMG' component='img' image={imageUrl} />
            <div className='BookText'>
                <span>Book name: <span className='SubTitle'>{bookName}</span> </span>
                <span>Author: <span className='SubTitle'>{authorName}</span></span>
                <span>Price: <span className='SubTitle'>{price}$</span></span>
                <span>Publisher: <span className='SubTitle'>{publisher}</span></span>
            </div>
            <div className='Stars'>
                <Rating name="read-only" value={starNumber} readOnly />
            </div>
        </div>
    </StyledDiv>
);

export default CustomCard;