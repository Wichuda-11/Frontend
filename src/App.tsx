import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from "antd";

function App() {
  return (
    <div className="App-header">
      <header className="App">
        <div>
          <Button className="rotate-button">
            <div className="triangle"></div>
          </Button>
          <Button className="rotate-button2">
            <div className="triangle"></div>
          </Button>
          <Button className="rotate-button3">
            <div className="triangle"></div>
          </Button>
          <Button className="rotate-button4">
            <div className="triangle"></div>
          </Button>
        </div>
      </header>
      <header>
        <Button className="rectangle">
          <div></div>
        </Button>
        <Button className="circle">
          <div></div>
        </Button>
        <Button className="circle2">
          <div></div>
        </Button>

        <br></br>
        <Button className="rectangle2"></Button>
        <Button className="rectangle3"></Button>
        <Button className="rectangle4"></Button>
      </header>
    </div>
  );
}

export default App;
