import React from 'react';
import Header from './components/Header';
import Home from './pages/Home';
import './styles/global.css';

function App() {
  return (
    <>
      <Header />
      <main>
        <Home />
      </main>
    </>
  );
}

export default App;
