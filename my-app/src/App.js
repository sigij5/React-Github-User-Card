import React from 'react';
import logo from './logo.svg';
import './App.css';
import axios from 'axios'
import User from './components/User'

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      userInfo: {},
      following: []
    }
    console.log('constructor is running')
  }

  componentDidMount() {
    console.log('cdm is running')
    axios.get('https://api.github.com/users/sigij5')
    .then(res => {
      console.log(res.data)
      this.setState({
        userInfo: res.data
      })
    })
  }

  fetchFollowing = e => {
    e.preventDefault()
    axios.get(`https://api.github.com/users/${this.state.userInfo.login}/following`)
    .then(res => {
        this.setState({
            following: res.data
        })
    })
  }

  render() {
    console.log('rendering')
  return (
    <div className="App">
      <header className="App-header">
        <h1>Github User Cards</h1>
      </header>

      <User info={this.state.userInfo} />

      <div className='following'>
      <h3 onClick={this.fetchFollowing}>Following</h3>

      {this.state.following.map(user => 
        <User info={user} />
        )}
      </div>

      

      {/* {this.state.users.map(user => <div>{user.username}</div>)} */}
    </div>
  );
  }
} 

export default App;
