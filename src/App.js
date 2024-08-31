import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import WelcomeMessage from './components/WelcomeMessage';
import './App.css';

function App() {
  const [selectedOption, setSelectedOption] = useState('Dashboard');

  const handleSidebarClick = (option) => {
    setSelectedOption(option);
  };

  return (
    <div className="App">
      <Sidebar onOptionClick={handleSidebarClick} />
      {selectedOption === 'Dashboard' ? <Dashboard /> : <WelcomeMessage />}
    </div>
  );
}

export default App;
