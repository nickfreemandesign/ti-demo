import styled from 'styled-components';
import React from 'react';

const ItemContainer = styled.div`
    width: 100%;
    display: grid;
    grid-template-rows: 1fr 1fr;
    grid-template-columns: 3fr 1fr;
    margin-bottom: 30px;
    border: solid 1px grey;
    background: white;
`;

const ItemTitle = styled.div`
    grid-area: 1/1/2/2;
` 
const ItemDesc = styled.div`
    grid-area: 2/1/3/2;
` 
const BorrowBtn = styled.button `
    height: 30px;
    width: 50px;
    background-color: dodgerblue;
    grid-area: 1/2/3/3;
`

const Item = (props) => {
    return (
        <ItemContainer>
           <ItemTitle>{`Item: ${props.item.item}`}</ItemTitle>
           <ItemDesc>{`Description: ${props.item.description}`}</ItemDesc>
           <BorrowBtn onClick={props.borrowItem}>borrow</BorrowBtn>
        </ItemContainer>
    )
}

module.exports = Item