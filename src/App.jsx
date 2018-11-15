import React from 'react';
import axios from 'axios';
import styled from 'styled-components';

// import components
import Home from './components/Home'
import Login from './components/Login'

// styled components
const AppContent = styled.div`
  height: 95vh;
  width: 95vw;
  background-color: whitesmoke;
`;

export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      isLoggedIn: true,
      user: {
        user_id: 1,
        first_name: 'nick',
        last_name: 'freeman',
        ratings: '[1,3,4,5,4,3,4,5,2]',
      },
      items: []
    }

    this.handleBorrowItem = this.handleBorrowItem.bind(this)
  }

  componentDidMount() {
    axios.get('http://localhost:8080/borrow').then( resp => {
      this.setState({items: resp.data})
    })
  }

  handleBorrowItem(postId) {
    console.log('hey')
    // axios.patch('http://localhost:8080/borrow', {
    //   post_id: postId,
    //   status: 'shared',
    //   user_id: this.state.userId
    // })
  }

  render() {
    return (
      <AppContent> 
        {
          this.state.isLoggedIn && this.state.items.length > 0
            ? <Home 
                items={this.state.items} 
                user={this.state.user}
                borrowItem={this.handleBorrowItem}/>
            : <Login/>
        }
      </AppContent>
    )
  }
}

