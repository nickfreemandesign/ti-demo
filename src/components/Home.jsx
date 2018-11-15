import styled from 'styled-components';
import React from 'react';

import ItemList from './ItemList'

const HomeContainer = styled.div`
  height: 1000px;
  width: 100%;
`;

const Title = styled.h1``

const Home = (props) => {

    return (
        <HomeContainer>
            <Title>{`Welcome to SilverShare, ${props.user.first_name} ${props.user.last_name}`}</Title>
            <ItemList items={props.items} borrowItem={props.borrowItem}/>
        </HomeContainer>
    )
}

module.exports = Home