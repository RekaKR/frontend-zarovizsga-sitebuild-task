import React from 'react';
import ButtonM from './components/ButtonM/ButtonM';
import HMenu from './components/HMenu/HMenu';
import TextContainer from './components/TextContainer/TextContainer';
import './style/css/app.css'

function App() {
  return (
    <div className="app">
      <HMenu />

      <div className="left-side"></div>

      <div className="right-side">
        <TextContainer />
        <ButtonM />
      </div>
    </div>
  );
}

export default App;
