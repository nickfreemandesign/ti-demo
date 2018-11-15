import styled from 'styled-components';
import React from 'react';

const ItemContainer = styled.div`
  width: 100%;
`;


const Item = (props) => {
console.log(props.item)
    return (
        <ItemContainer>
           {JSON.stringify(props.item)}
        </ItemContainer>
    )
}

module.exports = Item