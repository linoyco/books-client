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
        padding: 2%;
    }
`;

interface IProps {
    bookName?: string;
    buttonText?: string;
    onClick?: any;
}

const CustomCard: React.FunctionComponent<IProps> = ({ buttonText, onClick, bookName }) => (
    <StyledDiv>
        <div className='Card'>
            <div className='BooksDetails'>
gg
            </div>
            <CustomButton text='buy'/>
        </div>
    </StyledDiv>
);

export default CustomCard;