import styled from 'styled-components';
import React from 'react';

import Item from './Item'

const ListContainer = styled.div`
  width: 100%;
`;


const ItemList = (props) => {
    console.log(props.items)
    return (
        <ListContainer>
            {
                props.items.map((item, idx) => {
                    return <Item item={item} 
                                 toggleShare={props.toggleShare} 
                                 key={`item-${idx}`}
                                 btn={props.btn}/> 
                })
            }
        </ListContainer>
    )
}

module.exports = ItemList