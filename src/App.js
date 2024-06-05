import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Alert from './Alert';
import './App.css';
import Navbar from './Navbar';
import Home from './home'; // Assuming this is the correct filename
import { useState, useEffect } from 'react';
import About from './About'; // Assuming this is the correct filename

function App() {
  // Dark mode
  const [color, setColor] = useState('black');
  const [bg_color, setBgColor] = useState('white');
  const [type, setType] = useState('dark');

  useEffect(() => {
    document.body.style.backgroundColor = bg_color;
    document.body.style.color = color;
  }, [color, bg_color]);

  // Alert 
  const [alert, setAlert] = useState(null);
  const showAlert = (type, msg) => {
    setAlert({ type, msg });
    setTimeout(() => {
      setAlert(null);
    }, 10000);
  };

  const toggleNavbar = () => {
    if (color === 'white') {
      setColor('black');
      setBgColor('white');
      setType('dark');
      showAlert('success', 'Dark mode is enabled');
    } else {
      setColor('white');
      setBgColor('black');
      setType('light');
      showAlert('success', 'Light mode is enabled');
    }
  };

  return (
    <div className="App">
      <Navbar title="TextUtils" onChange={toggleNavbar} color={color} bg_color={bg_color} type={type} />
      <Alert alert={alert} />
      <Router>
        <Routes>
          <Route path="/" element={<Home bg_color={bg_color} color={color} showalert={showAlert} />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
