import './App.css';
import MainPage from './components/MainPage';
import BottomNavBar from './components/BottomNavBar';
import React from 'react';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MainPage />
        {/* <BottomNavBar /> */}
      </header>
    </div>
  );
}

export default App;
