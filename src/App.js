import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import Modedisplay from './display';





function App() {

const [mode,setMode]=useState("");

  return (
    <div className={`container ${mode}`}>
      <h1>How are you feeling today  :|   ?</h1>
      <div className="buttons">
        <button onClick={()=>setMode("happy")}>Happy😀</button>
        <button onClick={()=>setMode("sad")}>Sad😒</button>
        <button onClick={()=>setMode("good")}>Good😌</button>
        <button onClick={()=>setMode("anger")}>Anger😡</button>
      </div>



      <Modedisplay mode={mode}/>
    </div>
  );
}

export default App;
