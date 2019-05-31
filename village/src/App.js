import React, { Component } from 'react';

import './App.css';
import SmurfForm from './components/SmurfForm';
import Smurfs from './components/Smurfs';
import Axios from 'axios';
import { Route ,Link} from 'react-router-dom';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      smurfs: [],
    };
  }
  // add any needed code to ensure that the smurfs collection exists on state and it has data coming from the server
  // Notice what your map function is looping over and returning inside of Smurfs.
  componentDidMount(){
    Axios 
    .get('http://localhost:3333/smurfs')
    .then(response => this.setState({ smurfs: response.data }))
    .catch(err => console.log(err));

  }
  // You'll need to make sure you have the right properties on state and pass them down to props.
  render() {
    return (
      <div className="App">
        {/* <SmurfForm /> */}
        <Smurfs smurfs={this.state.smurfs} />
        <Route exact path="/" component={ SmurfForm }/>
        <Link to='/'>smurfs form</Link>
        <Link to='/SmurfForm'>  smurfs </Link>



      </div>
    );
  }
}

export default App;
