import React from 'react';
import LandingPage from './components/views/LandingPage/index'
import LandingManage from './components/views/LandingPage/LandingManage/index'
import LandingPhone from './components/views/LandingPage/LandingPhone/index'

function App() {
  return (
    <div className="App">
      <LandingPage />
      <LandingManage />
      <LandingPhone />
    </div>
  );
}

export default App;
