import React from 'react';
import axios from 'axios';
import styled from 'styled-components';
import { Router } from "@reach/router"



export default class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {}
  }

  componentDidMount() {
    axios.get('http://localhost:8080/borrow').then( resp => {
      console.log(resp.data)
    })
  }

  render() {
    return (<div>Cedrus Challenge</div>)
  }
}

