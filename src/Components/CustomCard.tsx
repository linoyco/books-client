import { CardMedia } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';

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
`;

interface IProps {
    bookName?: string;
    authorName?: string;
    imageUrl?: string;
    price?: string;
    publisher?: string;
    buttonText: string;
}

const CustomCard: React.FunctionComponent<IProps> = ({ imageUrl, bookName, authorName, price, publisher }) => (
    <StyledDiv>
        <div className='ImgAndBook'>
            <CardMedia className='IMG' component='img' image={imageUrl} />
            <div className='BookText'>
                <span>Book name: <span className='SubTitle'>{bookName}</span> </span>
                <span>Author: <span className='SubTitle'>{authorName}</span></span>
                <span>Price: <span className='SubTitle'>{price}$</span></span>
                <span>Publisher: <span className='SubTitle'>{publisher}</span></span>
            </div>
        </div>
    </StyledDiv>
);

export default CustomCard;