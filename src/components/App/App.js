import React from 'react';
import './App.css';
import ColorPicker from '../ColorPicker/ColorPicker';
import PixelMatrix from '../PixelMatrix/ControlButtons'
import ControlButtons from '../ControlButtons';

function App() {
  return (
    <div className="App wrapper">
      <PixelMatrix className="matrix"></PixelMatrix>
      <div>
        <ColorPicker className="colorPicker"></ColorPicker>
        <ControlButtons></ControlButtons>
      </div>
    </div>
  );
}

export default App;
