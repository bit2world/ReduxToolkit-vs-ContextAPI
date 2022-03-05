import React, { useContext, useEffect } from 'react';
import './App.css';
import ContextAPI from './components/ContextAPI';
import ReduxComponent from './components/ReduxComponent';
import StateComponent from './components/StateComponent';
import { AppContext } from './context/AppProvider';

function App() {
  const { age } = useContext(AppContext);
  useEffect(() => {
    console.log("Age in Parent : ", age);
  })
  return (
    <div className="App">
      <header>
        <h1>Context vs Redux</h1>
        <p>Open browser dev tool(F12)</p>
      </header>
      <ContextAPI />
      <ReduxComponent />
      <StateComponent />
    </div>
  );
}

export default App;
