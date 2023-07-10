import './App.css'
import Navbar from './components/Navbar';
import Textforms from './components/Textforms';
// import About from './components/About';
import React, {useState} from 'react';
// import {
//   BrowserRouter,
//   Routes,
//   Route,
// } from "react-router-dom";

function App() {
  const [darkMode, setDarkMode]= useState('light');  //Whether dark mode is enabled or not.
  const[text,setText]=useState('Dark');


  const toggleMode=()=>
  {
    if(darkMode=='light')
    {
      setDarkMode('dark');
      setText('Light');
      document.body.style.backgroundColor='#042743';
      document.body.style.color='white';
    }
    else
    {
      setDarkMode('light');
      setText('Dark');
      document.body.style.backgroundColor='white';
      document.body.style.color='black';
    }
  }
  return (
    <>
    {/* <BrowserRouter> */}

   
      <Navbar title="Doc.Formatter" aboutText="About" mode={darkMode} text={text} toggleMode={toggleMode}/>
      {/* <Navbar /> */}

    <div className="container my-3">
    {/* <Routes> */}

      
      {/* <Route exact path="/about" element={<About/>}/>  */}

      {/* <About/> */}
        
      {/* <Route exact path="/" element={<Textforms heading="Enter the text to analyze" mode={darkMode}/>}/> */}
      
      <Textforms heading="Enter the text to analyze" mode={darkMode}/>
      
      
      
    {/* </Routes> */}
    </div>
    {/* </BrowserRouter> */}
    </>
  );
}

export default App
