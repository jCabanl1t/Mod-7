import { useState } from 'react'
import './App.css'
import Manga from './Fetching.jsx'


function App() {
  return (
    <div className="App">
      <Manga delay={1000} number={0}/>
      <Manga delay={1000} number={1}/>
      <Manga delay={1000} number={2}/>
    </div>
  );
}

export default App;
