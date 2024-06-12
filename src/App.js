// App.js
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux'; // Step 1: Import Provider



 // Import the Home component
 // Import the Profile component
import Navbar332 from './Website332';
import store from './Redux/store';
import Profile from './User/ProfilePage';
import Input1 from './User/signuppage';
import Login from './User/loginpage';
import SuccessPage from './User/loginsuccess';
import Home from './User/HomePage';

function App() {
  return (
    <Provider store={store}> 
      <Router>
        <Routes>
          <Route path="/" element={<Navbar332 />} />
          <Route path="/signup" element={<Input1 />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginsuccess" element={<SuccessPage />} />
          <Route path="/home" element={<Home />} /> {/* Route for Home Page */}
          <Route path="/profile" element={<Profile />} /> {/* Route for Profile Page */}
        </Routes>
      </Router>
    </Provider>
  );
}

export default App;
