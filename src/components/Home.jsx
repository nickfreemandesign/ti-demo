import styled from 'styled-components';
import React from 'react';

import ItemList from './ItemList'

const HomeContainer = styled.div`
  width: 100%;
`;

const Title = styled.h1``

const Home = (props) => {

    return (
        <HomeContainer>
            <Title>{`Welcome to SilverShare, ${props.user.first_name} ${props.user.last_name}`}</Title>
            <h3> Borrow Some Items! </h3>
            <ItemList items={props.openItems} toggleShare={props.toggleShare} btn={'borrow'}/>
            <h3> Return Some Items! </h3>
            <ItemList items={props.myItems} toggleShare={props.toggleShare} btn={'return'}/>
        </HomeContainer>
    )
}

module.exports = Home