import styled from 'styled-components';
import React from 'react';

import ItemList from './ItemList'

const HomeContainer = styled.div`
  height: 1000px;
  width: 100%;
`;


const Home = (props) => {

    return (
        <HomeContainer>
            <ItemList items={props.items}/>
        </HomeContainer>
    )
}

module.exports = Home