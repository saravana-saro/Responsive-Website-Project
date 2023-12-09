import React from 'react';
import { Link } from 'react-router-dom';
import { FaHome, FaUser } from 'react-icons/fa';
import './dasboard.css';

const Dashboard = () => {
  return (
    <div className='dashboard-container'>
      <h2>Welcome to our Website</h2>
      <div className='icon-container'>
        <Link to="/home" className='icon-link'>
          <FaHome className='icon' /> <span className='text'></span>
        </Link>
        <Link to="/user" className='icon-link'>
          <FaUser className='icon' /> <span className='text'></span> 
        </Link>
      
      </div>
    </div>
  );
};

export default Dashboard;






