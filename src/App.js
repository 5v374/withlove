import React from 'react';
import './App.css';
import About from './components/About';
import Education from './components/Education';
import Work from './components/Work';
import Contacts from './components/Contacts';
import Film from './components/Film'; 
import profileImage from './assets/profile.jpg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={profileImage} alt="Profile" className="profile-image" />
        <h1>Withlove</h1>
      </header>
      <main>
        <About />
        <Education />
        <Film />
        <Work />
        <Contacts />
      </main>
    </div>
  );
}
function applyTheme() {
  const isDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (isDarkMode) {
    document.documentElement.setAttribute('data-theme', 'dark');
  } else {
    document.documentElement.setAttribute('data-theme', 'light');
  }
}

applyTheme();

window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', applyTheme);

export default App;

