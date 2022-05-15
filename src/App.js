import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import Alert from './components/Alert';
import { Routes, Route, Link } from "react-router-dom";
import About from './components/About';

function App() {

  const [mode, setMode] = useState("light");
  const [alert, setAlert] = useState(null);

  const showAlert = (message, type) => {
    setAlert({
      message: message,
      type: type
    });
    setTimeout(() => {
      setAlert(null);
    }, 3300);
  }

  const changeMode = () => {
    if(mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#0f113c";
      showAlert("Dark mode is enabled.", "success");
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("Light mode is enabled.", "success");
    }
  }

  return (
    <>
    <Navbar title="Project-One" mode={mode}  changeMode={changeMode}></Navbar>
    <Alert alert={alert}></Alert>
    <Routes>
      <Route path='/' element={<TextForm label="Enter Your Text" mode={mode} showAlert={showAlert}></TextForm>}></Route>
      <Route path='/about-us' element={<About></About>}></Route>
    </Routes>
    
    </>
    
  );
}

export default App;