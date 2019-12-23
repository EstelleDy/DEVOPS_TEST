import React from 'react';
import logo from './logo.svg';
import './App.css';
import Calculator from './Calculator.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    
  }
 
  render(){
  return (
    <div className="App">
      <div>
        <Calculator/>
      </div>
    </div>
  );
}
}

export default App;
