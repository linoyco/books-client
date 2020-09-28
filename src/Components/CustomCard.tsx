import { CardMedia } from '@material-ui/core';
import * as React from 'react';
import styled from 'styled-components';
import CustomButton from './CustomButton';

const StyledDiv: any = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    .Card{
        display: flex;
        justify-content: space-between;
        align-items: center;

        border: 1px solid #14BDEB;
        border-radius: 5px;
        width: 90%;
        padding: 1%;
    }

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
    buttonText: string;
    onClick?: any;
}

const CustomCard: React.FunctionComponent<IProps> = ({ imageUrl, buttonText, onClick, bookName, authorName, price }) => (
    <StyledDiv>
        <div className='Card'>
            <div className='BooksDetails'>
                <div className='ImgAndBook'>
                    <CardMedia className='IMG' component='img' image={'https://image.freepik.com/free-photo/image-human-brain_99433-298.jpg' || imageUrl} />
                    <div className='BookText'>
                        <span>Book name: <span className='SubTitle'>{bookName}</span> </span>
                        <span>Author: <span className='SubTitle'>{authorName}</span></span>
                        <span>Price: <span className='SubTitle'>{price}$</span></span>
                    </div>
                </div>
            </div>
            <CustomButton text={buttonText} onClick={onClick} />
        </div>
    </StyledDiv>
);

export default CustomCard;