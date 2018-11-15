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
      items: []
    }
  }

  componentWillMount () {
    
  }

  componentDidMount() {
    axios.get('http://localhost:8080/borrow').then( resp => {
      console.log(resp.data)
      this.setState({items: resp.data})
    })
  }

  render() {
    return (
      <AppContent> 
        {
          this.state.isLoggedIn && this.state.items.length > 0
            ? <Home items={this.state.items}/>
            : <Login/>
        }
      </AppContent>
    )
  }
}

