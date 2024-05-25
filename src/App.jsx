import { useState } from 'react'
import './App.css'
import Manga from './Fetching.jsx'
import Button from './button.jsx';


function App() {
  return (
    <div className="App">
      <Manga delay={1000} number={0}/>
      <Button />
      <Manga delay={1000} number={1}/>
      <Button />
      <Manga delay={1000} number={2}/>
      <Button />
    </div>
  );
}

export default App;
