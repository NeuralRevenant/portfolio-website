import React, { useEffect } from 'react';
import PortfolioSPA from './components/PortfolioSPA/PortfolioSPA';
import './App.css';

function App() {
  useEffect(() => {
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
    document.body.style.height = 'auto';
    document.body.style.minHeight = '100vh';
    document.body.style.margin = '0';
    document.body.style.padding = '0';

    return () => {
      document.body.style.overflowY = "";
      document.body.style.overflowX = "";
    };
  }, []);

  return (
    <div className="App">
      <PortfolioSPA />
    </div>
  );
}

export default App;
