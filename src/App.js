import React from 'react';
import logo from './logo.svg';
import './App.css';
import HomeContainer from './containers/HomeContainer'
import HeaderContainer from './containers/HeaderContainer'
import LanguageSelect from './LanguaugeSelect';
function App() {
  return (
    <div className="App">

      <HeaderContainer />
   <LanguageSelect/>
      <HomeContainer />
    </div>
  );
}

export default App;
