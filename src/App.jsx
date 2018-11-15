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
      openItems: [],
      myItems: []
    }

    this.handleToggleShare = this.handleToggleShare.bind(this)
  }

  componentDidMount() {

    const userId = this.state.user.user_id

    axios.get('http://localhost:8080/borrow').then( resp => {
      this.setState({openItems: resp.data})
    })

    axios.get(`http://localhost:8080/borrow/${userId}`).then( resp => {
      this.setState({myItems: resp.data})
    })
  }

  handleToggleShare(item) {
    console.log(item)
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
          this.state.isLoggedIn
            ? <Home 
                myItems={this.state.myItems} 
                openItems={this.state.openItems} 
                user={this.state.user}
                toggleShare={this.handleToggleShare}/>
            : <Login/>
        }
      </AppContent>
    )
  }
}

