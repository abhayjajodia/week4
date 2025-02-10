import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Header from './Header';
import Footer from './Footer';
import Main1 from './Main1';
import './styles.css';

function App() {
  return (
    <div>
      <Header />
      <Main1 />
      <Footer />
    </div>
  );
}

export default App;