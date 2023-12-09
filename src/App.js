import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Login from './componentLogin/Login';
import Dashboard from './componentDashboard/Dashboard';
import HomePage from './componentHome/HomePage';
import UserProfilePage from './componentUser/UserProfilePage';

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={isLoggedIn ? <Dashboard /> : <Login onLogin={handleLogin} />} />
        <Route path="/home" element={<HomePage />} /> 
        <Route path="/user" element={<UserProfilePage />} /> 
</Routes>
    </Router>
  );
};

export default App;
