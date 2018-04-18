import React, { Component } from 'react';
import './App.css';

class LambdaDemo extends Component {
  constructor(props) {
    super(props);
    this.state = {loading: false, msg: null};
  }

  handleClick = (e) => {
    e.preventDefault();

    this.setState({loading: true});
    fetch('/.netlify/functions/hello')
      .then(response => response.json())
      .then(json => this.setState({loading: false, msg: json.msg}));
  }

  render() {
    const {loading, msg} = this.state;

    return <div>
      <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Test connection'}</button><br/>
      <p>{msg}</p>
      <p>{ msg === "Hello, World!" ? 'successfully connected' : 'error trying to connect'}</p>
    </div>
  }
}

// class AnotherCall extends Component {
//   constructor(props) {
//     super(props);
//     this.state = {loading: false, msg: null};
//   }
//
//   handleClick = (e) => {
//     e.preventDefault();
//
//     this.setState({loading: true});
//     fetch('/.netlify/functions/hello')
//       .then(response => response.json())
//       .then(json => this.setState({loading: false, msg: json.msg}));
//   }
//
//   render() {
//     const {loading, msg} = this.state;
//
//     return <p>
//       <button onClick={this.handleClick}>{loading ? 'Loading...' : 'Call Lambda'}</button><br/>
//       <span>{msg}</span>
//     </p>
//   }
// }

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Welcome, your Ciitizen Script has been successfully deployed.
          Test connectivity below.
        </p>
        <LambdaDemo/>
      </div>
    );
  }
}

export default App;
