import React from 'react';
import Header from './components/Header';
import SideMenu from './components/SideMenu';
import Main from './components/Main';
function App() {
  return (
    <div className="App">
      <SideMenu />
      <div className="right-main">
        <Header />
        <Main/>
      </div>
    </div>
  );
}

export default App;
