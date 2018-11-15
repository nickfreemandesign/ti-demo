import styled from 'styled-components';
import React from 'react';

import Item from './Item'

const ListContainer = styled.div`
  height: 1000px;
  width: 100%;
`;


const ItemList = (props) => {
    console.log(props.items)
    return (
        <ListContainer>
            {
                props.items.map((item, idx) => <Item item={item} borrowItem={props.borrowItem} key={`item-${idx}`}/> )
            }
        </ListContainer>
    )
}

module.exports = ItemList